const express = require('express');

const router = express.Router();

const DUMMY_DATA = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'Famous Skyscrappers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
        address: 'New York',
        location: {
            lat: 0.0,
            lng: 1.0
        },
        creatorId: 'u1'
    },
    {
        id: 'p2',
        title: ' State Building',
        description: 'Famous Skyscrappers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
        address: 'New York',
        location: {
            lat: 0.0,
            lng: 1.0
        },
        creatorId: 'u2'
    }
]

router.get('/:pId', (req, res, next) => {
    const placeId = req.params.pId ;
    const place = DUMMY_DATA.find( p => {
        return p.id === placeId;
    })

    if(!place){
        return res.status(404).json({message: 'Could not find a place'});
    }
    res.json({place});
});

router.get('/user/:uid', (req, res, next) => {
    const userId = req.params.uid ;
    const place = DUMMY_DATA.find( p => {
        return p.creatorId === userId;
    })
    res.json({place});
});

module.exports = router;