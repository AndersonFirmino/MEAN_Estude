
angular.module('contatooh').controller('ContatosController', function($scope, Contato){

  $scope.init = function() {
    buscaContatos();
  }
  $scope.mensagem = { texto: '' };

  $scope.total = []; 

  $scope.filtro = ""; 

  // var Contato = $resource('/contatos/:id');

  function buscaContatos() {
     Contato.query(function(contatos){
      $scope.contatos = contatos;
    }, 
    function(erro){
      $scope.mensagem = {
        texto: "Não foi possivel obter a lista de contatos." 
      };
      console.log(erro);
    });    
  }
  $scope.remove = function(contato) {
    //console.log(contato);
    //Jeito comun de fazer
    // var promise = Contato.delete({id: contato._id}).$promise;
    // promise
    //   .then(buscaContatos)
    //   .catch(function(erro){
    //     console.log('Não foi possivel remover o contato.');
    //     console.log(erro);
    //   });
    //Açucar sintatico (menos verboso)
    Contato.delete({id: contato._id}, buscaContatos, function(erro){
      $scope.mensagem = {
        texto: "Não foi possivel obter a lista de contatos." 
      };
      console.log(erro);
    });
  }
 $scope.init();
});