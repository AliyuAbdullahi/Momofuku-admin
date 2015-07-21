var app = angular.module('Momofuku', ['ngMaterial', 'firebase','lumx']);
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('orange');
});