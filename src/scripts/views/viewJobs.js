import Backbone from 'backbone'
import React from 'react'
import Header from './header'
import ACTIONS from '../actions'
import STORE from '../store'
import { Grid, Row, Col } from 'react-bootstrap'


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
		// var title = this.props.jobinfo.title.charAt(0).toUpperCase() + this.props.jobinfo.title.slice(1)
		// console.log('title', title)
		console.log(this.props.filteredJobs)
		return (
			<div className="jobSearchResults">
				<div className="search-results-header">
					<h5>Results for <b>{this.props.jobinfo.title}</b> jobs in <b>{this.props.jobinfo.city}</b></h5>
				</div>
					<div className="search-results-body">
						<Grid fluid>
							<Row>
								<Col md={3} sm={2} >
										<div className="results-column">
											<p>Job title: {
												this.props.jobinfo.title == '' ? 'No term entered.' : this.props.jobinfo.title
											} </p>
											<p>City selected: {this.props.jobinfo.city} </p>
											<p>Job type: {
												this.props.jobinfo.worktype == '' ? 'No type selected.' : this.props.jobinfo.worktype
											} </p>
										</div>
									</Col>
									<Col md={8} sm={9} >
									{this.props.filteredJobs.models.map(
										(job) =>
										<FilteredJob job={job} key={job.cid} />
									)}
									</Col>
							</Row>
						</Grid>
					</div>
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
				<h3>{this.props.job.get('title')}</h3>
				<p><em>{this.props.job.get('company')}</em></p>
				<p>{this.props.job.get('city')}</p>
				<p>{this.props.job.get('worktype')}</p>
			</div>
		)
	}
})



export default ViewJobs