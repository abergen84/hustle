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
			<div>
				<h2>{this.props.job.get('title')}</h2>
			</div>
			)
	}
})

export default JobView