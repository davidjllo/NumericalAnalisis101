angular.module('starter.controllers', [])

.controller('AboutCtrl', function($scope) {})

.controller('MethodsCtrl', function($scope, Chats) {
	$scope.methods = [{name: 'Bisection', cov: 'E^2', ident: 'bisection'},
	{name: 'False Rule', cov: 'E^2+1', ident: 'falseRule'},
	{name: 'Fixed Point', cov: 'E^2+2', ident: 'fixedPnt'},
	{name: 'Secant', cov: 'E^2+3', ident: 'secant'},
	{name: 'Multiple Roots', cov: 'E^2+4', ident: 'multRoots'}];


})

.controller('BisectionCtrl', function($scope, $http) {
	$scope.rptaTtl = 0;
	$scope.fun = "f(x)=e^(3*x-12)+x*cos(3*x)-x^2+4";
	$scope.xi = 2;
	$scope.xs = 3;
	$scope.tol = 0.0005;
	$scope.niter = 15;
	$scope.posts;
	$http.get('api.mathjs.org/v1/?expr=2*(7-3)').
	success(function(data, status, headers, config) {
		$scope.posts = data;
	}).
	error(function(data, status, headers, config) {
      // log error
  });	
	$scope.setFunct = function(numb){
		$scope.x = 2;
		$scope.rptaTtl = $scope.$eval(numb);
	}
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};

});
