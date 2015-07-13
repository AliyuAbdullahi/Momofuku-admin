
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

        console.log(city);
        var self = $scope;

        
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
          $mdDialog.hide();
          // if(isValid){
          //    Cities.update(self.city,cityId, function(err) {
          //         if(err) {
          //           console.log('An error occurred');
          //         }
          //         else {

          //           console.log(isValid + ' city created!');
          //         }
          //         
          //       });
          // }
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



