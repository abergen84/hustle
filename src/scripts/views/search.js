import React from 'react'
import Header from './header'
import { Button } from 'react-bootstrap'
import STORE from '../store'
import ACTIONS from '../actions'


const SearchView = React.createClass({

	render(){
		return (
			<div>
				<Header />	
				<SearchInput />
			</div>
			)
	}
})

const SearchInput = React.createClass({

	getInitialState(){
		return {
			showjobs: false
		}
	}

	, submit(event){
		event.preventDefault()
		
		this.setState({
			showjobs: true
		})

	const searchObj = {
		title: event.currentTarget.jobtitle.value
		, city: event.currentTarget.city.value
		, worktype: event.currentTarget.worktype.value
		, company: event.currentTarget.company.value
		, hours: event.currentTarget.hours.value
	}

	ACTIONS.searchJobs(searchObj)

	}

	, render(){
		
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
			<div className="search-criteria-form">
					<form onSubmit={this.submit}>
						<input id="jobtitle" type="text" placeholder="job title" name="jobtitle" />
						<input id="city" type="text" placeholder="city" name="city" required />
						<input id="company" type="text" placeholder="company" name="company" />
						<select name="worktype">
							<option></option>
							<option>part-time weekend</option>
							<option>part-time weekday daytime</option>
							<option>part-time weekday evenings</option>
						</select>
						<select name="hours">
							<option></option>
							<option>1 - 5 hours/week</option>
							<option>6 - 10 hours/week</option>
							<option>11 - 15 hours/week</option>
							<option>16 - 20 hours/week</option>
							<option>20+ hours/week</option>
						</select>
						<Button bsStyle="default" bsSize="large" type="submit">submit</Button>
					</form>
					<div style={show}><SearchResults /></div>
				</div>
			)
	}
})

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
				{this.state.jobCollection.map((job)=>{
					return <Job job={job} key={job.cid} />
				})}
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
			<div>
				<h1><a onClick={this.goToJob}>{this.props.job.get('title')}</a></h1>
				<p>{this.props.job.get('description')}</p>
			</div>
			)
	}
})

export default SearchView