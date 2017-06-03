import Backbone from 'backbone'
import React from 'react'
import Header from './header'
import ACTIONS from '../actions'
import STORE from '../store'
import PubSub from 'pubsub-js'


const ViewJobs = React.createClass({
	
	getInitialState(){
		return STORE.getData()
	}

	, componentWillMount(){
		STORE.on('updateContent', ()=> {
			this.setState(STORE.getData())
		})
		Backbone.Events.on('jobCriteria', function(payload){
			console.log('payload', payload)
		})
	}

	, render(){
		return (
			<div className="viewJobs">
				<Header />
				<JobSearchResults filteredJobs={this.state.jobCollection} />
			</div>
			)
		}
})


const JobSearchResults = React.createClass({

	render(){

		// Backbone.Events.on('jobCriteria', (payload)=>{
		// 	console.log(payload)
		// })

		console.log(this.props.filteredJobs)
		return (
			<div className="jobSearchResults">
				<div className="search-results-header">
					<h5>Results for X jobs in X during X</h5>
				</div>
				
				{this.props.filteredJobs.models.map(
					(job) =>
					<FilteredJob job={job} key={job.cid} />
				)}
			</div>
		)
	}
})

const FilteredJob = React.createClass({
	
	gotoJob(){
		location.hash = `job/${this.props.job.id}`
	}

	, render(){
		return (
			<div className="job-profile" onClick={this.gotoJob} >
				<h3>{this.props.job.get('company')}</h3>
				<p>{this.props.job.get('title')}</p>
				<p>{this.props.job.get('location')}</p>
				<p>{this.props.job.get('worktype')}</p>
			</div>
		)
	}
})



export default ViewJobs