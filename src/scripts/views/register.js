import React from 'react'
import ACTIONS from '../actions'
import Header from './header'


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
				<form onSubmit={this.register}>
					<input type="text" name="firstname" placeholder="first name" />
					<input type="text" name="lastname" placeholder="last name" />
					<input type="email" name="username" placeholder="email" />
					<input type="password" name="password" placeholder="password" />
					<button type="submit">Register</button>
				</form>
			</div>
			)
	}
}

export default Register