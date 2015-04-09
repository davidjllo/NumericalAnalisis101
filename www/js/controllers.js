angular.module('starter.controllers', [])

.controller('AboutCtrl', function($scope) {})

.controller('MethodsCtrl', function($scope, Chats) {
  $scope.methods = [{name: 'Bisection', cov: 'E^2', ident: 'bisection'},
  					{name: 'False Rule', cov: 'E^2+1', ident: 'falseRule'},
  					{name: 'Fixed Point', cov: 'E^2+2', ident: 'FixedPnt'},
  					{name: 'Secant', cov: 'E^2+3', ident: 'secant'},
  					{name: 'Multiple Roots', cov: 'E^2+4', ident: 'multRoots'},];
})


.controller('BisectionCtrl', function($scope) {})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
  
});
