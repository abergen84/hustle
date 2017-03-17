import Backbone from 'backbone'

const JobModel = Backbone.Model.extend({
	urlRoot: "/api/jobs"
	, idAttribute: "_id"
})

const JobCollection = Backbone.Collection.extend({
	url: "/api/jobs"
	, model: JobModel
	// , search: function(terms){
	// 	filtered = this.filter(function(coll){
	// 		return coll.get('title') === terms
	// 	})
	// 	return new JobCollection(filtered)
	// } 
})

export { JobModel, JobCollection }