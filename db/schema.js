const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
   // example of optional fields
  name:      { type: String },
  createdAt: { type: Date, default: Date.now }

})

// ----------------------
// JOB POSTING
// ----------------------

const jobSchema = new mongoose.Schema({
	email: { type: String, required: true }
  , company: { type: String, required: true }
	, title: { type: String, required: true }
	, description: { type: String, required: true }
	, city: { type: String, required: true }
  , state: { type: String, required: true }
	, worktype: { type: String, required: true }
  , hours: { type: String, required: true }
	, created: { type: Date, default: Date.now }
  , expires: { type: Date, required: true }
  , favorite: {type: [String], default: [] }
})




module.exports = {
  User: mongoose.model('User', usersSchema)
  , Job: mongoose.model('Job', jobSchema)
}
