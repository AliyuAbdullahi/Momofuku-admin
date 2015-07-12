
app.controller("FormController", ['$scope','LxDialogService','LxNotificationService','$mdDialog','$firebaseArray', '$firebaseObject', 
  function($scope,LxDialogService, $firebaseObject,$firebaseArray,$mdDialog,LxNotificationService) {
  var ref = new Firebase("https://momofuku.firebaseio.com");
   $scope.cities =['New York','Toronto','Sidney'];
  $scope.showMealForm = false;
  $scope.venues = [];

  $scope.showForm = false;
   $scope.addMessage = function() {
    ref.child('cities').push({
      text: $scope.newMessageText
    });
  };
  $scope.hideMealForm = function(index){
    $scope.showMealForm = false;
  };
  $scope.showMeal = function($index){
    $scope.showMealForm = true;
  };
  $scope.showDialog = function(dialogId){
    LxDialogService.open(dialogId);
    $scope.showStateName = true;
  };
  $scope.save = function(cityName){
    console.log(cityName);
    $scope.cities.push(cityName);
    console.log($scope.cities);
    
  };
 
   $scope.showCityDetailsDialog = function(dialogId){
    LxDialogService.open(dialogId);
  };
  $scope.addToVenue = function(venue){
    $scope.venues.push(venue);
    venue = '';
  };







}]);



