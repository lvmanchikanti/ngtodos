
(function(){
  angular.module('ngtodos') //getter
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'TodoService'];

  function MainController($scope, TodoService){
    $scope.message = 'Hey';
    console.log(TodoService);
    var todos;
    TodoService.readAll()
                .then(function(){
                  todos = TodoService.todos;
                  console.log(todos);
                });
      TodoService.create();
      TodoService.delete();
      TodoService.update();
      
    }
})();
