var express = require('express');
var router = express.Router();
var twitter = require('../services/twitter');

var CacheService = require('../lib/node-cache');

const ttl = 60 * 60 * 0.1; // cache for 1 Hour
const cache = new CacheService(ttl); // Create a new cache service instance

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/topTrends', function (req, res, next) {
  return cache.get(`/topTrends/${req.query.id}`, async () => {
    return twitter.topTrends(req);
  }).then(response => {
    res.status(200);
    res.send(response.data);
  }).catch(err => {
    res.status(400);
    console.log("Err", err);
  })
});

module.exports = router;
