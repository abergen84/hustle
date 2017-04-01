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

	, initialize: function(){
		this.data.jobCollection.on('sync update reset', this.emitChange.bind(this))
		this.data.jobModel.on('sync update reset', this.emitChange.bind(this))
	}


})

STORE.initialize()

export default STORE