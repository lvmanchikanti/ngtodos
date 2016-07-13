
(function(){
  angular.module('ngtodos') //getter
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'TodoService'];

  function MainController($scope, TodoService){
    $scope.todos = TodoService.todos;
    getTodos();

    

    //writing functions at bottom and linking to scope at top
    function getTodos(){
      TodoService.readAll()
                  .then(function(){
                    $scope.todos = TodoService.todos;
                    console.log($scope.todos);
                  })
      }
    }
})();
