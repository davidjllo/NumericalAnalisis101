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
	$scope.posts;
	$scope.solution;
	$scope.bisection = function(fx,xi,xs,tolerancia,niter){
		var parser = math.parser();
		parser.eval(fx);
		fxi = parser.eval("f("+xi+")");
		fxs = parser.eval("f("+xs+")");
		if(fxi == 0) console.log(xi + " es Raiz");
		else if(fxs == 0) console.log(xs + " es Raiz");
		else if(fxs * fxi < 0){
			xmi = (xi + xs) / 2;
			fxm = parser.eval("f(" + xmi + ")");
			console.log("xmi : " + xmi + " " + xi + " " + xs);
			contador = 1;
			err = tolerancia + 1;
			while(err > tolerancia && fxm != 0 && contador < niter){
				if (fxi * fxm < 0){
					xs = xmi;
					fxs = fxm;
				}
				else{
					xi = xmi;
					fxi = fxm;
				}
				xaux = xmi;
				xmi = (xi + xs) / 2;
				fxm = parser.eval("f(" + xmi + ")");
				err = math.abs(xmi - xaux);
				contador++;
				
			}
			if(fxm == 0){
				$scope.solution = xmi + " is a root";
			}
			else if(err<tolerancia){
				$scope.solution = xmi + " is an approximation of a root with tolerance = " + tolerancia;
			}
			else{
				$scope.solution = "Failed in " + niter + " iterations";
			}
		}
		else{
		  $scope.solution = "The interval is inadequate";
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
