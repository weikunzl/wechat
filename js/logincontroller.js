angular.module('starter.controllers', ['ionic'])

  .controller('LoginMainCtrl', function($scope,$rootScope, $ionicModal, $timeout,$state,$http,ApiEndpoint,$timeout,$cookieStore,$translate) {
    $rootScope.LoadingHide();
    //验证是否登录
    $http.get(ApiEndpoint.url+"/wap.php?c=passport&a=checklogin").success(function(response){

      if(response.uid){
        $state.go("app.main");
        //$rootScope.LoadingShow();
      }
    }).error(function(response){
      //if(response.code==401){
      //  window.location.href = "/wap/login/index.html";
      //}
    })

    $scope.sliderAry = [];
    for(var index in [1,2,3,4]){
      var x = parseInt(index)+1;
      var obj = {};
      obj.img1 = 'image/p'+x+'.png';
      obj.img2 = 'bgcupid_txt'+(x*2-1);
      obj.img3 = 'bgcupid_txt'+(x*2);
      obj.img4 = 'bgcupid_img'+x;
      obj.img5 = 'image/'+x+'-v=1.jpg';
      obj.index = index;
      $scope.sliderAry.push(obj);
    }

    var langpages=function(){
      var type=navigator.appName;
      var langes = "";
      if (type=="Netscape"){
        langes = navigator.language;
      }else{
        langes = navigator.userLanguage;
      }
      if(langes.substr(0,2)=="zh"){
        langes = langes.substr(3,5).toLowerCase();
      }else{
        langes = langes.substr(0,2)
      }
      return langes;
    }
//计算高度
    var h=document.documentElement.clientHeight+100;
    var w=document.documentElement.clientWidth;
    var Ht=w-10;
    var bghight=w*647/375+20;
    $scope.bgcupidImgHeight = bghight;
    document.getElementById("bgcupid_bg").style.height =bghight +"px";

    document.getElementById("language_div_bg").style.height =  h+"px";
    //$scope.bgcupid_img1_height = bghight;
    //$scope.bgcupid_img2_height = bghight +"px";
    //$scope.bgcupid_img3_height = bghight +"px";
    //$scope.bgcupid_img4_height = bghight +"px";
    //$scope.bgcupid_img5_height = bghight +"px";
    //document.getElementById("slide_home_top").style.height = Ht+"px";
    //document.getElementById("bgcupid_login").style.width =  w+"px";
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };
    //$('#home_slider').flexslider({
    //  animation : 'slide',
    //  controlNav : true,
    //  directionNav : false,
    //  animationLoop : false,
    //  slideshow : false,
    //  useCSS : true
    //});
    //$scope.homepagejs=function (){
    //  //document.getElementById("Footer_Quick_content").innerHTML=window['_translate_'+window.localStorage.lang.toUpperCase()'FooterQuickcontent');
    //  //document.title ").innerHTML= yangtitle;
    //
    //
    //
    //
    //  document.getElementById("bgcupid_img1").style.height = bghight +"px";
    //  document.getElementById("bgcupid_img2").style.height = bghight +"px";
    //  document.getElementById("bgcupid_img3").style.height = bghight +"px";
    //  document.getElementById("bgcupid_img4").style.height = bghight +"px";
    //  document.getElementById("bgcupid_img5").style.height = bghight +"px";
    //
    //  $timeout(function(){
    //    document.getElementById("bgcupid_bg").style.display="none";
    //  },2000);
    //  //;
    //
    //  $scope.changeLanguage();
    //}

    $scope.languagediv=function(){
      if($scope.langdiv){
        document.getElementById("language_div").style.display="block";
        document.getElementById("language_div_bg").style.display="block";
        //langdiv=2;
      }else{
        document.getElementById("language_div").style.display="none";
        document.getElementById("language_div_bg").style.display="none";
        //langdiv=1;
      }
      $scope.langdiv = !$scope.langdiv;
    }

    $scope.languagebotton=function(langs){
      if(langs=="cn"){
        $scope.language_title="简体中文";
        $scope.language_jianti="CN";
      }else if(langs=="tw"){
        $scope.language_title="中文-繁體";
        $scope.language_jianti="TW";
      }else if(langs=="en"){
        $scope.language_title="English";
        $scope.language_jianti="EN";
      }else if(langs=="ja"){
        $scope.language_title="日本語";
        $scope.language_jianti="JA";
      }else if(langs=="ko"){
        $scope.language_title="한국의";
        $scope.language_jianti="KO";
      }else if(langs=="de"){
        $scope.language_title="Deutsch";
        $scope.language_jianti="DE";
      }else if(langs=="es"){
        $scope.language_title="Español";
        $scope.language_jianti="ES";
      }else if(langs=="fr"){
        $scope.language_title="Français";
        $scope.language_jianti="FR";
      }else if(langs=="it"){
        $scope.language_title="Italiano";
        $scope.language_jianti="IT";
        //}else if(langs=="nl"){
        // $scope.language_title="Nederlandse";
        // $scope.language_jianti="NL";
      }else if(langs=="pt"){
        $scope.language_title="Português";
        $scope.language_jianti="PT";
      }else if(langs=="ru"){
        $scope.language_title="Русский";
        $scope.language_jianti="RU";
      }else{
        $scope.language_title="简体中文";
        $scope.language_jianti="CN";
      }
      $cookieStore.put("langCM",langs);
      $translate.use(langs)
      $scope.languagediv();
      //$scope.changeLanguage();
    }




    var c_start=document.cookie.indexOf("langCM=");
    if(c_start == -1){
      var language=langpages();
      $scope.languagebotton(language);
    }else{
      var language= $cookieStore.get("langCM");
      $scope.languagebotton(language);
    }

  })
