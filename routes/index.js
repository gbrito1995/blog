var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {

    axios.get(`${process.env.API_URL}post/all`, {
    headers: {
      'token': req.cookies.blog,
    }
  })
  .then(function(response){            
    res.render('index', {title: 'blog', posts: response.data})
  })
  .catch(function(error){        
    res.render('error', {message: error, error: error});
  });

});

/* GET post page. */
router.get('/post', function(req, res, next) {
  
  console.log(req.query)

  axios.get(`${process.env.API_URL}post/?title=${req.query.title}`)
  .then(function(response){

    console.table(response.data)

    res.render('post', {title: response.data.TITLE, post: response.data});
  })
  .catch(function(error){        
    res.render('error', {message: error, error: error});
  });

});

/* GET users listing. */
router.get('/about-me', function(req, res, next) {

  axios.get(`${process.env.API_URL}about-me`)
  .then(function(response){

    console.log(response.data)

    res.render('about-me', {title: 'about-me', data: response.data})
  })
  .catch(function(error){        
    res.render('error', {message: error, error: error});
  });  
});

module.exports = router;
