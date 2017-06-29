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
		console.log('entire searchObj', searchObj)
			const jobColl = STORE.data.jobCollection
			// const filtered = jobColl.filter((job) => {
				for(var prop in searchObj) {
					console.log('prop', prop)
					// console.log('jobprop', job.get(prop))
					console.log('searchobjprop', searchObj[prop])
				// 	if(job.get(prop) === searchObj[prop]) {
				// 		return true
				// 	} else if (job.get(prop) === '' || job.get(prop) === searchObj[prop]) {
				// 		return true
				// 	} else {
				// 		return false
				// 	}
				// }
			}
				// job.get("title") === searchObj.title.toLowerCase() ||
				// job.get("city") === searchObj.city.toLowerCase() ||
				// job.get("worktype") === searchObj.worktype.toLowerCase() ||
				// job.get("hours") === searchObj.hours.toLowerCase() ||
				// job.get("company") === searchObj.company.toLowerCase()
			// )
			// jobColl.reset(filtered)

			// STORE.data.jobinfo = searchObj

	}

	, addToFavorites: function(job, user){
			job.set({
				favorite: job.get('favorite').concat(user)
			})
			job.save().then(()=>STORE.data.jobModel.fetch())
	}

}


export default ACTIONS