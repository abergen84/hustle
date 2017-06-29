import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import Header from './header'
import STORE from '../store'
import ACTIONS from '../actions'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
//import PubSub from 'pubsub-js'

class Home extends React.Component {
	
	constructor(){
		super()
		ACTIONS.fetchJobs()
		this.state = STORE.getData()
		//console.log('constructor', this.state)
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
		const searchObj = {
			title: event.currentTarget.jobtitle.value.toLowerCase()
			, worktype: event.currentTarget.worktype.value.toLowerCase()
			, city: event.currentTarget.city.value.toLowerCase()
			, hours: ''
			, company: ''
		}
		
		ACTIONS.searchJobs(searchObj)
		
		location.hash = 'jobs'

	}

	render(){
		return (
			<div className="homeSearch">
				<span id="tagline">find your side gig.</span>
				<form onSubmit={this.submit}>
					<input id="jobtitle" type="text" placeholder="job title" name="jobtitle" />
					<input id="city" type="text" placeholder="city" name="city" required />
					<select name="worktype">
						<option></option>
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
							<h1>Search. Apply. Money.</h1>
							<p>It's as simple as finding something you enjoy doing in your spare time, and cashing in. 
							Instead of trying to waste time selling your service or product, let someone else established 
							take on that task while you worry about working. No catches, just extra income when you realize your time is valuable and 
							you'd rather spend it wisely.</p>
						</Col>
					</Row>
				</Grid>
			</div>
			)
	}
})

export default Home