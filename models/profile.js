import mongoose from 'mongoose'

const Schema = mongoose.Schema

// todo: update the profiles to current best practice
const profileSchema = new Schema({
  userName: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
