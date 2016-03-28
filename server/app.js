var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/petapplication');
mongoose.model("Pet", new Schema ({"name": String, "animal": String, "age": Number, "url": String}));
var Pet = mongoose.model("Pet");

app.get("/animal", function(req,res){
  Pet.find({}, function(err,data){
    if(err){
      console.log("Something went wrong: ", err);
    }

    res.send(data);

  });

});


app.post("/animal", function(req,res){
  newPet = new Pet ({"name": req.body.name, "animal": req.body.animal, "age": req.body.age, "url": req.body.url});
  newPet.save(function(err,data){
    if(err){
      console.log("Something went wrong adding: ", err);
    }

  res.send(data);
  });

});

app.delete("/animal/:id", function(req,res){
  console.log(req.params.id);
  var loosePet = req.params.id;
  Pet.find({"_id" : loosePet}).remove(function(err,data){
    if(err){
      console.log("Something went wrong: ", err);
    }
    res.send(data);
  });

});

app.get("/*", function(req,res){
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname,"/public/", file));
});


app.set("port",(process.env.PORT || 3000));

app.listen(app.get("port"),function(){
  console.log("Listening on port: ", app.get("port"));
});

module.exports = app;
