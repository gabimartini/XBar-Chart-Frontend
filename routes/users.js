var express = require('express');
var assert = require('assert')
var restify = require('restify-clients')
var router = express.Router();


var client = restify.createJsonClient({
  url: 'http://localhost:4000'
})

/* GET users listing. */
router.get('/', function(req, res, next) {
 
  client.get('/data', function(err, request, response, obj){
    assert.ifError(err);

    res.json(obj)
  })
});



router.get('/:id', function(req, res, next) {
 
  client.get(`/data/${req.params.id}`, function(err, request, response, obj){
    assert.ifError(err);

    res.json(obj)
  })
});

router.put('/:id', function(req, res, next) {
 
  client.put(`/data/${req.params.id}`, req.body, function(err, request, response, obj){
    assert.ifError(err);

    res.json(obj)
  })
});

router.delete('/:id', function(req, res, next) {
 
  client.del(`/data/${req.params.id}`, function(err, request, response, obj){
    assert.ifError(err);

    res.json(obj)
  })
});

router.post('/', function(req, res, next) {
  
  client.post(`/data`, req.body, function(err, request, response, obj) {
    assert.ifError(err);
  
    res.json(obj);
  });

});



module.exports = router;
