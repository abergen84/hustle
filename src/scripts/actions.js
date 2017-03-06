import User from './models/userModel.js'
import Backbone from 'backbone'
import { JobModel } from './models/jobsModel'


const ACTIONS = {

	registerUser: (registerUserData) => {
		User.register(registerUserData)
			.then(
				(success) => {
					console.log(success)
					location.hash = "home"
				},
				(error) => console.log(error))
	}

	, loginUser: (email,password) => {
		User.login(email,password)
			.then(
				(success)=> {
					console.log(success)
					location.hash = "home"
			},
				(error)=> console.log(error))
	}


	, saveJob: function(jobData) {
			var newJob = new JobModel(jobData)
			newJob.save()
				.then(
					(success)=>console.log(success), 
					(error)=>console.log(error))
	}

}


export default ACTIONS