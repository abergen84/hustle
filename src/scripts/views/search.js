import React from 'react'
import Header from './header'
import { Button } from 'react-bootstrap'


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
	render(){
		return (
			<div className="search-criteria-form">
					<form onSubmit={this.submit}>
						<input id="jobtitle" type="text" placeholder="job title" name="jobtitle" />
						<input id="location" type="text" placeholder="city" name="location" />
						<select name="worktype">
							<option>part-time weekend</option>
							<option>part-time weekday daytime</option>
							<option>part-time weekday evenings</option>
						</select>
						<input id="company" type="text" placeholder="company" name="company" />
						<select name="hours">
							<option>1 - 5 hours/week</option>
							<option>6 - 10 hours/week</option>
							<option>11 - 15 hours/week</option>
							<option>16 - 20 hours/week</option>
							<option>20+ hours/week</option>
						</select>
						<Button bsStyle="default" bsSize="large" type="submit">submit</Button>
					</form>
				</div>
			)
	}
})

export default SearchView