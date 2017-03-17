import Backbone from 'backbone'
import _ from 'underscore'
import { clone } from 'ramda'
import { JobCollection } from './models/jobsModel'

const STORE = _.extend(Backbone.Events, {
	
	data: {
		jobCollection: new JobCollection()
	}

	, getData: function(){
			return _.clone(this.data)
	}

	, emitChange: function(){
		this.trigger('updateContent')
	}

	, initialize: function(){
		this.data.jobCollection.on('sync update reset', this.emitChange.bind(this))
	}


})

STORE.initialize()

export default STORE