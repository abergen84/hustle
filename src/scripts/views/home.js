import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import Header from './header'
import STORE from '../store'
import ACTIONS from '../actions'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'


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
			<div>
				<Header />
				<Row>
					<div className="home">
						<HomeSearch />
					{/* <HomeSearchResults jobColl={this.state.jobCollection} /> */}
					</div>
				</Row>
				<Intro />
			</div>
			)
	}
}

class HomeSearch extends React.Component {
	
	submit(event){
		event.preventDefault()
	
		location.hash = `jobs/${event.currentTarget.jobtitle.value}/
		${event.currentTarget.worktype.value}/
		${event.currentTarget.location.value}`
	}

	render(){
		return (
			<div className="homeSearch">
				<span id="tagline">find your dream side gig.</span>
				<form onSubmit={this.submit}>
					<input id="jobtitle" type="text" placeholder="job title" name="jobtitle" />
					<input id="location" type="text" placeholder="city" name="location" />
					<select name="worktype">
						<option>part-time weekend</option>
						<option>part-time weekday daytime</option>
						<option>part-time weekday evenings</option>
					</select>
					<a href="#search">Advanced Search</a>
					<Button bsStyle="default" bsSize="large" type="submit">submit</Button>
				</form>
			</div>
			)
	}
}

const Intro = React.createClass({
	render(){
		return (
			<div className="intro">
				<Grid>
					<Row>
						<Col lg={4} sm={12}>
							<FontAwesome className="icon" name="rocket" size="5x" />
						</Col>
						<Col lg={8} sm={12}>
							<h1>Search. Apply. Make money.</h1>
							<p>It's as simple as finding a job, doing it in your spare time, and cashing in. 
							No catches, just extra income when you realize your time is valuable and you'd rather
							spend it wisely.</p>
						</Col>
					</Row>
				</Grid>
			</div>
			)
	}
})

// class HomeSearchResults extends React.Component {
	
// 	mapresults(model){
// 		return <Job model={model} key={model.cid} />
// 	}

// 	render() {
// 		console.log('HomeSearchResults', this.props.jobColl)
// 		return (
// 				<div className="jobResults">
// 					<span>Some of the latest jobs posted from around the nation:</span>
// 					{this.props.jobColl.models.map(this.mapresults)}
// 				</div>
// 			)
// 	}
// }

// const Job = React.createClass({

// 	goToJob(){
// 		location.hash = `job/${this.props.model.get('_id')}`
// 	}

// 	, render(){	
// 		return (
// 			<div className="job" onClick={this.goToJob} >
// 				<h3>{this.props.model.get('company')}</h3>
// 				<p>{this.props.model.get('title')}</p>
// 				<p>{this.props.model.get('location')}</p>
// 				<p>{this.props.model.get('worktype')}</p>
// 			</div>
// 			)
// 	}
// })

export default Home