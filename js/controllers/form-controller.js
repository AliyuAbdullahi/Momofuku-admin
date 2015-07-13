app.controller("FormController", ['$scope','$firebaseArray', '$firebaseObject', function($scope, $firebaseObject,$firebaseArray,$mdDialog) {
  var ref = new Firebase("https://momofuku.firebaseio.com");
  $scope.newMessageText = "Yes its true";
  $scope.showform = false;
  $scope.messages = $firebaseArray(ref);
   $scope.addMessage = function() {
    ref.child('cities').push({
      text: $scope.newMessageText
    });
  };
  $scope.cities =['New York','Toronto','Sidney'];

}]);