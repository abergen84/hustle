import React from 'react'
import ACTIONS from '../actions'
import Header from './header'


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
				<form onSubmit={this.login} >
					<input type="email" name="email" placeholder="email" />
					<input type="password" name="password" placeholder="password" />
					<button type="submit">Login</button>
				</form>
			</div>
			)
	}
}


export default Login