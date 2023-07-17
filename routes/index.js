const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');


console.log('router loaded');


router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));
// APi Routes
router.use('/api',require('./api'));

// for likes
router.use('/likes',require('./likes'));
// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

// *For Adding Friends
router.use('/friendship', require('./friendship'));


module.exports = router;