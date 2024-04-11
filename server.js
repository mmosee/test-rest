const express = require("express");
const app = express();

app.get("/", function (req, res) {
    console.log("TestGet")
    return res.send("hello world");
})

app.post('/test', function(req, res) {
    console.log('debug: /test');
    return res.status(200).json({
        "test":"test"
    });
});

app.post('/save', function(req, res) {
    console.log('debug: /save');
    return res.status(200).json({
        "test":"test"
    });
});

app.post('/validate', function(req, res) {
    console.log('debug: /validate');
    return res.status(200).json({});
});

app.listen(5500, function () {
    console.log("server listening on port 5500")
})