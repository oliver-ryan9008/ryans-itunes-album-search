const express = require('express');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const app = express();
const port = 3000;
const Http = new XMLHttpRequest();
const apiUrl = 'https://api.adviceslip.com/advice';

let data;

app.listen(port, () => console.log(`Ryan Oliver's Chuck Norris API server is listening on port ${port}`));


Http.open("GET", apiUrl);
Http.send();

Http.onreadystatechange = (e) => {
    var response = Http.responseText;
    data = response;
    console.log(response);
};

// create a GET route
app.get('/advice', (req, res) => {
    res.send({ data });
});