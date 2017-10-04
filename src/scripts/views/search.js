import React from 'react'
import Header from './header'
import { Button } from 'react-bootstrap'
import STORE from '../store'
import ACTIONS from '../actions'
import {Grid,Row,Col,FieldGroup} from 'react-bootstrap'


class SearchView extends React.Component {

	render(){
		return (
			<div>
				<Header />	
				<SearchInput />
			</div>
			)
	}
}

class SearchInput extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			showjobs: false
		}
		this.submit = this.submit.bind(this)
	}

	// getInitialState(){
	// 	return {
	// 		showjobs: false
	// 	}
	// }

	submit(event){
		event.preventDefault()
		
		this.setState({
			showjobs: true
		})

	const searchObj = {
		title: event.currentTarget.jobtitle.value.toLowerCase()
		, city: event.currentTarget.city.value.toLowerCase()
		, worktype: event.currentTarget.worktype.value.toLowerCase()
		, company: event.currentTarget.company.value.toLowerCase()
		, hours: event.currentTarget.hours.value
	}

	ACTIONS.searchJobs(searchObj)

	}

	render(){
		
		var show
		if(this.state.showjobs == true){
			show = {
				display: 'block'
			}
		} else {
			show = {
				display: 'none'
			}
		}

		return (
			<Row>
			<div className="search-page">
				<h1>Now we're cookin'.</h1>
					<div className="search-criteria-form">
						<form onSubmit={this.submit}>
							<input id="jobtitle" type="text" placeholder="Job Title" name="jobtitle" />
							<input id="city" type="text" placeholder="City" name="city" required />
							<input id="company" type="text" placeholder="Company" name="company" />
							<select name="worktype">
								<option></option>
								<option>Part-time weekend</option>
								<option>Part-time weekday daytime</option>
								<option>Part-time weekday evenings</option>
							</select>
							<select name="hours">
								<option></option>
								<option default>1 - 5 hours/week</option>
								<option>6 - 10 hours/week</option>
								<option>11 - 15 hours/week</option>
								<option>16 - 20 hours/week</option>
								<option>20+ hours/week</option>
							</select>
							<Button bsStyle="default" bsSize="large" type="submit">submit</Button>
						</form>
						</div>
					</div>
					<div style={show}><SearchResults /></div>
				</Row>
			)
	}

}

const SearchResults = React.createClass({

	getInitialState(){
		return STORE.getData()
	}

	, componentWillMount(){
		this.setState(STORE.getData())
		ACTIONS.fetchJobs()
		STORE.on('updateContent', ()=>{
			this.setState(STORE.getData())
		})
	}

	, componentWillUnmount(){
		STORE.off('updateContent')
	}

	, render(){
		console.log('log', this.state.jobCollection)
		return (
			<div>
				<h4 className="number-results">Found {this.state.jobCollection.length} jobs based on your search.</h4>
				<Grid>
					<Row>
						<div>
							{this.state.jobCollection.map((job)=>{
								return <Job job={job} key={job.cid} />
							})}
						</div>
					</Row>
				</Grid>
			</div>
			)
	}
})

const Job = React.createClass({
	
	goToJob(){
		location.hash = `job/${this.props.job.id}`
	}

	, render(){
		return (
			<Col lg={6} sm={6} xs={12}>
				<div className="job-listing-search">
					<h3>{this.props.job.get('title')}</h3>
					<p>{this.props.job.get('city')},{this.props.job.get('state')}</p>
					<p>{this.props.job.get('hours')}</p>
					<p>{this.props.job.get('worktype')}</p>
					<p>{this.props.job.get('description')}</p>
					<Button bsStyle="default" bsSize="sm" onClick={this.goToJob}>More info</Button>
				</div>
			</Col>

			)
	}
})

export default SearchView