
(function(){
  angular.module('ngtodos') //getter
        .controller('MainController', MainController);

  MainController.$inject = [];

  function MainController(){
    console.log('Main!');
  }
})();
