import React from 'react'
import Backbone from 'Backbone'
import Header from './header'
import ACTIONS from '../actions'

class PostJobView extends React.Component {
	render(){
		return (
			<div className="postJob">
				<Header />
				<PostJob />
			</div>
			)
	}
}

class PostJob extends React.Component {
	
	saveJob(event){
		event.preventDefault()
		ACTIONS.saveJob({
			company: event.currentTarget.company.value
			, email: event.currentTarget.email.value
			, title: event.currentTarget.title.value
			, description: event.currentTarget.description.value
			, city: event.currentTarget.city.value
			, state: event.currentTarget.state.value
			, hours: event.currentTarget.hours.value
			, worktype: event.currentTarget.worktype.value
			
		})
	}

	render(){
		return (
			<div className="postJobForm">
				<form onSubmit={this.saveJob} >
					<input type="text" name="company" placeholder="company" />
					<input type="email" name="email" placeholder="enter email" />
					<input type="text" name="title" placeholder="enter job title" />
					<input type="text" name="city" placeholder="city" />
					<input type="text" name="state" placeholder="state" />
					<select name="worktype">
						<option>part-time weekend</option>
						<option>part-time weekday daytime</option>
						<option>part-time weekday evenings</option>
					</select>
					<select name="hours">
						<option>1 - 5 hours/week</option>
						<option>6 - 10 hours/week</option>
						<option>11 - 15 hours/week</option>
						<option>16 - 20 hours/week</option>
						<option>20+ hours/week</option>
					</select>
					<textarea type="text" name="description" placeholder="description"></textarea>
					<button type="submit">submit</button>
				</form>
			</div>
			)
	}
}

export default PostJobView