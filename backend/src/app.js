const express= require('express');
require('dotenv').config();
const app = express();
const cors= require('cors');
const morgan = require('morgan');
const routes = require('../router/index.route');
const passport= require('passport');
require('../utils/passport')(passport);
const session= require('express-session');
// Middleware to parse JSON request bodies
app.use(cors());
app.use(morgan("dev"));
app.use(session(
    {
        secret: 'mern_secret_key',
        resave: false,
        saveUninitialized: false,
    }
));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1',  routes);

module.exports = app;