import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import Header from './header'
import Footer from './footer'
import STORE from '../store'
import ACTIONS from '../actions'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

class Home extends React.Component {
	
	constructor(){
		super()
		ACTIONS.fetchJobs()
		this.state = STORE.getData()
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
				<Footer />
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
			<div>
				<div className="intro">
					<Grid>
						<Row>
							<Col lg={4} sm={12}>
								<div className="icon-circle">
									<FontAwesome className="icon intro-paper" name="file-text-o" size="5x" />
								</div>
							</Col>
							<Col lg={8} sm={12}>
								<h1>Search. Apply. Make money.</h1>
								<p>It's as simple as finding something you enjoy doing in your spare time, and cashing in. 
								Instead of trying to waste time selling your service or product, let someone else established 
								take on that task while you worry about working. No catches, just extra income when you realize your time is valuable and 
								you'd rather spend it wisely.</p>
							</Col>
						</Row>
					</Grid>
				</div>
				<div className="steps">
					<Grid>
						<Row>
							<Col lg={4} sm={12}>
								<div className="card">
									<FontAwesome className="icon" name="list" size="5x" />
									<h4>Your source of side jobs.</h4>
									<p>
										Hustlegigs is your biggest and best source of creative side jobs in the world. Most job boards cater to full-time
										positions, with side jobs as a distant second. Therefore, no source exists until today for a one-stop shop for 
										finding side jobs that will make you money. 
									</p>
								</div>
							</Col>
							<Col lg={4} sm={12}>
								<div className="card">
									<FontAwesome className="icon" name="search-plus" size="5x" />
									<h4>Search for what you want.</h4>
									<p>
										Easy search and options allow you to narrow down what you're looking for. Stop spending time searching
										in person for what you want by calling random businesses and wasting time. 
									</p>
								</div>
							</Col>
							<Col lg={4} sm={12}>
								<div className="card">
									<FontAwesome className="icon" name="handshake-o" size="5x" />
									<h4>Get paid doing what you love.</h4>
									<p>
										Make money digging into your hobbies or interests instead of spending your free time doing it at no cost. Why not sharpen your skills
										while helping someone else? Feel good about providing for another small business while honing in your creative desires. And getting paid, of
										course.
									</p>
								</div>
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
			)
	}
})

export default Home