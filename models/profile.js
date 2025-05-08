import mongoose from 'mongoose'

const Schema = mongoose.Schema

// todo: update the profiles to current best practice
const profileSchema = new Schema({
  UserName: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  User: { type: Schema.Types.ObjectId, ref: "User", required: true }
},{
  timestamps: true,
},{
  collection: "Profiles"
})


const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
