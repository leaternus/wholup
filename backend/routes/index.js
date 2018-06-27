var mongoose= require('mongoose');
var express = require('express');
var router = express.Router();
var options = { server: { socketOptions: {connectTimeoutMS: 5000 } }};
mongoose.connect('mongodb://.......:&&&&@ds261660.mlab.com:61660/*******',
    options,
    function(err) {
     console.log(err);
    }
);

var userSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    password: String,
    email: String,
    company: String
});

var UserModel = mongoose.model('users', userSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  var newUser = new UserModel ({
     lastName: req.query.lastname ,
     firstName: req.query.firstname,
     password: req.query.password,
     email: req.query.email,
     company: req.query.company
  });
  newUser.save(
    function (error, user) {
        res.json(user);
      }
  );

});

router.get('/signin', function(req, res, next) {
  UserModel.findOne(
      { email: req.query.email, password: req.query.password} ,

      function (err, user) {
         res.json(user);
      }
  )

});

router.get('/updateuser', function(req, res, next) {
  UserModel.update(
    { _id: req.query.id},
    {
      lastName: req.query.lastname ,
      firstName: req.query.firstname,
      email: req.query.email,
      company: req.query.company
    },
    function(error, raw) {
       res.json({result: true});
    }
  );

});


module.exports = router;
