import React from 'react'
import ACTIONS from '../actions'
import Header from './header'
import { Form, Col, FormControl, FormGroup } from 'react-bootstrap'


class Register extends React.Component {
	render(){
		return (
			<div className="register">
				<Header />
				<RegisterCreds />
			</div>
			)
	}
}

class RegisterCreds extends React.Component {
		
	register(event){
		event.preventDefault()
		ACTIONS.registerUser({
			firstname: event.currentTarget.firstname.value
			, lastname: event.currentTarget.lastname.value
			, email: event.currentTarget.username.value
			, password: event.currentTarget.password.value
		})
	}	

	render(){
		return (
			<div className="register">
				<div className="register-form">
				<h3>Register</h3>
					<Form horizontal onSubmit={this.register}>
					<FormGroup>
						<Col md={2}>First Name</Col>
						<Col md={8}>
							<FormControl type="text" name="firstname" placeholder="First  Name" />
						</Col>
					</FormGroup>
					<FormGroup>
						<Col md={2}>Last Name</Col>
						<Col md={8}>
							<FormControl type="text" name="lastname" placeholder="Last  Name" />
						</Col>
					</FormGroup>
					<FormGroup>
						<Col md={2}>Email</Col>
						<Col md={8}>
							<FormControl type="email" name="username" placeholder="Email" />
						</Col>
					</FormGroup>
					<FormGroup>
						<Col md={2}>Password</Col>
						<Col md={8}>
							<FormControl type="password" name="password" placeholder="Password" />
						</Col>
					</FormGroup>
					<FormGroup>
						<Col md={6}>
							<button type="submit">Register</button>
						</Col>
					</FormGroup>
					</Form>
				</div>
			</div>
			)
	}
}

export default Register