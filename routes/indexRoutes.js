const express = require('express');
const indexController = require('../controllers/indexController');

const router = express.Router();

// Get Home page
router.get('/', indexController.getMessageBoard);

// Get The form to add a new message
router.get('/new', indexController.getNewMessage);

// Post The form to add a new message
router.post('/new', indexController.createNewMessage);

// Get Message details page
router.get('/message/:id', indexController.getMessageDetails);

module.exports = router;
