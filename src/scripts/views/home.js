import React from 'react'
import Backbone from 'backbone'
import Header from './header'
import STORE from '../store'




class Home extends React.Component {
	
	constructor(){
		super()
		this.state = STORE.getData()
		console.log('constructor', this.state)
	}

	componentWillMount(){
		this.setState(STORE.getData())
		console.log('componentWillMount', this.state)
	}

	render(){
		return (
			<div className="home">
				<Header />
				<HomeSearch />
				<HomeSearchResults jobColl={this.state.jobCollection} />
			</div>
			)
	}
}

class HomeSearch extends React.Component {
	
	submit(event){
		console.log(event)
	}

	render(){
		return (
			<div className="homeSearch">
				<form onSubmit={this.submit}>
					<input type="text" placeholder="job title" name="job-title" />
					<select>
						<option value="defaultvalue">Select your desired time</option>
						<option value="part-weekend">part-time weekend</option>
						<option value="part-weekday-day">part-time weekday daytime</option>
						<option value="part-weekday-evening">part-time weekday evenings</option>
					</select>
					<button type="submit">submit</button>
				</form>
			</div>
			)
	}
}

class HomeSearchResults extends React.Component {
	
	// mapresults(model){
	// 	return <Job model={model} />
	// }

	render() {
		console.log('HomeSearchResults', this.props.jobColl)
		return (
			<div className="jobResults">
				<div>
					{this.props.jobColl.map((model)=>
						<Job model={model} />
						)}
				</div>
			</div>
			)
	}
}

class Job extends React.Component {
	render(){
		console.log(this.props.model)
		return (
			<div>test</div>
			)
	}
}

export default Home