.controller('LoginCtrl', function($scope,loginService, $ionicModal, $timeout,$ionicModal,$rootScope,$state) {
  //验证是否登录
  $scope.state = $state;
  $scope.sliderAry = [];
  for(var index in [1,2,3,4]){
    var x = parseInt(index)+1;
    var obj = {};
    obj.img1 = 'image/p'+x+'.png';
    obj.img2 = 'bgcupid_txt'+(x*2-1);
    obj.img3 = 'bgcupid_txt'+(x*2);
    obj.img4 = 'bgcupid_img'+x;
    obj.img5 = 'image/'+x+'-v=1.jpg';
    obj.index = index;
    $scope.sliderAry.push(obj);
  }


//计算高度
  var h=document.documentElement.clientHeight+100;
  var w=document.documentElement.clientWidth;
  var Ht=w-10;
  var bghight=w*647/375+20;

  $scope.bgcupid_img1_height = bghight;
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
  $timeout(function(){
    document.getElementById("bgcupid_bg").style.display="none";
  },2000);


  $scope.doLogin = function(){
    //$rootScope.LoadingShow();

    $state.go("app.main");
  }


})
.controller('RegCtrl', function($scope,loginService, ionicDatePicker, $ionicModal,$rootScope,$state,$cordovaCamera) {

    $scope.state = $state;
    var ipObj1 = {
      callback: function (val) {  //Mandatory
        $scope.Birthday = new Date(val);
        //console.log('Return value from the datepicker popup is : ' + val, );
      },
      disabledDates: [            //Optional
        new Date(2016, 2, 16),
        new Date(2015, 3, 16),
        new Date(2015, 4, 16),
        new Date(2015, 5, 16),
        new Date('Wednesday, August 12, 2015'),
        new Date("08-16-2016"),
        new Date(1439676000000)
      ],
      from: new Date(2012, 1, 1), //Optional
      to: new Date(2016, 10, 30), //Optional
      inputDate: new Date(),      //Optional
      mondayFirst: true,          //Optional
      disableWeekdays: [0],       //Optional
      closeOnSelect: false,       //Optional
      templateType: 'popup'       //Optional
    };

    $scope.showDatePicker = function(){
      ionicDatePicker.openDatePicker(ipObj1);
    };


    //条款
    $scope.infoList = [
      'TermsOfUses',
      'PrivacyPolicys'
    ]
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
    $scope.showInfoModal = function(tag){
      if(!tag){
        return;
      }
      $scope[tag].show();
    }
    $scope.closeModal = function(tag) {
      $scope[tag].hide();
    };

    //性别
    $scope.doChangeSex = function(v){
      console.log(v)
    }
    $scope.doCheck = function(v){
      console.log(v)
    }

    $scope.user = {};
    $scope.doReg = function(){

      //$rootScope.LoadingShow();
      $scope.regSuccess = true;
      //loginService($scope.user).success(function(response){
      //
      //  if(response.uid){
      //    $location.path("/app/main");
      //  }
      //}).error(function(response){
      //  //if(response.code==401){
      //  //  window.location.href = "/wap/login/index.html";
      //  //}
      //  $rootScope.LoadingHide();
      //})
      $scope.openPhotoLibrary();
    }


    $scope.openPhotoLibrary = function() {
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {

        //console.log(imageData);
        //console.log(options);
        var image = document.getElementById('tempImage');
        image.src = imageData;

        var server = "http://yourdomain.com/upload.php",
          filePath = imageData;

        var date = new Date();

        var options = {
          fileKey: "file",
          fileName: imageData.substr(imageData.lastIndexOf('/') + 1),
          chunkedMode: false,
          mimeType: "image/jpg"
        };

        //$cordovaFileTransfer.upload(server, filePath, options).then(function(result) {
        //  console.log("SUCCESS: " + JSON.stringify(result.response));
        //  console.log('Result_' + result.response[0] + '_ending');
        //  alert("success");
        //  alert(JSON.stringify(result.response));
        //
        //}, function(err) {
        //  console.log("ERROR: " + JSON.stringify(err));
        //  //alert(JSON.stringify(err));
        //}, function (progress) {
        //  // constant progress updates
        //});


      }, function(err) {
        // error
        console.log(err);
      });
    }
});

