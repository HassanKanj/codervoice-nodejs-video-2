const express = require('express');
const app = express();

const port = 3000;

app.listen(port, function() {
    console.log(`Listening to port ${port}`);
});

app.get('/', function(request, response) {
    console.log("someone visited the website");
    response.send("<h1>welcome to my super simple web page</h1>");
});





