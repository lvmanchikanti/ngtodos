
(function(){
  angular.module('ngtodos') //getter
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'TodoService'];

  function MainController($scope, TodoService){
    $scope.todos = TodoService.todos;
    $scope.create = createTodo;
    $scope.delete = deleteTodo;
    getTodos();



    //writing functions at bottom and linking to scope at top
    function getTodos(){
      TodoService.readAll()
                  .then(function(){
                    $scope.todos = TodoService.todos;
                    console.log($scope.todos);
                  });
      }

      function createTodo(description){
        TodoService.create(description)
                    .then(function(){
                      $scope.description= '';
                      getTodos();
                    });
      }

      function deleteTodo(id){
        console.log(id);
        TodoService.delete(id)
                    .then(function(){
                      getTodos();
                    });
      }

    }
})();
