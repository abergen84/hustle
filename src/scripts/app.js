import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import Dashboard from './views/dashboard'
import Home from './views/home'
import PostJobView from './views/postJobs'
import JobView from './views/viewJob'
import JobsView from './views/viewJobs'
import SearchView from './views/search'
import Login from './views/login'
import Register from './views/register'
import User from './models/userModel'


const app = function() {

	const Router = Backbone.Router.extend({
		routes: {
			'home': 'home'
			, 'jobs/:title/:worktype/:location': 'viewJobs'
			, 'job/:id': 'viewJob'
			, 'postjob': 'postJob'
			, 'dashboard': 'dashboard'
			, 'search': 'search'
			, 'login': 'login'
			, 'register': 'register'
			, '*redirect': 'redirect'
		}

		, redirect(){
				location.hash = 'home'
		}

		, home(){
				ReactDOM.render(<Home />, document.querySelector('.container-fluid'))
		}

		, viewJobs(title,worktype,location){
				ReactDOM.render(<JobsView title={title} worktype={worktype} location={location} />, document.querySelector('.container-fluid'))
		}

		, viewJob(id){
				ReactDOM.render(<JobView id={id} />, document.querySelector('.container-fluid'))
		}

		, postJob(){
				ReactDOM.render(<PostJobView />, document.querySelector('.container-fluid'))
		}

		, dashboard(){
				ReactDOM.render(<Dashboard />, document.querySelector('.container-fluid'))
		}

		, search(){
				ReactDOM.render(<SearchView />, document.querySelector('.container-fluid'))
		}

		, login(){
				ReactDOM.render(<Login />, document.querySelector('.container-fluid'))
		}

		, register(){
				ReactDOM.render(<Register />, document.querySelector('.container-fluid'))
		}

		, initialize(){
			// this.on('route', (handlerName)=> {
			// 	if(!User.getCurrentUser()){
			// 		location.hash = 'login'
			// 	}
			// })
			Backbone.history.start()
		}
	})

	new Router()



}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..