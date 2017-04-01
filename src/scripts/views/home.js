import React from 'react'
import Backbone from 'backbone'
import Header from './header'
import STORE from '../store'
import ACTIONS from '../actions'




class Home extends React.Component {
	
	constructor(){
		super()
		ACTIONS.fetchJobs()
		this.state = STORE.getData()
		console.log('constructor', this.state)
	}

	componentWillMount(){
		STORE.on('updateContent', ()=> {
			this.setState(STORE.getData())
		})
	}

	componentWillUnmount(){
		STORE.off('updateContent')
	}

	render(){
		return (
			<div className="homepage">
				<Header />
				<div className="home">
					<Tagline />
					<HomeSearch />
					<HomeSearchResults jobColl={this.state.jobCollection} />
				</div>
			</div>
			)
	}
}

const Tagline = React.createClass({
	render(){
		return (
			<div id="tagline">
				<span>find your dream side gig.</span>
			</div>
			)
	}
})

class HomeSearch extends React.Component {
	
	submit(event){
		event.preventDefault()
		ACTIONS.searchJobs({
			title: event.currentTarget.jobtitle.value
			, worktype: event.currentTarget.worktype.value
			, location: event.currentTarget.location.value
		})
	}

	render(){
		return (
			<div className="homeSearch">
				<form onSubmit={this.submit}>
					<input id="jobtitle" type="text" placeholder="job title" name="jobtitle" />
					<select name="worktype">
						<option>part-time weekend</option>
						<option>part-time weekday daytime</option>
						<option>part-time weekday evenings</option>
					</select>
					<input id="location" type="text" placeholder="city" name="location" />
					<button type="submit">submit</button>
				</form>
			</div>
			)
	}
}

class HomeSearchResults extends React.Component {
	
	mapresults(model){
		return <Job model={model} key={model.cid} />
	}

	render() {
		console.log('HomeSearchResults', this.props.jobColl)
		return (
			<div className="jobResults">
					{this.props.jobColl.models.map(this.mapresults)}
			</div>
			)
	}
}

const Job = React.createClass({

	goToJob(){
		location.hash = `job/${this.props.model.get('_id')}`
	}

	, render(){
		return (
			<div onClick={this.goToJob} >
				<h3>{this.props.model.attributes.company}</h3>
				<p>{this.props.model.get('title')}</p>
			</div>
			)
	}
})

export default Home