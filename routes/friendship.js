const express = require('express');

const router = express.Router();

const friendshipController = require('../controllers/friendship_controller')


router.post('/send-request', friendshipController.sendFriendRequest);



module.exports = router;