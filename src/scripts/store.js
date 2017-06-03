import Backbone from 'backbone'
import _ from 'underscore'
import { clone } from 'ramda'
import { JobCollection, JobModel } from './models/jobsModel'

const STORE = _.extend(Backbone.Events, {
	
	data: {
		jobCollection: new JobCollection()
		, jobModel: new JobModel()
	}

	, getData: function(){
			return _.clone(this.data)
	}

	, emitChange: function(){
			this.trigger('updateContent')
	}

	//when the model or collection changes via a sync, update, or reset, fire off emitChange
	//which throws a publish event updateContent. Then the other pages listen "on" for the
	//updateContent trigger 
	, initialize: function(){
		this.data.jobCollection.on('sync update reset', this.emitChange.bind(this))
		this.data.jobModel.on('sync update reset', this.emitChange.bind(this))
	}


})

STORE.initialize()

export default STORE