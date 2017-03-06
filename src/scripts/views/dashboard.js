import React from 'react'
import Header from './header'
import User from '../models/userModel'


class Dashboard extends React.Component {
	render(){
		return (
			<div>
				<Header />
				<MainDash />
			</div>
			)
	}
}

class MainDash extends React.Component {
	render(){
		// const loginName
		// User.getCurrentUser() ? loginName = User.getCurrentUser().name : 'Login!'
		return (
			<div>
				<p>Welcome back, </p>
				<p>Test</p>
			</div>
			)
	}
}


export default Dashboard