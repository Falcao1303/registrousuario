var cadastroModulo = angular.module('cadastroModulo',[]);

cadastroModulo.controller("cadastroController", function ($scope){
    $scope.cadastro = [
        {codigo:'',email:'',nome:'',mensagem:''}
    ];
    
    $scope.selecionaUsuario = function(usuarioSelecionado){
        $scope.usuario = usuarioSelecionado;
        
    }

    $scope.limparCampos = function(){
        $scope.usuario = ""; 
    } 

    $scope.salvar = function(){
        $scope.cadastro.push($scope.usuario);
        $scope.limparCampos();
    }

    $scope.excluir = function(){
        $scope.cadastro.splice($scope.cadastro.indexOf($scope.usuario),1);
        $scope.limparCampos();
    }
});