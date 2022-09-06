app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    const userCount = Math.ceil(Math.random() * 100);
    res.send(`Hello GET. Users are: ${userCount}`);
 })
 