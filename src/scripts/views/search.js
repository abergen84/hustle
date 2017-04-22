import React from 'react'
import { Header } from './header'
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
			<div className="search-criteria">
					<form onSubmit={this.submit}>
						<input id="jobtitle" type="text" placeholder="job title" name="jobtitle" />
						<input id="location" type="text" placeholder="city" name="location" />
						<select name="worktype">
							<option>part-time weekend</option>
							<option>part-time weekday daytime</option>
							<option>part-time weekday evenings</option>
						</select>
						<Button bsStyle="default" bsSize="large" type="submit">submit</Button>
					</form>
				</div>
			)
	}
})

export default SearchView