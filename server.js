'use strict';
const {
    v1: uuidv1,
    v4: uuidv4,
} = require('uuid');
const express = require('express');
var session = require('express-session');


// Constants
const PORT = 8080;

// App
const app = express();

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'a3s2d132as1d32a1sd'
}));
const uid = process.env.CONTAINER_UUID || 'Unknown UID';
console.log(process.env.CONTAINER_UUID);
app.get('/', function (req, res) {
    if (req.session.uuid === undefined) {
        req.session.uuid = uuidv4();
    }
    res.send("<h1>" + uid + ": " + req.session.uuid + "</h1>");
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);