var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");


var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set("port", (process.env.PORT || 5000));

app.post("/join-us", function(request, response) {
  var data = request.body;
  var errors = {
    email: !data.email,
    name: !data.name,
    question: !data.question
  };
  if(errors.name || errors.email || errors.question) {
    response.status(400).send(errors);
  } else {
    response.status(200).send("The question has been sent successfully.");
  }
});

app.listen(app.get("port"), function() {
  console.log("app is running on port", app.get("port"));
});


