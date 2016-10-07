'use strict'
// const env = process.env.NODE_ENV || 'development';
// const DEV = env === 'development';
// const dotenv = require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bobbyParser = require('body-parser');
const app = express();
const port = process.argv[2] || process.env.PORT || 3000;
const userController = require('./routes/users_controller');
app.set( 'superSecret', 'my super secret word' );



// app.use( morgan( DEV ? 'dev' : 'common') )
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bobbyParser.json() );
app.use(bobbyParser.urlencoded( {extended: false}));

//ROUTES!

app.use('/api/users', userController);

//END ROUTES!

app.listen( port, () => {
  console.log(`I've got ${port} problems, but a server ain't one`);
})
