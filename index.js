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
    console.log("Update user account");
    res.send('Hello GET');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
