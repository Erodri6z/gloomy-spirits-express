import mongoose from 'mongoose'

const db = mongoose.connection

mongoose.connect(process.env.CONNECTION_STRING)

db.on('connected', function () {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})
