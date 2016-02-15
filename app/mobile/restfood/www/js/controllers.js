angular.module('starter.controllers', [])

.controller('PrincipalCtrl', function($scope, $http) {
	$http.get('http://localhost:8080/restfood-service/').then(function(resp) {
	    $scope.principal = resp.data;
	  }, function(err) {
		  
	  })
	
	
})

.controller('BebidasCtrl', function($scope, Bebidas) {
  $scope.bebidas = Bebidas.all();
  $scope.remove = function(produto) {
	  Bebidas.remove(produto);
  };
})

.controller('EntradaCtrl', function($scope, Entrada) {
  $scope.entrada = Entrada.all();
  $scope.remove = function(produto) {
	  Entrada.remove(produto);
  };
})

.controller('SobremesaCtrl', function($scope, Sobremesa) {
  $scope.sobremesa = Sobremesa.all();
  $scope.remove = function(produto) {
	  Sobremesa.remove(produto);
  };
})
