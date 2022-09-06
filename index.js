var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log("Create user account");
    res.send('Hello GET');
})

app.get('/', function (req, res) {
    console.log("Read user account");
    res.send('Hello GET');
})

app.get('/', function (req, res) {
    console.log("Delete user account");
    res.send('Hello GET');
})

app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    const userCount = Math.ceil(Math.random() * 100);
    res.send(`Hello GET. Users are: ${userCount}`);
})
