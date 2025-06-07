var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {

    axios.get(`${process.env.API_URL}post/all`, {
    headers: {
      'token': req.cookies.blog
    }
  })
  .then(function(response){            
    res.render('index', {title: 'blog', posts: response.data})
  })
  .catch(function(error){

    if(error.status == 401) res.redirect('/login');
    
    res.render('error', {message: error, error: error});
  });

});

module.exports = router;
