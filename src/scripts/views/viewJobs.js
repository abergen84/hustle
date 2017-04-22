import Backbone from 'backbone'
import React from 'react'
import Header from './header'
import ACTIONS from '../actions'
import STORE from '../store'


const ViewJobs = React.createClass({
	
	getInitialState(){
		return STORE.getData()
	}

	, componentWillMount(){
		// ACTIONS.fetchJobs()
		ACTIONS.searchJobs({
			title: this.props.title
			, worktype: this.props.worktype
			, location: this.props.location
		})
		STORE.on('updateContent', ()=> {
			this.setState(STORE.getData())
		})
		console.log('after the search', this.state)
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
		console.log(this.props.filteredJobs)
		return (
			<div className="jobSearchResults">
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
		<div onClick={this.gotoJob} >
			<h3>{this.props.job.get('company')}</h3>
			<p>{this.props.job.get('title')}</p>
			<p>{this.props.job.get('location')}</p>
			<p>{this.props.job.get('worktype')}</p>
		</div>
		)
	}
})



export default ViewJobs