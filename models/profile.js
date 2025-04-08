import mongoose from 'mongoose'

const Schema = mongoose.Schema

// todo: update the profiles to current best practice
const profileSchema = new Schema({
  name: String,
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
