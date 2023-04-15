const express = require ("express");
const app = express();
app.get("/", function(request, response) {
    return response.send("Hello World!");
});
const user = [
{
    name: 'Ann',
    age: 27,
    sex: 'female'
},
]
app.get("/instructor/:user", function(request, response) {
    return response.send(request.params.user);
    res.json( {name: user});
});

const bodyParser = require ("body-parser");
app.use(bodyParser.json())

app.listen(3000, function() {
    console.log("The server is running on port 3000")
});