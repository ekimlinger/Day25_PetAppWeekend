 //********************** ANGULAR STUFF **************************//
var myApp = angular.module("myApp", ["ngRoute"]);

myApp.factory("MainService", ["$http", function($http){
  var dailyPet;
  var exportObject = {};

  exportObject.getPets = function(){
    // if(exportObject.animalList.data === undefined){
      $http.get("/animal").then(function(response){
        exportObject.animalList.data = response.data;

        //sets pet of the day
        var lastPet = exportObject.animalList.data.length - 1;
        exportObject.dailyPet.data = exportObject.animalList.data[randomNumber(0,lastPet)];
      });
    //  }
  };

  exportObject.addPet = function(data){
      $http.post("/animal", data).then(function(response){
        exportObject.getPets();
      });
  };

  exportObject.removePet = function(data){
    console.log(data);
      $http.delete("/animal/"+ data._id).then(function(response){

      });
      exportObject.getPets();
  };
  exportObject.getPets();
  return exportObject;
}]);
