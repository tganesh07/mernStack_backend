const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Get Request received in places-routes');
    res.json({message: 'places-router works!'});
});

module.exports = router;