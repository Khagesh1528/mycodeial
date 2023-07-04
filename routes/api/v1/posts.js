const express = require('express');

const router = express.Router();
const passport = require('passport')

const postApi = require('../../../controllers/api/v1/post_api');

router.get('/',postApi.index);
router.delete('/:id',passport.authenticate('jwt',{session:false}),postApi.destroy);
// here jwt is a passport strategy and session flase bcoz not creating cookies


module.exports = router;