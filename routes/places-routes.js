const express = require('express');
const places = require('../controller/places-controller');
const router = express.Router();

router.get('/:pId', places.getPlacesById);

router.get('/user/:uid', places.getPlacesByUserId);

module.exports = router;