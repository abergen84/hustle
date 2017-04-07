import User from './models/userModel.js'
import Backbone from 'backbone'
import { JobModel } from './models/jobsModel'
import STORE from './store'


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

	, logoutUser: () =>
		User.logout().then(() =>
			location.hash = "home")

	, saveJob: function(jobData) {
			var newJob = new JobModel(jobData)
			newJob.save()
				.then(
					(success)=> {
						console.log(success)
						location.hash = "home"
					}, 
					(error)=>console.log(error))
	}

	, fetchJobs: function(queryObj){
		console.log(queryObj)
			STORE.data.jobCollection.fetch({
				data: queryObj
				, success: (info)=> console.log('success getting jobs', info)
			}).then((data)=> console.log('success getting collection jobs', data))
	}

	, fetchJob: function(model){
			STORE.data.jobModel.fetch(model)
			.then((data)=> console.log('success getting job', data))
	}

	, searchJobs: function(searchObj){
			const coll = STORE.data.jobCollection
			console.log('before', coll)
			const filtered = coll.filter((job) =>
				job.get("title") === searchObj.title.toLowerCase() || 
				job.get("worktype") === searchObj.worktype.toLowerCase() ||
				job.get("location") === searchObj.location.toLowerCase() 
			)
			coll.reset(filtered)
			console.log('after', coll)
	}

	, getEvent: function(){
		Backbone.Events.on('jobinfo', (payload)=>{
		console.log('payload', payload)
		})
	}

}


export default ACTIONS