import React from 'react'
import Header from './header'
import STORE from '../store'
import ACTIONS from '../actions'



const JobView = React.createClass({
	
	getInitialState(){
		return STORE.getData()
	}

	, componentWillMount(){
			console.log('this', this)
			ACTIONS.fetchJob({
				url: `/api/job/${this.props.id}`
			})
			STORE.on('updateContent', ()=> {
				this.setState(
					STORE.getData()
				)
			})
	}

	, componentWillUnmount(){
			STORE.off('updateContent')
	}

	, render(){
		console.log('under render', this.state.jobModel)
			return (
				<div>
					<Header />
					<JobInfo job={this.state.jobModel} />
				</div>
				)
		}
})


const JobInfo = React.createClass({



	render(){
		return (
			<div className="job-posting">
				<div id="job-posting-basic-info">
					<h2>{this.props.job.get('company')}</h2>
					<p>{this.props.job.get('city')}, {this.props.job.get('state')}</p>
				</div>
				<div id="job-posting-detailed-info">
					<p>{this.props.job.get('worktype')}: generally {this.props.job.get('hours')}</p>
					<p>{this.props.job.get('title')}</p>
					<p>{this.props.job.get('description')}</p>
				</div>
			</div>
			)
	}
})

export default JobView