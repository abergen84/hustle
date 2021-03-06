import React from 'react'
import Backbone from 'Backbone'
import Header from './header'
import ACTIONS from '../actions'
import User from '../models/userModel'
import { Grid, Row, Col, Button } from 'react-bootstrap'


class PostJobView extends React.Component {
	render(){
		return (
			<div>
				<Header />
				<div className="post-job">
					<PostJob />
				</div>
			</div>
			)
	}
}

class PostJob extends React.Component {
	
	saveJob(event){
		event.preventDefault()
		ACTIONS.saveJob({
			company: event.currentTarget.company.value.toLowerCase()
			, email: event.currentTarget.email.value.toLowerCase()
			, title: event.currentTarget.title.value.toLowerCase()
			, description: event.currentTarget.description.value.toLowerCase()
			, city: event.currentTarget.city.value.toLowerCase()
			, state: event.currentTarget.state.value.toLowerCase()
			, hours: event.currentTarget.hours.value.toLowerCase()
			, worktype: event.currentTarget.worktype.value.toLowerCase()
			, expires: event.currentTarget.date.value
			, createdby: User.getCurrentUser().id
		})
	}

	render(){
		return (
			<div className="postJobPage">
				<div className="post-jobs-header">
					<h5>Post a job</h5>
				</div>
				<div className="post-jobs-body">
				<Grid fluid>
				<Row>
				<Col md={6} sm={8} xs={10} mdOffset={4} smOffset={2}>
					<div className="post-job-form">
						<form onSubmit={this.saveJob} >
							<input type="text" name="company" placeholder="company" />
							<input type="email" name="email" placeholder="enter email" />
							<input type="text" name="title" placeholder="enter job title" />
							<div id="post-job-location">
								<input type="text" name="city" placeholder="city" />
								<input type="text" name="state" placeholder="state" />
							</div>
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
							Expiration Date<input type="date" name="date" />
							<button type="submit">submit</button>
						</form>
					</div>
					</Col>
					</Row>
					</Grid>
				</div>
			</div>
			)
	}
}

export default PostJobView