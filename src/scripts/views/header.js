import React from 'react'
import User from '../models/userModel'
import ACTIONS from '../actions'
import { Button, Row, Col, Grid } from 'react-bootstrap'


class Header extends React.Component {

	logout(){
		ACTIONS.logoutUser()
	}

	render(){
		var showPost, showLoginRegister, showName, showDash 
		if(!User.getCurrentUser().id){ 
			showPost = {
				display: 'none'
			}
			, showLoginRegister = {
					display: 'block'
			}
			, showName = {
					display: 'none'
			}
			, showDash = {
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
			, showDash = {
					display: 'inline-block'
			}
		}
		const name = `welcome back, ${User.getCurrentUser().attributes.email}`
		return (
			<nav className="top-header">
				<a href="#home"><span id="header-title">hustlegigs</span></a>
				<h4 style={showPost}><a href="#postjob">post job</a></h4>
				<div id="login-register" style={showLoginRegister}>
					<Button><a href="#login">login</a></Button>
					<Button><a href="#register">register</a></Button>
				</div>
				<h4 style={showDash}><a href="#dashboard">dashboard</a></h4>
				<Button id="logout-button" style={showName} onClick={this.logout}>logout</Button>
				<h4 style={showName}>{name}</h4>
			</nav>
			)
	}
}

export default Header