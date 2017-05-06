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


//Route to check the promise result
router.route('/promise/reply')
  .get(userController.promiseuse);


//Route to post in Doctor schema 
router.route('/doc/post/:id')             
  .post(userController.postDoc);


//Route to post in Pharmacist schema
router.route('/phar/post/:id')            
  .post(userController.postPhar);



module.exports = router;