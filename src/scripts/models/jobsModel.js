import Backbone from 'backbone'

const JobModel = Backbone.Model.extend({
	url: "/api/jobs/"
	, idAttribute: "_id"
})

const JobCollection = Backbone.Collection.extend({
	url: "/api/jobs/"
	, model: JobModel
})

export { JobModel, JobCollection }