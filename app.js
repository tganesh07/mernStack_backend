const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');

const app = express();

app.use('/api/places',placesRoutes);

// Express Js will execute the  below custom function, when it senses an error by other middleware functions like app.use('/api/places',placesRoutes);
app.use( (error, req, res, next) => {
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message ||  'An unknown error occured!'});
});

app.listen(5000);