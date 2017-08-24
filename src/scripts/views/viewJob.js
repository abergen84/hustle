import React from 'react'
import Header from './header'
import STORE from '../store'
import ACTIONS from '../actions'
import User from '../models/userModel'
import { Button } from 'react-bootstrap'



class JobView extends React.Component {
	
	constructor(props){
		super(props)
		this.state = STORE.getData()
	}

	componentWillMount(){
			ACTIONS.fetchJob({
				url: `/api/job/${this.props.id}`
			})
			STORE.on('updateContent', ()=> {
				this.setState(
					STORE.getData()
				)
			})
	}

	componentWillUnmount(){
			STORE.off('updateContent')
	}

	render(){
		console.log('log state', this.state.jobModel)
			return (
				<div>
					<Header />
					{
						this.state.jobModel.get('favorite') ? 
						<JobInfo job={this.state.jobModel} /> : <div className="loading">loading</div>
					}
				</div>
				)
		}

}

class JobInfo extends React.Component {

	constructor(props) {
		super(props)
		console.log('constructor', this.props)
	}

	addToFavorites(){
		ACTIONS.addToFavorites(this.props.job, User.getCurrentUser().id)
	}

	render(){
		console.log('render', this.props.job)
		// console.log('user', User.getCurrentUser().id)
		const jobFaves = this.props.job.get('favorite')
		const userLoggedIn = User.getCurrentUser().id
		const isItFavorited = jobFaves.includes(userLoggedIn)
		
		var applyButton
		var faveButton
		
		// logic for showing apply button - if not logged in, disable
		if(User.getCurrentUser().id) {
			applyButton = <Button>Apply!</Button>
		} else {
			applyButton = <Button disabled>Apply!</Button>
		}
		// logic for showing favorited button - if not logged in, disabled. if logged in and already favorited, disabled
		if(!User.getCurrentUser().id) {
			faveButton = <Button disabled>Add to favorites</Button>
		}
		else if(User.getCurrentUser().id && isItFavorited) {
			faveButton = <Button disabled>Favorited</Button>
		}
		else if(User.getCurrentUser().id && !isItFavorited) {
			faveButton = <Button onClick={this.addToFavorites.bind(this)}>Add to favorites</Button>
		}

		return (
			<div className="job-posting">
				<div id="job-posting-basic-info">
					<h2>{this.props.job.get('company')}</h2>
					<h4>{this.props.job.get('title')}</h4>
					<p>{this.props.job.get('city')}, {this.props.job.get('state')}</p>
				</div>
				<div id="job-posting-detailed-info">
					<p>{this.props.job.get('worktype')}: generally {this.props.job.get('hours')}</p>
					<p>{this.props.job.get('description')}</p>
					{applyButton}
					{faveButton}
				</div>
			</div>
			)
	}

}

export default JobView