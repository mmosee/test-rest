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

app.post('/testSave', function(req, res) {
    console.log('debug: /testSave');
    return res.status(200).json({});
});

app.post('/testPublish', function(req, res) {
    console.log('debug: /testPublish');
    return res.status(200).json({});
});

app.post('/testValidate', function(req, res) {
    console.log('debug: /testValidate');
    return res.status(200).json({});
});

app.post('/testStop', function(req, res) {
    console.log('debug: /testStop');
    return res.status(200).json({});
});

app.post('/testExecute', function(req, res) {
    console.log('debug: /testExecute');
    return res.status(200).json({});
});

app.listen(5500, function () {
    console.log("server listening on port 5500")
})