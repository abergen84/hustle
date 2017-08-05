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
		STORE.on('updateContent', ()=> {
			this.setState(STORE.getData())
		})
	}

	, componentDidMount(){
	}

	, componentWillUnmount(){
		STORE.off('updateContent')
	}

	, render(){
		console.log(this.state)
		return (
			<div className="viewJobs">
				<Header />
				<JobSearchResults filteredJobs={this.state.jobCollection} jobinfo={this.state.jobinfo} />
			</div>
			)
		}
})


const JobSearchResults = React.createClass({

	render(){

		console.log(this.props.filteredJobs)
		return (
			<div className="jobSearchResults">
				<div className="search-results-header">
					<h5>Results for <b>{this.props.jobinfo.title}</b> jobs in <b>{this.props.jobinfo.city}</b></h5>
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
				<p>{this.props.job.get('city')}</p>
				<p>{this.props.job.get('worktype')}</p>
			</div>
		)
	}
})



export default ViewJobs