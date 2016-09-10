var timer;

function loginajax(){
	var name = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	name=trimStr(name);
	var lang = "zh";
	doAjax("wap.php?c=passport&a=login", { loginname:name, password:password,a:'loginpost',forward:null}, function (obj) {

		if(obj.code==200){
			setCookie("token",obj.token);
      window.location.href = "/index.html";
		//	clearInterval(timer);
		//	location.replace('homepage/index.php');
		//}else if(obj.status==2){
		//	alert(logins1);
		//	document.getElementById("username1").value="";
		//	//window.location.reload();
		//}else if(obj.status==3){
		//	alert(logins2);
		//	document.getElementById("password1").value="";
		//	//window.location.reload();
		//}else if(obj.status==4){
		//	alert(logins4);
			//window.location.reload();
		}

	});
}
function KeyLandVK(){
	document.getElementById("KeyLand_VK").style.display="block";
	document.getElementById("KeyLandbg").style.display="block";
}
function KeyLandclose(){
	document.getElementById("KeyLand_VK").style.display="none";
	document.getElementById("KeyLandbg").style.display="none";
}
function emailsend(){
	var email = document.getElementById("FPemail").value;
	if(email){
		//var ajaxpage="emailsend";
	doAjax("emailsend.php", {email:email}, function (emailsendmsg) {
		var obj = JSON.parse(emailsendmsg);
		if(obj.status==1){
			alert(logemail);
		}else if(obj.status==2){
			document.getElementById('FPemail_error').style.display="block";
			document.getElementById('FPemail_error').innerHTML = login_email;
		}
	});
	}else{
		document.getElementById('FPemail_error').style.display="block";
		document.getElementById('FPemail_error').innerHTML = login_email_cont;
	}
}

var postAuth=function(user){
	var oid=user["uid"];
	var auth=user["auth"];
	doAjax("loginauth.php", { oid:oid, auth:auth}, function (msg) {
	var obj = JSON.parse(msg);
	if(obj.status==1){
		setCookie("token",obj.token);
		location.replace('homepage/index.php');
	}else if(obj.status==2){
		 registerAnd=2;
		 page_register(user);
	}
	});
}
	var vkLogin = function () {
        loadJs(document, "vk_sdk", "http://vk.com/js/api/openapi.js");
        var startVk = function () {
            VK.init({apiId: 5302673});
            VK.Auth.getLoginStatus(function (res) {
                var getInfo = function (res) {
                    if (res.session) {
                        VK.Api.call('users.get', {uids: res.session.mid, fields: "sex,bdate,country"}, function (r) {
                            r = r.response[0];
                            var user = {};
                            user["uid"] = r["uid"];
                            user["auth"] = "vk";
                            user["gender"] = r["sex"] == 2 ? 1 : 2;
                            user["alias"] = r["first_name"] + " " + r["last_name"];
                            printProp(user);
							postAuth(user);
                        });
                    }
                };
                if (res.session) {
                    getInfo(res);
                } else {
                    VK.Auth.login(getInfo);
                    //top.location = "https://oauth.vk.com/authorize?client_id=5159445&scope=PERMISSIONS&redirect_uri=http://localhost&response_type=code";
                }
            });
        };
        if (window.vkAsyncInit) {
            startVk();
        } else {
            window.vkAsyncInit = startVk;
        }
    };
	var fbLogin = function () {
        loadJs(document, "fb-sdk", "//connect.facebook.net/en_US/sdk.js");
        var startFb = function () {
            FB.init({appId: '208527039501877', xfbml: true, version: 'v2.5', status: true});
            FB.getLoginStatus(function (res) {
                    var getInfo = function () {
                        FB.api('/me', {fields: 'id,name,email,gender,birthday,location'}, function (res) {
                            if (res["id"]) {
                                var user = {};
                                user["uid"] = res["id"];
                                user["alias"] = res["name"];
                                user["gender"] = res["gender"] == "male" ? 1 : 2;
                                user["auth"] = "fb";
                               printProp(user);
							    registerAnd=2;
                               postAuth(user);
                            }
                        });
                    };
                    if (res.status === 'connected') {
                        getInfo();
                    } else {
                        FB.login(getInfo);
                        //top.location="https://www.facebook.com/dialog/oauth?client_id=1527989137519967&redirect_uri=http://localhost";
                    }
                }
            );
        };
        if (window.fbAsyncInit) {
            startFb();
        } else {
            window.fbAsyncInit = startFb;
        }
    };
var QQLogin = function(){
	loadJs(document, "qq_sdk", "http://qzonestyle.gtimg.cn/qzone/openapi/qc_loader.js",
            {
                "data-appid": "101269018",
                "data-redirecturi": "http://www.charmmeet.com/wap.php"
            }
        );
	var startQQ = function () {
		QC.Login.signOut();//首先注销当前用户
		QC.Login.showPopup({appId: "101269018"});
		QC.api("get_user_info").success(function (s) {
			QC.Login.getMe(function (openId, accessToken) {
					if (openId) {
						var user = {};
						user["uid"] = openId;
						user["auth"] = "qq";
						user["gender"] = s.data.gender == "男" ? 1 : 2;
						user["alias"] = s.data.nickname;
						printProp(user);
						postAuth(user);
					}

                });
		})
		.error(function (f) {//失败回调
			startQQ();
		})
		.complete(function (c) {//完成请求回调

		});
	};
	if (window.qqAsyncInit) {
            startQQ();
        } else {
			window.qqAsyncInit = startQQ;
			setTimeout('QQLogin()',1000);
			//QQLogin();
        }
}

function weixingetCookie(name)
{
  var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
  if(arr != null) return unescape(arr[2]);
  return null;
}
var weixinLogin=function(){
	if(!weixingetCookie("weixinuser"))
	{

	}else{
		var weiuser=JSON.parse(weixingetCookie("weixinuser"));
		var user = {};
		user["uid"] = weiuser["openid"];
		user["auth"] = "wx";
		user["gender"] = weiuser["sex"];
		user["alias"] = decodeURIComponent(escape(weiuser["nickname"]));
		printProp(user);
		postAuth(user);
	}
}
