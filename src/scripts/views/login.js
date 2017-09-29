import React from 'react'
import ACTIONS from '../actions'
import Header from './header'
import { Form, Col, FormControl, FormGroup } from 'react-bootstrap'


class Login extends React.Component {
	render(){
		return (
			<div className="login">
				<Header />
				<LoginCreds />
			</div>
			)
	}
}

class LoginCreds extends React.Component {
	
	login(event){
		event.preventDefault()
		ACTIONS.loginUser(event.currentTarget.email.value, event.currentTarget.password.value)
	}

	render(){
		return (
			<div className="login">
				<div className="login-form">
				<h3>Login</h3>
					<Form horizontal onSubmit={this.login} >
					 <FormGroup controlId="formHorizontalEmail">
							<Col md={2}>Email</Col>
							<Col md={8}>
								<FormControl type="email" name="email" placeholder="Email"/>
							</Col>
						</FormGroup>

						<FormGroup controlId="formHorizontalPassword">
							<Col md={2}>Password</Col>
							<Col md={8}>
								<FormControl type="password" name="password" placeholder="Password"/>
							</Col>
						</FormGroup>

						<FormGroup>
							<Col md={6}>
								<button type="submit">Login</button>
							</Col>
						</FormGroup>

					</Form>
				</div>
			</div>
			)
	}
}


export default Login