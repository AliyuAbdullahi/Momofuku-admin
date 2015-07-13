<<<<<<< HEAD
angular.module('Momofuku', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('cyan')
    .accentPalette('orange');
=======
var app = angular.module('Momofuku', ['ngMaterial', 'firebase']);
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('orange')
    .accentPalette('cyan');
>>>>>>> 7fdccf7be69af23afbbf373cabd6df65166eb6bc
});