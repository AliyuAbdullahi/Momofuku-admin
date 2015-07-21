
app.controller("FormController", ['$scope','Cities','LxDialogService','LxNotificationService','$mdDialog','$firebaseArray', '$firebaseObject', 
  function($scope,Cities,LxDialogService,LxNotificationService,$mdDialog,$firebaseArray,$firebaseObject) {
   $scope.cities = Cities.all();
   window.cities = $scope.cities;


    $scope.showProjectDialog = function(ev) {
      $mdDialog.show({
        controller: ['$scope', '$mdDialog', function($scope, $mdDialog) {
          $scope.restaurants = Cities.all();
          console.log($scope.restaurants);
          var self = $scope;
          self.city = null;
          $scope.submitted = false;
          $scope.save = function(isValid){

            if(isValid){
               Cities.create($scope.city, function(err) {
                if(err) {
                  console.log('An error occurred');
                }
                else {
                  console.log($scope.city.name + ' city created!');
                }
                $mdDialog.hide();
              });
            }
          };
          $scope.close = function() {
            $mdDialog.hide();
          };
        }],
        templateUrl: 'views/dialog.html',
        targetEvent: ev
      });
    };

   $scope.showCityDialog = function(ev,cityId,city) {
    $mdDialog.show({
      controller: ['$scope', '$mdDialog', function($scope, $mdDialog) {
        $scope.showMeal = false;
        $scope.showDays = false;
        $scope.showActoin = true;
        console.log(city);
        var self = $scope;
        $scope.tab = 1;

        $scope.addMeal = function(restaurantId){
          $scope.currentId = restaurantId;
          $scope.showActoin = false;
          $scope.showDays = true;
        };
        $scope.addToMondayRef = function(item){
          var data ={
            name: item
          };
          console.log(cityId.toString());
          self.city.restaurant.Monday.name = item;
          Cities.ref.child(cityId).child('restaurants').child($scope.currentId).child('daily_meal').child('Monday').push(data);

        };
        $scope.addToTuesdayRef = function(item){
          var data ={
            name: item
          };
          console.log(cityId.toString());
          self.city.restaurant.name = item;
          Cities.ref.child(cityId).child('restaurants').child($scope.currentId).child('daily_meal').child('Tuesday').push(data);


        };
        $scope.addToWednesdayRef = function(item) {
          var data ={
            name: item
          };
          console.log(cityId.toString());
          self.city.restaurant.name = item;
          Cities.ref.child(cityId).child('restaurants').child($scope.currentId).child('daily_meal').child('Wednesday').push(data);


        };
        $scope.addToThursdayRef = function(item) {
          var data ={
            name: item
          };
          console.log(cityId.toString());
          self.city.restaurant.name = item;
          Cities.ref.child(cityId).child('restaurants').child($scope.currentId).child('daily_meal').child('Thursday').push(data);


        };
        $scope.addToFridayRef = function(item) {
          var data ={
            name: item
          };
          console.log(cityId.toString());
          self.city.restaurant.name = item;
          Cities.ref.child(cityId).child('restaurants').child($scope.currentId).child('daily_meal').child('Friday').push(data);


        };
        $scope.addToSaturdayRef = function(item) {
          var data ={
            name: item
          };
          console.log(cityId.toString());
          self.city.restaurant.name = item;
          Cities.ref.child(cityId).child('restaurants').child($scope.currentId).child('daily_meal').child('Saturday').push(data);


        };
        $scope.addToSundayRef = function(item) {
          var data ={
            name: item
          };
          console.log(cityId.toString());
          self.city.restaurant.name = item;
          Cities.ref.child(cityId).child('restaurants').child($scope.currentId).child('daily_meal').child('Sunday').push(data);


        };
        $scope.addFoodItem = function() {
          $scope.showActoin = true;
          $scope.showDays = false;
        };
        $scope.selectTab = function(setTab){
          self.tab = setTab;
        };
        $scope.isSelected = function(checkTab){
          return self.tab === checkTab;
        };
        $scope.delete = function(restaurantId){
          Cities.delete(cityId,restaurantId);

        };

        $scope.restaurant = Cities.find(cityId,function(){

        });

        self.city = city;

        $scope.submitted = false;



        $scope.save = function(isValid){
          var data ={
            name: isValid
          };
          console.log(cityId.toString());
          self.city.restaurant.name = isValid;
          Cities.ref.child(cityId).child('restaurants').push(data);
        };
        $scope.close = function() {
          $mdDialog.hide();
        };
      }],
      templateUrl: 'views/city-dialog.html',
      targetEvent: ev
    });
  };
}]);



