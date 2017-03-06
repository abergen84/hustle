import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import Dashboard from './views/dashboard'
import Home from './views/home'
import PostJobView from './views/postJobs'
import Credentials from './views/login'


const app = function() {

	const Router = Backbone.Router.extend({
		routes: {
			'home': 'home'
			, 'jobs': 'viewJobs'
			, 'jobs/:id': 'viewJob'
			, 'postjob': 'postJob'
			, 'login': 'login'
			, '*redirect': 'redirect'
		}

		, redirect(){
				location.hash = 'home'
		}

		, home(){
				ReactDOM.render(<Home />, document.querySelector('.container'))
		}

		, viewJobs(){
				ReactDOM.render(<JobsView />, document.querySelector('.container'))
		}

		, viewJob(){
				ReactDOM.render(<JobView />, document.querySelector('.container'))
		}

		, postJob(){
				ReactDOM.render(<PostJobView />, document.querySelector('.container'))
		}

		, login(){
			ReactDOM.render(<Credentials />, document.querySelector('.container'))
		}

		, initialize(){
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