import React from 'react'
import ACTIONS from '../actions'
import Header from './header'


class Credentials extends React.Component {
	render(){
		return (
			<div className="credentials">
				<Header />
				<Login />
				<Register />
			</div>
			)
	}
}

class Login extends React.Component {
	
	login(event){
		event.preventDefault()
		ACTIONS.loginUser(event.currentTarget.email.value, event.currentTarget.password.value)
	}

	render(){
		return (
			<div className="login">
				<form onSubmit={this.login} >
					<input type="email" name="email" placeholder="email" />
					<input type="password" name="password" placeholder="password" />
					<button type="submit">Login</button>
				</form>
			</div>
			)
	}
}

class Register extends React.Component {
		
	register(event){
		event.preventDefault()
		ACTIONS.registerUser({
			email: event.currentTarget.username.value
			, password: event.currentTarget.password.value
		})
	}	

	render(){
		return (
			<div className="register">
				<form onSubmit={this.register}>
					<input type="email" name="username" placeholder="email" />
					<input type="password" name="password" placeholder="password" />
					<button type="submit">Register</button>
				</form>
			</div>
			)
	}
}

export default Credentials