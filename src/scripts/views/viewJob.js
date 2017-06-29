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

	// getInitialState(){
	// 	return STORE.getData()
	// }

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


// const JobInfo = React.createClass({

class JobInfo extends React.Component {

	constructor(props) {
		super(props)
		console.log('constructor', this.props)
	}

	// componentWillReceiveProps(nextProps){
	// 	if(nextProps.job){
	// 		this.render()
	// 	}
	// }

	addToFavorites(){
		// if(!this.props.job.get('favorite').includes(User.getCurrentUser().id)) {
		console.log('add to faves', this.props.job)
		ACTIONS.addToFavorites(this.props.job, User.getCurrentUser().id)
		// } else {
			// alert('already in your favorites!')
		// }

	}

	render(){
		console.log('render', this.props.job)
		// console.log('user', User.getCurrentUser().id)
		const jobFaves = this.props.job.get('favorite')
		const userLoggedIn = User.getCurrentUser().id
		// console.log(jobFaves, userLoggedIn)
		const isItFavorited = jobFaves.includes(userLoggedIn)
		console.log(isItFavorited)
		// let disableButton
		// if (jobFaves.includes(userLoggedIn)) {
		// 	disableButton = <Button disabled>Favorited</Button>
		// } else {
		// 	disableButton = <Button onClick={this.addToFavorites}>Add to favorites</Button>
		// }

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
					{isItFavorited ? <Button disabled>Favorited</Button> : <Button onClick={this.addToFavorites.bind(this)}>Add to favorites</Button>}
				</div>
			</div>
			)
	}

}

export default JobView