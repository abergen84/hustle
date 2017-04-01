import React from 'react'
import User from '../models/userModel'
import ACTIONS from '../actions'


class Header extends React.Component {

	logout(){
		ACTIONS.logoutUser()
	}

	render(){
		var show
		// console.log('user?', User.getCurrentUser())
		if(!User.getCurrentUser()){ 
			show = {
				display: 'none'
			}
		} else {
			show = {
				display: 'inline-block'
			}
		}
		return (
			<nav>
				<h1>Hustle</h1>
				<h4 style={show}><a href="#postjob">post job</a></h4>
				<h4><a href="#login">login</a></h4>
				<h4><a href="#register">register</a></h4>
				<h4><a href="#dashboard">dashboard</a></h4>
				<h4><a href="#" onClick={this.logout}>logout</a></h4>
			</nav>
			)
	}
}

export default Header