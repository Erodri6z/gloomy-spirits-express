import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const saltRounds = 6
const Schema = mongoose.Schema

const userSchema = new Schema({
  Email:    { type: String, required: true, lowercase: true, unique: true },
  Username: { type: String, required: true, unique: true },
  PasswordHash: { type: String, required: true }
}, {
  timestamps: true,
  collection: "Users"
})

userSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password
    return ret
  }
})

userSchema.pre('save', async function (next) {
  const user = this
  if (!user.isModified('password')) return next()

  try {
    const hash = await bcrypt.hash(user.password, saltRounds)
    user.password = hash
    next()
  } catch (err) {
    next(err)
  }
})

userSchema.methods.comparePassword = async function (tryPassword) {
  return await bcrypt.compare(tryPassword, this.password)
}

const User = mongoose.model('User', userSchema)

export { User }
