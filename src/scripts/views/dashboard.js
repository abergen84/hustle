import React from 'react'
import Header from './header'
import Footer from './footer'
import User from '../models/userModel'
import STORE from '../store'
import ACTIONS from '../actions'


class Dashboard extends React.Component {

	constructor(props) {
		super(props)
		this.state = STORE.getData()
		// console.log(this.state)
	}

	componentWillMount() {
		const user_id = User.getCurrentUser().id
		console.log('user id', user_id)
		ACTIONS.fetchJobs({favorite: user_id})

		STORE.on('updateContent', ()=> {
			this.setState(STORE.getData())
		})
	}

	componentWillUnmount() {
		STORE.off('updateContent')
	}

	render(){
		console.log('state under render', this.state)
		return (
			<div className="dashboardPage">
				<Header />
				<MainDash />
				{this.state.jobCollection ? 
				<FavoriteJobs jobs={this.state.jobCollection} /> : <h2>LOADING</h2> }
				<Footer />
			</div>
			)
	}
}

class MainDash extends React.Component {
	render(){
		const name = User.getCurrentUser().attributes.firstname
		return (
			<div className="dashboard-header">
				<h3>Welcome back, {name}. </h3>
				<p>See the jobs you've posted or saved below</p>
			</div>
			)
	}
}

class FavoriteJobs extends React.Component {
	render(){
		console.log('the jobs', this.props.jobs.models)
		if(this.props.jobs) {
		return (
			<div>
				<div className="favorites">
				<h3>Favorited Jobs</h3>
				{this.props.jobs.models.map(
						(job) => <FavoriteJob job={job} key={job.cid} />)}
				</div>
				<div className="posted">
					<h3>Posted Jobs</h3>
				</div>

			</div>
			)
		}
	}
}

class FavoriteJob extends React.Component {

	gotoJob(){
		console.log(this.props)
		location.hash = `job/${this.props.job.id}`
	}

	render(){
		return (
			<div className="dashboard-job" onClick={this.gotoJob.bind(this)} >
				<h3>{this.props.job.get('title')}</h3>
				<p>{this.props.job.get('city')}, {this.props.job.get('state')}</p>
					{
						this.props.job.get('expires') ? <p>Expires on {this.props.job.get('expires')}</p> : <p>Expiration Date N/A</p>
					}
			</div>
			)
	}
}



export default Dashboard