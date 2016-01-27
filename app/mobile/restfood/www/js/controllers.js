angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('PrincipalCtrl', function($scope, Principal) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.principal = Principal.all();
  $scope.remove = function(chat) {
	  Principal.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Principal) {
  $scope.principal = Principal.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
