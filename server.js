const express = require("express");
const app = express();

app.get("/", function (req, res) {
    return res.send("hello world")
})

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

app.listen(3000, function () {
    console.log("server listening on port 3000")
})