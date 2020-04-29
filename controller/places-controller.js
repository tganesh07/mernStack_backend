const HttpError = require('../models/http-error');

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

const getPlacesById = (req, res, next) => {
    const placeId = req.params.pId ;
    const place = DUMMY_DATA.find( p => {
        return p.id === placeId;
    })

    if(!place){
        throw new HttpError('Could not find a place for the provided id.', 404)
    }
    res.json({place});
};

const getPlacesByUserId = (req, res, next) => {
    const userId = req.params.uid ;
    const place = DUMMY_DATA.find( p => {
        return p.creatorId === userId;
    })

    if(!place){
        return next(
            new HttpError('Could not find a place for the provided user id.', 404)
        );        
    }
    res.json({place});
};

exports.getPlacesById = getPlacesById;
exports.getPlacesByUserId = getPlacesByUserId;
