// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
//window.localStorage.lang = 'zh_CN'
angular.module('starter', ['ionic','ngCookies', 'pascalprecht.translate','starter.controllers','ionic-datepicker','ngCordova'])

.run(function($rootScope,$ionicPlatform,$cookieStore,$ionicLoading) {
  //localStorage.langCM = $cookieStore.get('langCM')||'en';
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });


    $rootScope.LoadingShow = function() {
      $ionicLoading.show({
        template: '<ion-spinner icon="lines"></ion-spinner><br/>Loading...'
      });
    };
    $rootScope.LoadingHide= function(){
      $ionicLoading.hide();
    };
})
  .constant('ApiEndpoint', {
    url: 'http://charmmeet.com'
  })
.config(function($stateProvider, $urlRouterProvider,$translateProvider ,$httpProvider,$ionicConfigProvider,ionicDatePickerProvider) {
  // Use x-www-form-urlencoded Content-Type
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.transformRequest = function(obj){
      var str = [];
      for(var p in obj){
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
      return str.join("&");
    }

    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
//$translateProvider.useSanitizeValueStrategy(null);
   // console.log($cookies)
   // var lauguageName = $cookies.languageSet||'zh_CN';

    //$translateProvider.determinePreferredLanguage();//这个方法是获取手机默认语言设置

    //$translateProvider.preferredLanguage(window.localStorage.lang);
    //$translateProvider.useStaticFilesLoader({
    //      prefix: '/js/i18n/',
    //      suffix: '.json'
    //    });
    //
    $translateProvider.determinePreferredLanguage();
    $translateProvider.translations('en',_translate_EN);
    $translateProvider.translations('cn',_translate_CN);
    $translateProvider.translations('ja',_translate_JA);
    $translateProvider.translations('ko',_translate_KO);
    $translateProvider.translations('de',_translate_DE);
    $translateProvider.translations('es',_translate_ES);
    $translateProvider.translations('fr',_translate_FR);
    $translateProvider.translations('it',_translate_IT);
    $translateProvider.translations('pt',_translate_PT);
    $translateProvider.translations('ru',_translate_RU);
    $translateProvider.translations('tw',_translate_TW);
    //$translateProvider.registerAvailableLanguageKeys(["zh"
    //  ,"zh-TW"
    //  ,"en"
    //  ,"ja"
    //  ,"ko"
    //  ,"de"
    //  ,"es"
    //  ,"fr"
    //  ,"it"
    //  ,"pt"
    //  ,"ru"],{
    //  'en-*': 'en',
    //  'zh-*': 'zh',
    //  'jp-*': 'ja'
    //});
    //$translateProvider.determinePreferredLanguage();
    $translateProvider.preferredLanguage(localStorage.langCM||'cn');
    $translateProvider.fallbackLanguage(localStorage.langCM||'cn');
    //国际化
  $stateProvider
    .state('login', {
      url: '/login',
      abstract: true,
      templateUrl: 'templates/login/loginMain.html',
      controller: 'LoginMainCtrl'
    })
    .state('login.slider', {
      url: '/slider',
      views: {
        'loginContent': {
          templateUrl: 'templates/login/login.html',
          controller: 'LoginCtrl'
        }
      }
    })
    .state('login.tab', {
      url: '/main',
      views: {
        'loginContent': {
          templateUrl: 'templates/login/logintab.html',
          controller: 'LoginCtrl'
        }
      }
    })
    .state('login.tab.in', {
      url: '/in',
      views: {
        'loginTabContent': {
          templateUrl: 'templates/login/loginform.html',
          controller: 'LoginCtrl'
        }
      }
    })
    .state('login.tab.forget', {
      url: '/forget',
      views: {
        'loginTabContent': {
          templateUrl: 'templates/login/forgetform.html',
          controller: 'LoginCtrl'
        }
      }
    })
    .state('login.tab.reg', {
      url: '/reg',
      views: {
        'loginTabContent': {
          templateUrl: 'templates/login/regform.html',
          controller: 'RegCtrl'
        }
      }
    })
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/common/menu.html',
      controller: 'AppCtrl'
    })

  .state('app.main', {
    url: '/main',
    views: {
      'menuContent': {
        templateUrl: 'templates/common/main.html',
        controller:'homeCtrl'
      }
    }
  }).state('app.Photoalbum', {
      url: '/Photoalbum',
      views: {
        'menuContent': {
          templateUrl: 'templates/common/Photoalbum.html'
        }
      }
    }).state('app.Avatar', {
      url: '/Avatar',
      views: {
        'menuContent': {
          templateUrl: 'templates/common/Avatar.html'
        }
      }
    }).state('app.uploadPictures', {
      url: '/uploadPictures',
      views: {
        'menuContent': {
          templateUrl: 'templates/common/uploadPictures.html'
        }
      }
    })
      .state('app.upgrade', {
        url: '/upgrade',
        views: {
          'menuContent': {
            templateUrl: 'templates/upgrade.html'
          }
        }
      })
    .state('app.GetGold', {
      url: '/GetGold',
      views: {
        'menuContent': {
          templateUrl: 'templates/GetGold.html'
        }
      }
    })
    .state('app.ExpressionPostShop', {
      url: '/ExpressionPostShop',
      views: {
        'menuContent': {
          templateUrl: 'templates/ExpressionPostShop.html'
        }
      }
    })
    .state('app.Onlineuserss', {
      url: '/Onlineuserss',
      views: {
        'menuContent': {
          templateUrl: 'templates/Onlineuserss.html'
        }
      }
    })
    .state('app.freshNews', {
      url: '/freshNews',
      views: {
        'menuContent': {
          templateUrl: 'templates/freshNews.html'
        }
      }
    })
    .state('app.chatlang', {
      url: '/chatlang',
      views: {
        'menuContent': {
          templateUrl: 'templates/chatlang.html'
        }
      }
    })
    .state('app.chatlangDetail', {
      url: '/chatlangDetail/:chatId',
      views: {
        'menuContent': {
          templateUrl: 'templates/chatlangDetail.html'
        }
      }
    })
    .state('app.visiting', {
      url: '/visiting',
      views: {
        'menuContent': {
          templateUrl: 'templates/visiting.html'
        }
      }
    })
    .state('app.collections', {
      url: '/collections',
      views: {
        'menuContent': {
          templateUrl: 'templates/collections.html'
        }
      }
    })
    .state('app.GiftBox', {
      url: '/GiftBox',
      views: {
        'menuContent': {
          templateUrl: 'templates/GiftBox.html'
        }
      }
    })
    .state('app.Encounter', {
      url: '/Encounter',
      views: {
        'menuContent': {
          templateUrl: 'templates/Encounter.html'
        }
      }
    })
    .state('app.ReciprocalLiking', {
      url: '/ReciprocalLiking',
      views: {
        'menuContent': {
          templateUrl: 'templates/ReciprocalLiking.html'
        }
      }
    })

    .state('app.LikeMys', {
      url: '/LikeMys',
      views: {
        'menuContent': {
          templateUrl: 'templates/LikeMys.html'
        }
      }
    })
    .state('app.ILikeThes', {
      url: '/ILikeThes',
      views: {
        'menuContent': {
          templateUrl: 'templates/ILikeThes.html'
        }
      }
    })
    .state('app.setting', {
      url: '/setting',
      views: {
        'menuContent': {
          templateUrl: 'templates/common/setting.html',
          controller: 'SettingCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login/slider');
  //$urlRouterProvider.otherwise('/login/slider');


    var datePickerObj = {
      inputDate: new Date(),
      setLabel: 'Set',
      todayLabel: 'Today',
      closeLabel: 'Close',
      mondayFirst: false,
      weeksList: ["S", "M", "T", "W", "T", "F", "S"],
      monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
      templateType: 'popup',
      from: new Date(2012, 8, 1),
      to: new Date(2018, 8, 1),
      showTodayButton: true,
      dateFormat: 'dd MMMM yyyy',
      closeOnSelect: false,
      disableWeekdays: [6],
    };
    ionicDatePickerProvider.configDatePicker(datePickerObj);
});

