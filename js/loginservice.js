angular.module('starter.controllers').service("loginService",function($http){
    return {
      reg : function(data){
        data.a='regpost';
        return $http.post(ApiEndpoint.url+"/wap.php?c=passport",data);
      },
      login : function(data){
        data.a='loginpost';
        return $http.post(ApiEndpoint.url+"/wap.php?c=passport",data);
      }
    }
  });

