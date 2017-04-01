import React from 'react'
import User from '../models/userModel'
import ACTIONS from '../actions'


class Header extends React.Component {

	logout(){
		ACTIONS.logoutUser()
	}

	render(){
		var showPost, showLoginRegister, showName 
		if(!User.getCurrentUser().id){ 
			showPost = {
				display: 'none'
			}
			, showLoginRegister = {
					display: 'inline-block'
			}
			, showName = {
					display: 'none'
			}
		} else {
			showPost = {
				display: 'inline-block'
			}
			, showLoginRegister = {
					display: 'none'
			}
			, showName = {
					display: 'inline-block'
			}
		}
		const name = `Welcome back, ${User.getCurrentUser().attributes.email}`
		return (
			<nav>
				<div className="links">
					<h4 style={showPost}><a href="#postjob">post job</a></h4>
					<h4 style={showLoginRegister}><a href="#login">login</a></h4>
					<h4 style={showLoginRegister}><a href="#register">register</a></h4>
					<h4><a href="#dashboard">dashboard</a></h4>
					<h4 style={showName}><a href="#" onClick={this.logout}>logout</a></h4>
					<h4 style={showName}>{name}</h4>
				</div>
				<h1>eltsuh</h1>
			</nav>
			)
	}
}

export default Header