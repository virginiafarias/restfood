angular.module('starter.services', [])

.factory('Bebidas', function() {
	  // Might use a resource here that returns a JSON array

	  // Some fake testing data
	  var bebidas = [{
	    id: 0,
	    nome: 'Picanha especial',
	    descricao: 'Picanha, Batata St Patrick, Arroz, Farofa e Vinagrete',
	    imagem: 'img/ben.png'
	  }, {
	    id: 1,
	    nome: 'Churrasco misto',
	    descricao: '1 Bife, 1 Filé de Frango, 1 Lombo, 2 Linguiças, Arroz, Farofa, Batata Frita e Vinagrete',
	    imagem: 'img/max.png'
	  }, {
	    id: 2,
	    nome: 'Strogonnof de frango',
	    descricao: 'Arroz e Batata Palha',
	    imagem: 'img/adam.jpg'
	  }, {
	    id: 3,
	    nome: 'Lombo de porco',
	    descricao: 'Arroz, Farofa, Batata Frita e Vinagrete',
	    imagem: 'img/perry.png'
	  }, {
	    id: 4,
	    nome: 'Filé de peixe',
	    descricao: 'Arroz, Pirão, Batata Frita e Salada',
	    imagem: 'img/mike.png'
	  }];

	  return {
	    all: function() {
	      return bebidas;
	    },
	    remove: function(produto) {
	    	bebidas.splice(bebidas.indexOf(produto), 1);
	    },
	    get: function(produtoId) {
	      for (var i = 0; i < bebidas.length; i++) {
	        if (bebidas[i].id === parseInt(produtoId)) {
	          return bebidas[i];
	        }
	      }
	      return null;
	    }
	  };
	})

.factory('Entrada', function() {
	  // Might use a resource here that returns a JSON array
	
	  // Some fake testing data
	  var entrada = [{
	    id: 0,
	    nome: 'Picanha especial',
	    descricao: 'Picanha, Batata St Patrick, Arroz, Farofa e Vinagrete',
	    imagem: 'img/ben.png'
	  }, {
	    id: 1,
	    nome: 'Churrasco misto',
	    descricao: '1 Bife, 1 Filé de Frango, 1 Lombo, 2 Linguiças, Arroz, Farofa, Batata Frita e Vinagrete',
	    imagem: 'img/max.png'
	  }, {
	    id: 2,
	    nome: 'Strogonnof de frango',
	    descricao: 'Arroz e Batata Palha',
	    imagem: 'img/adam.jpg'
	  }, {
	    id: 3,
	    nome: 'Lombo de porco',
	    descricao: 'Arroz, Farofa, Batata Frita e Vinagrete',
	    imagem: 'img/perry.png'
	  }, {
	    id: 4,
	    nome: 'Filé de peixe',
	    descricao: 'Arroz, Pirão, Batata Frita e Salada',
	    imagem: 'img/mike.png'
	  }];
	
	  return {
	    all: function() {
	      return entrada;
	    },
	    remove: function(produto) {
	    	entrada.splice(entrada.indexOf(produto), 1);
	    },
	    get: function(produtoId) {
	      for (var i = 0; i < entrada.length; i++) {
	        if (entrada[i].id === parseInt(produtoId)) {
	          return entrada[i];
	        }
	      }
	      return null;
	    }
	  };
	})

.factory('Sobremesa', function() {
	  // Might use a resource here that returns a JSON array

	  // Some fake testing data
	  var sobremesa = [{
	    id: 0,
	    nome: 'Picanha especial',
	    descricao: 'Picanha, Batata St Patrick, Arroz, Farofa e Vinagrete',
	    imagem: 'img/ben.png'
	  }, {
	    id: 1,
	    nome: 'Churrasco misto',
	    descricao: '1 Bife, 1 Filé de Frango, 1 Lombo, 2 Linguiças, Arroz, Farofa, Batata Frita e Vinagrete',
	    imagem: 'img/max.png'
	  }, {
	    id: 2,
	    nome: 'Strogonnof de frango',
	    descricao: 'Arroz e Batata Palha',
	    imagem: 'img/adam.jpg'
	  }, {
	    id: 3,
	    nome: 'Lombo de porco',
	    descricao: 'Arroz, Farofa, Batata Frita e Vinagrete',
	    imagem: 'img/perry.png'
	  }, {
	    id: 4,
	    nome: 'Filé de peixe',
	    descricao: 'Arroz, Pirão, Batata Frita e Salada',
	    imagem: 'img/mike.png'
	  }];

	  return {
	    all: function() {
	      return sobremesa;
	    },
	    remove: function(produto) {
	    	sobremesa.splice(sobremesa.indexOf(produto), 1);
	    },
	    get: function(produtoId) {
	      for (var i = 0; i < sobremesa.length; i++) {
	        if (sobremesa[i].id === parseInt(produtoId)) {
	          return sobremesa[i];
	        }
	      }
	      return null;
	    }
	  };
	});
