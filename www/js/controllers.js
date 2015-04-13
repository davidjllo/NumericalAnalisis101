angular.module('starter.controllers', [])

.controller('AboutCtrl', function($scope) {})

.controller('MethodsCtrl', function($scope, Chats) {
	$scope.methods = [{name: 'Bisection', cov: 'E^2', ident: 'bisection'},
	{name: 'False Rule', cov: 'E^2+1', ident: 'falseRule'},
	{name: 'Fixed Point', cov: 'E^2+2', ident: 'fixedPnt'},
	{name: 'Secant', cov: 'E^2+3', ident: 'secant'},
	{name: 'Multiple Roots', cov: 'E^2+4', ident: 'multRoots'}];


})


.controller('BisectionCtrl', function($scope) {
	$scope.rptaTtl = 0;
	$scope.setFunct = function(numb){
		$scope.x = 2;
		$scope.rptaTtl = $scope.$eval(numb);
		bisect("f(x)=e^(3*x-12)+x*cos(3*x)-x^2+4",2,3,0.0005,15);
	}

	$scope.bisect = function(fx,xi,xs,tolerancia,niter){
	var parser = math.parser();
	parser.eval(fx);
	fxi = parser.eval("f("+xi+")");
	fxs = parser.eval("f("+xs+")");
	if(fxi == 0) console.log(xi + " es Raiz");
	else if(fxs == 0) console.log(xs + " es Raiz");
	else if(fxs * fxi < 0){
		xmi = (xi + xs)/2;
		fxm = parser.eval("f(" + xmi + ")");	
		contador = 1;
		error = tolerancia + 1;
		while(error > tolerancia && fxm != 0 && contador < niter){
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
			error = math.abs(xmi - xaux);
			contador++;
		}
		if(fxm == 0){
			console.log(xmi + " es Raiz");
		}
		else if(error<tolerancia){
			console.log(xmi + " es aproximacion de una raiz con una tolerancia =" + tolerancia);
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
