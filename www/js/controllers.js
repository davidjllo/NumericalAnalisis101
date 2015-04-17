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
	$scope.fun = "(3*x-12)+x*cos(3*x)-x*2+4";
	$scope.xi = 4;
	$scope.xs = 11;
	$scope.tol = 0.0005;
	$scope.niter = 15;
	$scope.posts;

	$scope.testFun = function(a){
		$scope.rptaTtle = math.sqrt(a);
	}
	/*$http.get("http://api.mathjs.org/v1/?expr=2*(7-3)").success(function(data, status, headers, config) {
		$scope.posts = data;
		console.log(data.posts);
	}).
	error(function(data, status, headers, config) {
      // log error
  })*/	
	$scope.setFunct = function(fx,xi,xs,tolerancia,niter){
		$scope.x = xi;
		$scope.fxi = $scope.$eval($scope.fun);
		$scope.x = xs;
		$scope.fxs = $scope.$eval($scope.fun);
		if($scope.fxi == 0) console.log(xi + " es Raiz");
		else if($scope.fxs == 0) console.log(xs + " es Raiz");
		else if($scope.fxs * $scope.fxi < 0){
			$scope.xmi = (xi + xs)/2;
			$scope.x = $scope.xmi;
			$scope.fxm = $scope.$eval($scope.fun);	
			$scope.contador = 1;
			$scope.err = tolerancia + 1;
			while($scope.err > tolerancia && $scope.fxm != 0 && $scope.contador < niter){
				if ($scope.fxi * $scope.fxm < 0){
					$scope.xs = $scope.xmi;
					$scope.fxs = $scope.fxm;
				}
				else{
					$scope.xi = $scope.xmi;
					$scope.fxi = $scope.fxm;
				}
				$scope.xaux = $scope.xmi;
				$scope.xmi = ($scope.xi + $scope.xs) / 2;
				$scope.x = $scope.xmi;
				$scope.fxm = $scope.$eval($scope.fun);
				$scope.err = Math.abs($scope.xmi - $scope.xaux);
				$scope.contador++;
			}
			if($scope.fxm == 0){
				console.log($scope.xmi + " es Raiz");
			}
			else if($scope.err < tolerancia){
				console.log($scope.xmi + " es aproximacion de una raiz con una tolerancia =" + tolerancia);
			}
			else{
				console.log("Fracaso en " + niter + " iteraciones");
			}
		}
		else{
			console.log("El intervalo es inadecuado");
		}
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
