angular.module('starter.controllers')

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state,$http,ApiEndpoint,$window) {
    $http.get(ApiEndpoint.url+"/wap.php?c=passport&a=checklogin").success(function(response){
      $rootScope.LoadingHide();
      alert(typeof response );
      alert(JSON.stringify(response));
      if(!response.uid){
        $window.location.href = "/wap/login/index.html";
      }
    }).error(function(response){

      alert(JSON.stringify(1, response ));
      //if(response.code==401){
      //  window.location.href = "/wap/login/index.html";
      //}
    })
  $scope.$state = $state;
    $scope.subContent = 'homeContent';

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
    $scope.user = {
      Sex:"男"
    };
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/modal/ModalSearch.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.ModalSearch = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeModalSearch = function() {
    $scope.ModalSearch.hide();
  };

  // Open the login modal
  $scope.showModalSearch = function() {
    $scope.ModalSearch.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
    $scope.swapTab = function(tag){
      $scope.subContent = tag;
    }
})

.controller('homeCtrl', function($scope,$http,ApiEndpoint,$ionicPopup) {
    $scope.user = {
      Sex:"男"
    };
            //alert(ApiEndpoint.url);
    $scope.xx = 0;
    $scope.doPost = function(){

      $ionicPopup.prompt({
        title: 'Password Check',
        template: 'Enter your secret password',
        inputType: 'text',
        inputPlaceholder: 'Your password'
      }).then(function(res) {
        console.log('Your password is', res);
        if($scope.xx==0){
          $http.post(ApiEndpoint.url+"/wap.php?c=passport",{loginname:"lily0511",password:"2917768weikun",forward:"",a:"loginpost"}).success(function(response){

            alert(JSON.stringify(response));
          }).error(function(response,state){
            for(var i in arguments){
              alert(JSON.stringify(arguments[i]))}

          })
          $scope.xx=1;
        }
        res = "/wap.php?"+res;
        $http.get(ApiEndpoint.url+res).success(function(response){
          alert(222)
          alert(JSON.stringify(response));
        }).error(function(response,state){
          for(var i in arguments){
            alert(JSON.stringify(arguments[i]))}

        })
      });

    }

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('SettingCtrl', function($scope,$rootScope, $stateParams,$translate,$ionicModal,$cookieStore,$state) {
    $scope.infoList = [
      'DatingSafetys',
      'TermsOfUses',
      'PrivacyPolicys'
    ]

    $scope.languages = [{
      name:'cn',
      value:"中文简体"}
      ,{
        name:'tw',
        value:"中文繁体"}
      ,{
        name:'en',
        value:"English"
      },{
        name:'ja',
        value:"日本語"
      },{
        name:'ko',
        value:"韩国"
      },{
        name:'de',
        value:"Deutsch"
      },{
        name:'es',
        value:"Español"
      },{
        name:'fr',
        value:"Français"
      },{
        name:'it',
        value:"Italiano"
      },{
        name:'nd',
        value:"Nederlands"
      },{
        name:'pt',
        value:"Português"
      },{
        name:'rs',
        value:"Русский"
      }]
    //默认选中
    for(var obj in $scope.languages){
      if($scope.languages[obj].name==localStorage.langCM){
        $scope.selectLag = $scope.languages[obj];
      }
    }
    //初始化提示页
    for(var x in  $scope.infoList){
      var tag = $scope.infoList[x];
      doSetModal(tag);
    }

    function doSetModal(tag){
      $ionicModal.fromTemplateUrl('templates/modal/Modal'+tag+'.html', {
        scope: $scope
      }).then(function(modal) {
        $scope[tag] = modal;
      });
    }
    $scope.changeLanguage = function(selectLag){
      //$cookieStore.put('langCM',selectLag.name) ;
      // = selectLag.name;
      localStorage.langCM = selectLag.name
      $translate.use(localStorage.langCM)
      //window.localStorage.lang = selectLag.name;
    }
    $scope.showInfoModal = function(tag){
      if(!tag){
        return;
      }
      $scope[tag].show();
    }
    $scope.closeModal = function(tag) {
      $scope[tag].hide();
    };


    //登出
    $scope.doLogout = function(){
      $rootScope.LoadingShow();
      $state.go("login.tab.in");
    }
});


