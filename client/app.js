myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
    when("/home", {
      templateUrl: "/views/routes/home.html",
      controller: "HomeController"
    }).
    when("/view", {
      templateUrl: "/views/routes/view.html",
      controller: "ViewController"
    }).
    when("/add", {
      templateUrl: "/views/routes/add.html",
      controller: "AddController"
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);

myApp.controller("HomeController", ["$scope",  "MainService", function($scope, MainService){
  MainService.getPets();
  $scope.dailyPet = MainService.dailyPet;

}]);

myApp.controller("ViewController", ["$scope",  "MainService", function($scope, MainService){
  MainService.getPets();
  $scope.allPets = MainService.animalList;
  $scope.removePet = function(pet){
    MainService.removePet(pet);
    MainService.getPets();
  };

}]);

myApp.controller("AddController", ["$scope",  "MainService", function($scope, MainService){

  $scope.submit = function(data){
    MainService.addPet($scope.newPet);
    $scope.newPet = {};
    MainService.getPets();
  };

}]);
