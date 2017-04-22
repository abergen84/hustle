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
		const name = User.getCurrentUser().attributes.email
		return (
			<div>
				<p>Welcome back, {name}</p>
				<p>See the jobs you've posted or saved below</p>
			</div>
			)
	}
}


export default Dashboard