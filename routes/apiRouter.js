let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let Job = require('../db/schema.js').Job

  
  apiRouter
    .get('/users', function(req, res){
      User.find(req.query , "-password", function(err, results){
        if(err) return res.json(err) 
        res.json(results)
      })
    })

  apiRouter
    .get('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password", function(err, record){
        if(err || !record ) return res.json(err) 
        res.json(record)
      })
    })
    .put('/users/:_id', function(req, res){

      User.findByIdAndUpdate(req.params._id, req.body, function(err, record){
          if (err) {
            res.status(500).send(err)
          }
          else if (!record) {
            res.status(400).send('no record found with that id')
          }
          else {
            res.json(Object.assign({},req.body,record))
          }
      })
    })
    .delete('/users/:_id', function(req, res){
      User.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })  
    })

    // Routes for a Model(resource) should have this structure

//ALL THE JOBS

  apiRouter
    .get('/jobs', function(request, response){
      Job.find(request.query, function(error, results){
        // error ? response.json(error) : response.json(results)
        if (error) {
          response.send(error)
          console.log(error)
        } else {
          response.json(results)
          console.log(results)
        }
      })
    })

//SAVE A JOB

  apiRouter
    .post('/job', function(request, response){
        let newJob = new Job(request.body)
        newJob.save(function(error){
          error ? response.json(error) : response.json(newJob)
        })
      })


//ONE JOB

  apiRouter
    .get('/job/:_id', function(request, response){
      Job.findById(request.params._id, function(error, record){
        if(error || !record) {
          console.log(error) 
          response.json(error)
        } else { 
          response.json(record)
        }
      })
    })
    .put('/job/:_id', function(request, response){
      Job.findByIdAndUpdate(request.params._id, request.body, function(error, records){
        error ? response.send(error) : response.json(records)
      })
    })
    .delete('/job/:_id', function(request, response){
      Job.remove({ _id: request.params._id}, function(error){
        error ? response.send(error) : response.json({
          msg: `record ${request.params._id} successfully deleted`
        })
      })
    })

module.exports = apiRouter