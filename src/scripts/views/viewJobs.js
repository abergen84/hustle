import Backbone from 'backbone'
import React from 'react'
import Header from './header'
import ACTIONS from '../actions'
import STORE from '../store'


const ViewJobs = React.createClass({
	
	// getInitialState(){
	// 	return {
	// 		jobs: function searchJobs(obj){
	// 			console.log(obj)
	// 			ACTIONS.searchJobs(obj)
	// 		}
	// 	}
	// }

	componentWillMount(){
		console.log('componentWillMount')
		STORE.on('jobinfo', (data)=>{
		console.log('payload', data)
		})
	}

	, render(){
		return (
			<div className="viewJobs">
			<Header />
			<JobSearchResults />
		</div>
		)
	}
})


const JobSearchResults = React.createClass({

	render(){
		return (
			<div className="jobSearchResults">

			</div>
		)
	}
})



export default ViewJobs