var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');

router.route('/users')
  .post(userController.postUsers)
  .get(userController.getUsers);

router.route('/users/update/:id')
	.put(userController.updateUsers)
	.delete(userController.deleteUsers) 
  .get(userController.idsearch);

router.route('/users/search/:reg')
  .get(userController.regexsearch);

router.route('/doc/post/:id')             //Route to post in Doctor schema 
  .post(userController.postDoc);

router.route('/phar/post/:id')            //Route to post in Pharmacist schema
  .post(userController.postDoc);







module.exports = router;