import Backbone from 'backbone'

var JobModel = Backbone.Model.extend({
	urlRoot: "/api/jobs"
	, idAttribute: "_id"
})

var JobCollection = Backbone.Collection.extend({
	url: "/api/jobs"
	, model: JobModel
})

export { JobModel, JobCollection }