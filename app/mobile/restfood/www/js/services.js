angular.module('starter.services', [])

.factory('Principal', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var principal = [{
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
      return principal;
    },
    remove: function(chat) {
    	principal.splice(principal.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < principal.length; i++) {
        if (principal[i].id === parseInt(chatId)) {
          return principal[i];
        }
      }
      return null;
    }
  };
});
