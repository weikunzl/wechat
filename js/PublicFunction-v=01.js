function uaredirect(){
	try {
		if(document.getElementById("bdmark") != null){
			return;
		}
		var murl="http://charmmeet.com";
		var urlhash = window.location.hash;
		if (!urlhash.match("fromapp")){
			if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {

			}else{
				location.replace(murl);
				return false;
			}
		}
	} catch(err){}
}
function trimStr(str){
	return str.replace(/(^\s*)|(\s*$)/g,"");
}
var langpages=function(){
	var type=navigator.appName;
	if (type=="Netscape"){
		var langes = navigator.language;
	}else{
		var langes = navigator.userLanguage;
	}
	var langes = langes.substr(0,2);
	return langes;
}
//保存一个密码用于校验
    var _pass;

    String.prototype.Trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, ""); }
    //---------------------------------------------------------------------------
	function check_username(){
     var username;
     username = document.getElementById('username').value;
     username = username.Trim();
     if (username == "") {
	  //document.getElementById('username_error').style.display="block";
      document.getElementById('username_error').innerHTML = "请输入用户名";
	  document.getElementById("username").value="";
	  alert(register_input_name);
	  return false;
      } else {
       if (/^\w{0,20}$/.test(username)) {
		//document.getElementById('username_error').style.display="none";
        document.getElementById('username_error').innerHTML = "";
        } else {
		//document.getElementById('username_error').style.display="block";
        document.getElementById('username_error').innerHTML = "请输入6 ~ 20 字符【0-9】【a-z-A-Z】";
		document.getElementById("username").value="";
		alert(register_input_name_e);
		return false;
        }
     }
    }

    //---------------------------------------------------------------------------
    var check_email=function (){
     var email;
     email = document.getElementById('email').value;
     email = email.Trim();
     if (email == "") {
	  //document.getElementById('email_error').style.display="block";
      document.getElementById('email_error').innerHTML = "请输入Email";
	  document.getElementById("email").value="";
	  alert(register_input_email);
	  return false;
      } else {
       if (/^[\w-]+[\.]*[\w-]+[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(email)) {
		//document.getElementById('email_error').style.display="none";
        document.getElementById('email_error').innerHTML = "";
        } else {
		//document.getElementById('email_error').style.display="block";
        document.getElementById('email_error').innerHTML = "请输入有效的Email地址";
		document.getElementById("email").value="";
		alert(checkEmailmyreg);
		return false;
        }
      }
     }
     var FPcheck_email=function (){
     var email;
     email = document.getElementById('FPemail').value;
     email = email.Trim();
     if (email == "") {
	  //document.getElementById('FPemail_error').style.display="block";
      document.getElementById('FPemail_error').innerHTML = "请输入Email";
	  document.getElementById("FPemail").placeholder="";
	  alert(register_input_email);
	  return false;
      } else {
       if (/^[\w-]+[\.]*[\w-]+[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(email)) {
		//document.getElementById('FPemail_error').style.display="none";
        document.getElementById('FPemail_error').innerHTML = "";
        } else {
		//document.getElementById('FPemail_error').style.display="block";
        document.getElementById('FPemail_error').innerHTML = "请输入有效的Email地址";
		document.getElementById("FPemail").placeholder="";
		alert(checkEmailmyreg);
		return false;
        }
      }
     }
    //---------------------------------------------------------------------------
    var check_pass=function (){
     var pass;
     pass = document.getElementById('password').value;
     pass = pass.Trim();
     _pass = pass;
     if (pass == "") {
		//document.getElementById('pass_error').style.display="block";
		document.getElementById('pass_error').innerHTML = "请输入密码";
		document.getElementById("password").value="";
		alert(register_input_psw);
		return false;
      } else {
       if (/^\w{0,20}$/.test(pass)) {
		//document.getElementById('pass_error').style.display="none";
        document.getElementById('pass_error').innerHTML = "";
        } else {
		//document.getElementById('pass_error').style.display="block";
        document.getElementById('pass_error').innerHTML = "请输入6 ~ 20 字符【0-9】【a-z-A-Z】";
		document.getElementById("password").value="";
		alert(register_input_name_e);
		return false;
        }
      }
     }
function checkRate()
 {
      var re = /^[0-9]+.?[0-9]*$/;   //判断字符串是否为数字     //判断正整数 /^[1-9]+[0-9]*]*$/
     var nubmer = document.getElementById("PhoneV").value;

      if (!re.test(nubmer))
     {
		//document.getElementById('PhoneV_error').style.display="block";
        //document.getElementById('PhoneV_error').innerHTML = "";
		alert(nubmer_p);
		document.getElementById("PhoneV").value="";

      }else{
		//document.getElementById('PhoneV_error').style.display="none";
        //document.getElementById('PhoneV_error').innerHTML = "";
	  }
 }
	//js截取字符串，中英文都能用
//如果给定的字符串大于指定长度，截取指定长度返回，否者返回源字符串。
//字符串，长度
/**
 * js截取字符串，中英文都能用
 * @param str：需要截取的字符串
 * @param len: 需要截取的长度
 */
var cutstr=function (str,len)
{
    var str_length = 0;
    var str_len = 0;
    str_cut = new String();
    str_len = str.length;
    for(var i = 0; i < str_len; i++)
    {
        a = str.charAt(i);
        str_length++;
        if(escape(a).length > 4)
        {
            //中文字符的长度经编码之后大于4
            str_length++;
        }
        str_cut = str_cut.concat(a);
        if(str_length>=len)
        {
            str_cut = str_cut.concat("...");
            return str_cut;
        }
    }
    //如果给定字符串小于指定长度，则返回源字符串；
    if(str_length < len){
        return  str;
    }
}
//时间
var datatime=function (time){
	var Secondsbefore="秒以前";
	var Pointsbefore="分以前";
	var Hoursago="小时以前";
	var Daysago="天以前";
	var startTime = new Date().getTime();
	var t=0;
	var time1=(startTime-time)/1000;
	if(0<time1 && time1<60){
		return  time1+""+Secondsbefore;
	}else if(60<time1 && time1<3600){
		t=time1/60;

		return  Number(t).toFixed(0)+""+Pointsbefore;
	}else if(3600<time1 && time1<86400){
		t=time1/3600;
		return  Number(t).toFixed(0)+""+Hoursago;

	}else if(86400<time1){
		t=time1/86400;
		return  Number(t).toFixed(0)+""+Daysago;
	}else{
		return  time1;
	}
}

    //ajax  ---------------------------------------------------------------------------
var host = "../"
var doAjax = function (server, data, handler, isJson, isAsync) {
  server = host+server;
	var xmlhttp;
	var tdata = [];
	for (var o in data) {
		tdata.push(o + "=" + encodeURIComponent(data[o]));
	}
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var result = xmlhttp.responseText;

			if (handler) {
				handler(result);
			} else {
				alert("没有handler")
			}
		}

	};
	xmlhttp.open("POST", server, true);
	xmlhttp.upload.addEventListener("progress", function (evt) {
	}, false);
	xmlhttp.setRequestHeader("Cache-Control", "no-cache");
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf8");
	xmlhttp.send(tdata.join("&"));
};
   var uploadAjax = function (server, data, handler) {
        var xmlhttp;
        var tdata = [];
        for (var o in data) {
            tdata.push(o + "=" + encodeURIComponent(data[o]));
        }
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var result = xmlhttp.responseText;
                try {
                    result = eval("(" + result + ")");
                } catch (e) {//可能连接服务器失败.
                    result = null;
                }
                handler(result);
            }

        };

        xmlhttp.open("POST", server, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");

        tdata = tdata.join("&");
        if (extraArgs != null) {
            tdata += "&" + extraArgs;
        }
        xmlhttp.send(tdata);
    };
//写cookies

var setCookie=function (name,value)
{
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/";
}

//读取cookies
var getCookie=function (name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

    if(arr=document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

//删除cookies
var delCookie=function (name)
{
    var exp=new Date();
    exp.setTime(exp.getTime()-1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie=name+"="+cval+";expires="+exp.toGMTString()+";path=/";
}
//添加或者修改json数据
var setJson=function (jsonStr,name,value)
{
    if(!jsonStr)jsonStr="{}";
    var jsonObj = JSON.parse(jsonStr);
    jsonObj[name] = value;
        return JSON.stringify(jsonObj) 
}
var changeTwoDecimal= function(floatvar)
{
var f_x = parseFloat(floatvar);
if (isNaN(f_x))
{
return false;
}
var f_x = Math.round(floatvar*100)/100;
return f_x;
}
//头像调去大小
function getImgBySize(src, size) {

        try {
            var r = /_(i|p|r)(\d+)\./g;
            r.exec(src);
            var mode = "_" + RegExp.$1;
            var size_old = RegExp.$2;

            size = size || 0;
            src = src.replace((mode + size_old), mode + size);
        } catch (e) {
            src = null;
        }

        return src;
    }
var getImgSize = function (src, size) {
	try {
		if (src) {
			src = src.replace(/_P\d+\./gi, ".");
			if (size != 0) {
				var dotIndex = src.lastIndexOf(".");
				src = src.substr(0, dotIndex) + "_P" + size + src.substr(dotIndex);
			}
		} else {
			src = "";
		}
	} catch (e) {
		src = "";
	}

	return src;
};
var getGiftImgBySize=function(src,size){
	src = src || "";
	var r = /_(i|p|r)(\d+)\./g;
	r.exec(src);
	try {
		if (!self.isEmpty(RegExp.$1) && !self.isEmpty(RegExp.$2)) {
			var mode = "_" + RegExp.$1;
			var size_old = RegExp.$2;
			size = size || 0;
			src = src.replace((mode + size_old), mode + size);
		}
	}catch (e){
		src="";
	}
	return src;
};

var GetUrlPara= function()
　　{
　　　　var url = document.location.toString();
　　　　var arrUrl = url.split("?");

　　　　var para = arrUrl[1];
　　　　return para;
　　}
var himeDisplay=function (){
	fid=0;
	document.getElementById("open-nav1").style.display="none";
	document.getElementById("open-nav2").style.display="none";
	document.getElementById("open-nav3").style.display="none";
	document.getElementById("open-return").style.display="none";
	document.getElementById("open-nav").style.display="none";
	document.getElementById("open-socials").style.display="none";
	document.getElementById("open-encounter").style.display="none";
	document.getElementById("open-freshNewsadd").style.display="none";
	document.getElementById("open-PhotoAlbum").style.display="none";
	document.getElementById("open-nav4").style.display="none";
	document.getElementById("freshNewsAdd").style.display="none";
	document.getElementById("PersonalfriendHome").style.display="none";
	document.getElementById("personal_ok").style.display="none";
	document.getElementById("PersonalfriendA").style.display="none";
	document.getElementById("PhotoHomes").style.display="none";
	document.getElementById("open-search-back").style.display="none";
	document.getElementById("search-ok").style.display="none";
	document.getElementById("open-search-two").style.display="none";
	document.getElementById("cloce-gift1").style.display="none";
	document.getElementById("cloce-gift2").style.display="none";
	document.getElementById("RealGifts").style.display="none";
	document.getElementById("header_top_title_gift").style.display="none";
	document.getElementById("header_top_title1").style.display="none";
	document.getElementById('chat_fanyi_div').style.display="none";
	document.getElementById('Recommended_wall_bg').style.display="none";
	document.getElementById('Recommended_wall_div').style.display="none";
	document.getElementById("Recommended_wall").style.display="none";
	document.getElementById("search").style.display="none";
	document.getElementById("zaixian").style.display="none";
	document.getElementById("zaixianbord").style.display="none";
	document.getElementById("cloce-visiting-gift").style.display="none";
	document.getElementById("personal_homepage").style.display="none";
	document.getElementById("Upgrade_homepage").style.display="none";
	document.getElementById("gold_homepage").style.display="none";
	document.getElementById("Expression_post_shop_homepage").style.display="none";
	document.getElementById("Expressions_posted_in_detail_homepage").style.display="none";
	document.getElementById("freshNews_homepage").style.display="none";
	document.getElementById("visiting_homepage").style.display="none";
	document.getElementById("collection_homepage").style.display="none";
	document.getElementById("GiftBox_homepage").style.display="none";
	document.getElementById("encounter_homepage").style.display="none";
	document.getElementById("Love_lest").style.display="none";
	document.getElementById("LoveEachOther_homepage").style.display="none";
	document.getElementById("ILikeThe_homepage").style.display="none";
	document.getElementById("LikeMy_homepage").style.display="none";
	document.getElementById("Setting_homepage").style.display="none";
	document.getElementById("freshNewsAdd_homepage").style.display="none";
	document.getElementById("Settings_page").style.display="none";
	document.getElementById("myiframeperfriend").style.display="none";
	document.getElementById("PhotoAlbum_homepage").style.display="none";
	document.getElementById("PhotoAlbumAdd_homepage").style.display="none";
	document.getElementById("Photo_homepage").style.display="none";
	document.getElementById("Photo_Add_homepage").style.display="none";
	document.getElementById("Gifts_homepage").style.display="none";
	document.getElementById("detail_homepage").style.display="none";
	document.getElementById("Detail_botton").style.display="none";
	document.getElementById("personal_content_add").style.display="none";
	document.getElementById("personal_content_homepage").style.display="none";
	document.getElementById("searchpage").style.display="none";
	document.getElementById("chat_history").style.display="none";
	document.getElementById("chat_homepage").style.display="none";
	document.getElementById("chat_botton").style.display="none";
	document.getElementById("HeadPortrait").style.display="none";
	document.getElementById("goldbg").style.display="none";
	document.getElementById("upgrade_button").style.display="none";
	freshNewsShareClose();
}
var page_index=function(){
	document.getElementById("block_home_content").style.display="block";
	document.getElementById("home_footer").style.display="block";
	document.getElementById("home_login").style.display="none";
	document.getElementById("home_register").style.display="none";
	document.getElementById('PhoneVerification').style.display="none";
	document.getElementById("ForgotPasswordpage").style.display="none";
}


//登陆
var page_login=function(){
	document.getElementById("block_home_content").style.display="none";
	document.getElementById("home_footer").style.display="none";
	document.getElementById("ForgotPasswordpage").style.display="none";
	document.getElementById("home_login").style.display="block";
	document.getElementById('PhoneVerification').style.display="none";
	document.getElementById("home_register").style.display="none";
	document.getElementById("username1").placeholder=emailandphone;
	document.getElementById("password1").placeholder=EnterPassword;
	document.getElementById("ForgotPassword").innerHTML=ForgotPassword+"?";
}
var oid="";
var auth="";
var username ="";
var gender = "";
var registerAnd="1";
//注册
var page_register=function(user){
	//loadJs(document, "register", "js/register.js?v=0.2");
	//loadJs(document, "mobiscroll", "js/mobiscroll.custom-2.6.2.min.js?v=0.2");

	printProp(user);
	document.getElementById("block_home_content").style.display="none";
	document.getElementById("home_footer").style.display="none";
	document.getElementById("Terms_of_use").style.display="none";
	document.getElementById("home_login").style.display="none";
	document.getElementById("home_register").style.display="block";
	document.getElementById('PhoneVerification').style.display="none";
	document.getElementById("ForgotPasswordpage").style.display="none";
	document.getElementById("Terms_of_use").style.display="none";
	document.getElementById("Privacy_policy").style.display="none";
	document.getElementById("VerificationCode").style.display="none";
	document.getElementById("username").placeholder=register_input_name;
	document.getElementById("email").placeholder=register_input_email;
	document.getElementById("password").placeholder=register_input_psw;
	document.getElementById("test_default").placeholder=SelectBirthday;
	document.getElementById("register_gender_girl").innerHTML=girl;
	document.getElementById("register_gender_boy").innerHTML=boy;
	document.getElementById("p_r_su").value=PVp_r_su;

	var clause=document.getElementById("clause");
	clause.innerHTML="";
	var clausespan1=document.createElement("span");
	clausespan1.innerHTML=register_clause1;
	clause.appendChild(clausespan1);
	var clausespan2=document.createElement("span");
	clausespan2.className="clause_span";
	clausespan2.onclick=function(){
						TermsOfUse();
						};
	clausespan2.innerHTML=TermsOfUses;
	clause.appendChild(clausespan2);
	var clausespan3=document.createElement("span");
	clausespan3.innerHTML=register_clause2;
	clause.appendChild(clausespan3);
	var clausespan4=document.createElement("span");
		clausespan4.className="clause_span";
		clausespan4.onclick=function(){
						PrivacyPolicy();
						};
	clausespan4.innerHTML=PrivacyPolicys;
	clause.appendChild(clausespan4);
	var clausespan5=document.createElement("span");
	clausespan5.innerHTML=register_clause3;
	clause.appendChild(clausespan5);

	if(registerAnd==2){
		if(user){
			oid=user["uid"];
			auth=user["auth"];
			username =user["alias"];
			gender =user["gender"];
		}

		document.getElementById("p_oauth").innerHTML="Welcome , "+username+" , "+register_oauth;
		registerAnd=2;
		document.getElementById("register_name").style.display="none";
		document.getElementById("register_radio").style.display="none";

	}else{
		oid="";
		auth="";
		username ="";
		gender = "";
		registerAnd=1;
		document.getElementById("p_oauth").innerHTML="";
		document.getElementById("register_name").style.display="block";
		document.getElementById("register_radio").style.display="block";
	}
}
//忘记密码
var Forgot_Password=function(){
	document.getElementById("block_home_content").style.display="none";
	document.getElementById("home_login").style.display="none";
	document.getElementById("home_register").style.display="none";
	document.getElementById("ForgotPasswordpage").style.display="block";
	document.getElementById('PhoneVerification').style.display="none";
	document.getElementById("ForgotPasswordCont").innerHTML=ForgotPasswordCont;
	document.getElementById("Phonecountrypage").style.display="none";
	document.getElementById("VerificationCode").style.display="none";
	document.getElementById("lang_Forgot").innerHTML=ForgotPassword;
	document.getElementById("FPemail").placeholder=register_input_email;
	document.getElementById("FPp_r_su").value=Forgot_send;
}
//手机号输入
var Phone_Verification=function(){
	document.getElementById('PhoneVerification').style.display="block";
	document.getElementById("block_home_content").style.display="none";
	document.getElementById("home_footer").style.display="none";
	document.getElementById("home_login").style.display="none";
	document.getElementById("home_register").style.display="none";
	document.getElementById("ForgotPasswordpage").style.display="none";
	document.getElementById("Phonecountrypage").style.display="none";
	document.getElementById("VerificationCode").style.display="none";
	document.getElementById("lang_Phone").innerHTML=lang_Phone;
	document.getElementById("PhoneV").placeholder=register_Phone_v;
	document.getElementById("PVp_r_su").value=PVp_r_su;
}
//倒计时
	var seconds = 59;
	var speed = 1000;
	function countDown(seconds,speed){

                var txt = "重新获取（ " + ((seconds < 10) ? "0" + seconds : seconds) +"）";
                document.getElementById("VCsp_r_su").innerHTML = txt;
                var timeId = setTimeout("countDown(seconds--,speed)",speed);
                if(seconds == 0){
                        clearTimeout(timeId);
						document.getElementById('VCsp_r_susu').style.display="block";
						document.getElementById("VCsp_r_su").style.display="none";
                };
	}
//验证码输入
var Verification_Code=function(Phones){
	document.getElementById('PhoneVerification').style.display="none";
	document.getElementById("block_home_content").style.display="none";
	document.getElementById("home_footer").style.display="none";
	document.getElementById("home_login").style.display="none";
	document.getElementById("home_register").style.display="none";
	document.getElementById("ForgotPasswordpage").style.display="none";
	document.getElementById("Phonecountrypage").style.display="none";
	document.getElementById("VerificationCode").style.display="block";
	document.getElementById("Phone_code").innerHTML="<span class='Phonecode'>"+Phone_code+"：</span>+"+Phonecountrykey+" "+Phones;
	document.getElementById("Phone_type").value=Phones;
	document.getElementById("lang_VerificationCode").innerHTML=lang_VerificationCode;
	document.getElementById("Verification_Code").placeholder=VerificationCode;
	document.getElementById("VCsp_r_su").innerHTML=VCsp_r_su+"（60S）";
	document.getElementById("VCsp_r_susu").innerHTML=VCsp_r_su;
	document.getElementById('VCsp_r_susu').style.display="none";
	document.getElementById("VCsp_r_su").style.display="block";
	countDown(seconds,speed);
	document.getElementById("VCp_r_su").value=searchok;
}
//国家选择
var Phone_country=function(){
	document.getElementById('PhoneVerification').style.display="none";
	document.getElementById("block_home_content").style.display="none";
	document.getElementById("home_footer").style.display="none";
	document.getElementById("home_login").style.display="none";
	document.getElementById("home_register").style.display="none";
	document.getElementById("ForgotPasswordpage").style.display="none";
	document.getElementById("Phonecountrypage").style.display="block";
	document.getElementById("VerificationCode").style.display="none";
	document.getElementById("lang_country").innerHTML=lang_country;
	document.getElementById("commonly_C").innerHTML=commonly_Country;
	document.getElementById("All_C").innerHTML=All_Country;
	var PCountry=document.getElementById("country_list");
	PCountry.innerHTML="";
	for(var key in PhoneCountry){
		var PhoneCountry_list=document.createElement("div");
		PhoneCountry_list.id=key;
		PhoneCountry_list.onclick=function(){
									countrykey(this.id);
									};
		PhoneCountry_list.className="PhoneCountry_list";
		PhoneCountry_list.innerHTML=PhoneCountry[key];
		PCountry.appendChild(PhoneCountry_list);
	}
	var allCountryAndCode = getAllCountry();
	var PCountryAll=document.getElementById("countryAll_list");
	 for (var j = 0; j < allCountryAndCode.length; j++) {
		 var elem = allCountryAndCode[j];
		 var code2 = elem["code"];
		 var country2=elem["country"] + "   (+" + code2 + ")";
		var PhoneCountryAll_list=document.createElement("div");
		PhoneCountryAll_list.id=code2+"-"+country2;
		PhoneCountryAll_list.onclick=function(){
									countrykey(this.id,1);
									};
		PhoneCountryAll_list.className="PhoneCountry_list";
		PhoneCountryAll_list.innerHTML=country2;
		PCountryAll.appendChild(PhoneCountryAll_list);
	 }
}
var Phonecountrykey=86;
var country_prefix=[86, 886, 852, 7, 1, 1, 81, 82, 49, 34, 33, 39, 86, 86, 64];
var countrykey=function(key,Country){
	Phone_Verification();
	if(Country){
		var ch = key.split("-");
		var Countrykey=ch[0];
		var Countryname=ch[1];
		Phonecountrykey=Countrykey;
		document.getElementById("Phonecountry").value=Countryname;
	}else{
		Phonecountrykey=country_prefix[key];
		document.getElementById("Phonecountry").value=PhoneCountry[key];
	}

}

//获取url参数的值：name是参数名
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return (r[2]);
	}
	return null;
}

var JsExpressionContent=function(text){
	var finds=text.match(/\[[\w|\/|\s]+\]/g);
	if (finds && finds.length > 0) {
		for (var i = 0; i < finds.length; i++) {
			var texts = finds[i];
			var Ex=InsertExpressionText(texts);
			text = text.replace(texts, Ex);
		}
	}
	return text;
}
var printProp = function (arg) {
        var arr = [];
        for (var p in arg) {
            arr.push(p + " : " + arg[p]);
        }
       // self.print("对象属性:\r\n" + arr.join("\r\n"));
    };
var InsertExpressionText =function(ExpressionText){
	var Expressionimg="";
	if(ExpressionText=="[Smile]"){
		Expressionimg="<img src='image/faces/face1.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Grimace]"){
		Expressionimg="<img src='image/faces/face2.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Drooling]"){
		Expressionimg="<img src='image/faces/face3.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Scowl]"){
		Expressionimg="<img src='image/faces/face4.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Chill]"){
		Expressionimg="<img src='image/faces/face5.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Sob]"){
		Expressionimg="<img src='image/faces/face6.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Shy]"){
		Expressionimg="<img src='image/faces/face7.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Silence]"){
		Expressionimg="<img src='image/faces/face8.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Cry]"){
		Expressionimg="<img src='image/faces/face9.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Embarrassed]"){
		Expressionimg="<img src='image/faces/face10.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[On fire]"){
		Expressionimg="<img src='image/faces/face11.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Wink]"){
		Expressionimg="<img src='image/faces/face12.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Grin]"){
		Expressionimg="<img src='image/faces/face13.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Surprised]"){
		Expressionimg="<img src='image/faces/face14.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Sad]"){
		Expressionimg="<img src='image/faces/face15.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Cool]"){
		Expressionimg="<img src='image/faces/face16.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Frightened]"){
		Expressionimg="<img src='image/faces/face17.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Scream]"){
		Expressionimg="<img src='image/faces/face18.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Puke]"){
		Expressionimg="<img src='image/faces/face19.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Chuckle]"){
		Expressionimg="<img src='image/faces/face20.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Lovely]"){
		Expressionimg="<img src='image/faces/face21.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Sneer]"){
		Expressionimg="<img src='image/faces/face22.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Arrogant]"){
		Expressionimg="<img src='image/faces/face23.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Hungry]"){
		Expressionimg="<img src='image/faces/face24.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Drowsy]"){
		Expressionimg="<img src='image/faces/face25.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Panic]"){
		Expressionimg="<img src='image/faces/face26.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Sweating]"){
		Expressionimg="<img src='image/faces/face27.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Laugh]"){
		Expressionimg="<img src='image/faces/face28.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Soldier]"){
		Expressionimg="<img src='image/faces/face29.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Strive]"){
		Expressionimg="<img src='image/faces/face30.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Scold]"){
		Expressionimg="<img src='image/faces/face31.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Confused]"){
		Expressionimg="<img src='image/faces/face32.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Shhh]"){
		Expressionimg="<img src='image/faces/face33.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Hypnotized]"){
		Expressionimg="<img src='image/faces/face34.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Torment]"){
		Expressionimg="<img src='image/faces/face35.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Frustrated]"){
		Expressionimg="<img src='image/faces/face36.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Skull]"){
		Expressionimg="<img src='image/faces/face37.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Hammer]"){
		Expressionimg="<img src='image/faces/face38.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Wave/Bye]"){
		Expressionimg="<img src='image/faces/face39.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Relived]"){
		Expressionimg="<img src='image/faces/face40.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Pick nose]"){
		Expressionimg="<img src='image/faces/face41.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Applause]"){
		Expressionimg="<img src='image/faces/face42.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Flushed]"){
		Expressionimg="<img src='image/faces/face43.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Hellooo]"){
		Expressionimg="<img src='image/faces/face44.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Snub1]"){
		Expressionimg="<img src='image/faces/face45.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Snub2]"){
		Expressionimg="<img src='image/faces/face46.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Yawn]"){
		Expressionimg="<img src='image/faces/face47.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Booo]"){
		Expressionimg="<img src='image/faces/face48.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Distressed]"){
		Expressionimg="<img src='image/faces/face49.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Sniffle]"){
		Expressionimg="<img src='image/faces/face50.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Sly]"){
		Expressionimg="<img src='image/faces/face51.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Pucker]"){
		Expressionimg="<img src='image/faces/face52.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Scared]"){
		Expressionimg="<img src='image/faces/face53.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Pathetic]"){
		Expressionimg="<img src='image/faces/face54.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Petrified]"){
		Expressionimg="<img src='image/faces/face55.gif' class='gwx_face_face'>";
	}else if(ExpressionText=="[Speechless]"){
		Expressionimg="<img src='image/faces/face56.gif' class='gwx_face_face'>";
	}else{
		var stickerText = ExpressionText.substring(1,ExpressionText.length-1);
		var stickerT = stickerText.split("_");
		var stickerName=stickerT[0];
		var stickersum=stickerT[1];
		if(stickersum){
			//Expressionimg=stickerName;
			Expressionimg="<img src='"+ReadPicture+""+stickerName+"/"+stickersum+".gif' width='100%'>";
		}else{
			Expressionimg=ExpressionText;
		}

	}

	return Expressionimg;
}
//时间的计算
var formatDate = function (d, mask) {
        var zeroize = function (value, length) {
            if (!length) length = 2;
            value = String(value);
            for (var i = 0, zeros = ''; i < (length - value.length); i++) {
                zeros += '0';
            }
            return zeros + value;
        };
        return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, function ($0) {
            switch ($0) {
                case 'd':
                    return d.getDate();
                case 'dd':
                    return zeroize(d.getDate());
                case 'M':
                    return d.getMonth() + 1;
                case 'MM':
                    return zeroize(d.getMonth() + 1);
                case 'yy':
                    return String(d.getFullYear()).substr(2);
                case 'yyyy':
                    return d.getFullYear();
                case 'h':
                    return d.getHours() % 12 || 12;
                case 'hh':
                    return zeroize(d.getHours() % 12 || 12);
                case 'H':
                    return d.getHours();
                case 'HH':
                    return zeroize(d.getHours());
                case 'm':
                    return d.getMinutes();
                case 'mm':
                    return zeroize(d.getMinutes());
                case 's':
                    return d.getSeconds();
                case 'ss':
                    return zeroize(d.getSeconds());
                case 'l':
                    return zeroize(d.getMilliseconds(), 3);
                case 'L':
                    var m = d.getMilliseconds();
                    if (m > 99) m = Math.round(m / 10);
                    return zeroize(m);
                case 'tt':
                    return d.getHours() < 12 ? 'am' : 'pm';
                case 'TT':
                    return d.getHours() < 12 ? 'AM' : 'PM';
                case 'Z':
                    return d.toUTCString().match(/[A-Z]+$/);
                default:
                    return $0.substr(1, $0.length - 2);
            }
        });
    }
	var print = function (t) {
        if (window.console) {
            var time = self.formatDate(new Date(), "HH:mm:ss");
            window.console.log(time + "\t" + t);
        }
    }

//使用条款
var TermsOfUse=function (TO){
	if(TO){
		himeDisplay();
		document.getElementById("open-return").style.display="block";
		document.getElementById("open-return").onclick=function(){
											Setting();
											};
		document.getElementById("header_top_title").innerHTML=TermsOfUses;
		var TermsOfUsepage=document.getElementById("Settings_page");

	}else{
		document.getElementById("Terms_of_use").style.display="block";
		document.getElementById("home_register").style.display="none";
		document.getElementById("lang_Privacy_policy").innerHTML=TermsOfUses;
		var TermsOfUsepage=document.getElementById("Terms_of_use_page");
	}
	TermsOfUsepage.style.display="block";
		TermsOfUsepage.innerHTML="";

	TermsOfUsepage.innerHTML="<div class='dating'><p>"+TermsOfUseContent1+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>1."+TermsOfUseContent2+"</p><p>"+TermsOfUseContent3+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>2. "+TermsOfUseContent4+"</p><p>"+TermsOfUseContent5+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>3."+TermsOfUseContent6+"</p><p>"+TermsOfUseContent7+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>4. "+TermsOfUseContent8+"</p><p>"+TermsOfUseContent9+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>5. "+TermsOfUseContent10+"</p><p>"+TermsOfUseContent11+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>6. "+TermsOfUseContent12+"</p><p>a) "+TermsOfUseContent13+"</p><p>"+TermsOfUseContent14+"</p><p>b)"+TermsOfUseContent15+"</p><p>"+TermsOfUseContent16+"</p><p>c)"+TermsOfUseContent17+"</p><p>"+TermsOfUseContent18+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>7."+TermsOfUseContent19+"</p><p>"+TermsOfUseContent20+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>8. "+TermsOfUseContent21+"</p><p>"+TermsOfUseContent22+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>9."+TermsOfUseContent23+"</p><p>"+TermsOfUseContent24+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>10. "+TermsOfUseContent25+"</p><p>"+TermsOfUseContent26+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>11."+TermsOfUseContent27+"</p><p>"+TermsOfUseContent28+"</p></div>";
}
//隐私政策
var PrivacyPolicy=function (PP){
	if(PP){
		himeDisplay();
		document.getElementById("open-return").style.display="block";
		document.getElementById("open-return").onclick=function(){
											Setting();
											};
		document.getElementById("header_top_title").innerHTML=PrivacyPolicys;
		var PrivacyPolicypage=document.getElementById("Settings_page");

	}else{
		document.getElementById("Privacy_policy").style.display="block";
		document.getElementById("home_register").style.display="none";
		document.getElementById("lang_Privacy_policy").innerHTML=PrivacyPolicys;
		var PrivacyPolicypage=document.getElementById("PrivacyPolicy_page");

	}
		PrivacyPolicypage.style.display="block";
		PrivacyPolicypage.innerHTML="";


	PrivacyPolicypage.innerHTML="<div class='dating'><p>"+PrivacyPolicyContent1+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>"+PrivacyPolicyContent2+"</p><p>"+PrivacyPolicyContent3+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>"+PrivacyPolicyContent4+"</p><p>"+PrivacyPolicyContent5+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>"+PrivacyPolicyContent6+"</p><p>"+PrivacyPolicyContent7+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>"+PrivacyPolicyContent8+"</p><p>"+PrivacyPolicyContent9+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>"+PrivacyPolicyContent10+"</p><p>"+PrivacyPolicyContent11+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>"+PrivacyPolicyContent12+"</p><p>"+PrivacyPolicyContent13+"</p><p style='text-indent: 0em;font-size: 16px;font-weight: 700;margin:10px 0px 5px'>"+PrivacyPolicyContent14+"</p><p>"+PrivacyPolicyContent15+"</p></div>";
}
var langdiv=1;

var getAllCountry = function () {
        return [{"country": "Andorra", "code": 376}, {
            "country": "Afghanistan",
            "code": 93
        }, {"country": "AntiguaandBarbuda", "code": 1}, {"country": "Anguilla", "code": 1}, {
            "country": "Albania",
            "code": 355
        }, {"country": "Armenia", "code": 374}, {"country": "Angola", "code": 244}, {
            "country": "Argentina",
            "code": 54
        }, {"country": "AmericanSamoa", "code": 1}, {"country": "Austria", "code": 43}, {
            "country": "Australia",
            "code": 61
        }, {"country": "Aruba", "code": 297}, {"country": "Azerbaijan", "code": 994}, {
            "country": "Algeria",
            "code": 213
        }, {"country": "BosniaandHerzegovina", "code": 387}, {
            "country": "Barbados",
            "code": 1
        }, {"country": "Bangladesh", "code": 880}, {"country": "Belgium", "code": 32}, {
            "country": "BurkinaFaso",
            "code": 226
        }, {"country": "Bulgaria", "code": 359}, {"country": "Bahrain", "code": 973}, {
            "country": "Burundi",
            "code": 257
        }, {"country": "Benin", "code": 229}, {"country": "Bermuda", "code": 1}, {
            "country": "Brunei",
            "code": 673
        }, {"country": "Bolivia", "code": 591}, {
            "country": "Bonaire,SintEustatiusandSaba",
            "code": 599
        }, {"country": "Brazil", "code": 55}, {"country": "Bahamas", "code": 1}, {
            "country": "Bhutan",
            "code": 975
        }, {"country": "Botswana", "code": 267}, {"country": "Belarus", "code": 375}, {
            "country": "Belize",
            "code": 501
        }, {"country": "BritishIndianOceanTerritory", "code": 246}, {
            "country": "BritishVirginIslands",
            "code": 1
        }, {"country": "Canada", "code": 1}, {
            "country": "CocosIslands",
            "code": 61
        }, {"country": "CentralAfricanRepublic", "code": 236}, {
            "country": "Congo",
            "code": 242
        }, {"country": "Côted'Ivoire", "code": 225}, {"country": "CookIslands", "code": 682}, {
            "country": "Chile",
            "code": 56
        }, {"country": "Cameroon", "code": 237}, {"country": "China", "code": 86}, {
            "country": "Colombia",
            "code": 57
        }, {"country": "CostaRica", "code": 506}, {"country": "Cuba", "code": 53}, {
            "country": "CapeVerde",
            "code": 238
        }, {"country": "Curaçao", "code": 599}, {"country": "ChristmasIsland", "code": 61}, {
            "country": "Cyprus",
            "code": 357
        }, {"country": "CzechRepublic", "code": 420}, {"country": "Croatia", "code": 385}, {
            "country": "Cambodia",
            "code": 855
        }, {"country": "Comoros", "code": 269}, {"country": "CaymanIslands", "code": 1}, {
            "country": "Chad",
            "code": 235
        }, {"country": "Djibouti", "code": 253}, {"country": "Denmark", "code": 45}, {
            "country": "Dominica",
            "code": 1
        }, {"country": "DominicanRepublic", "code": 1}, {"country": "Ecuador", "code": 593}, {
            "country": "Estonia",
            "code": 372
        }, {"country": "Egypt", "code": 20}, {"country": "Eritrea", "code": 291}, {
            "country": "Ethiopia",
            "code": 251
        }, {"country": "EquatorialGuinea", "code": 240}, {"country": "ElSalvador", "code": 503}, {
            "country": "Finland",
            "code": 358
        }, {"country": "Fiji", "code": 679}, {"country": "FalklandIslands", "code": 500}, {
            "country": "FaroeIslands",
            "code": 298
        }, {"country": "France", "code": 33}, {"country": "FrenchGuiana", "code": 594}, {
            "country": "FrenchPolynesia",
            "code": 689
        }, {"country": "Germany", "code": 49}, {"country": "Gabon", "code": 241}, {
            "country": "Grenada",
            "code": 1
        }, {"country": "Georgia", "code": 995}, {"country": "Guernsey", "code": 44}, {
            "country": "Ghana",
            "code": 233
        }, {"country": "Gibraltar", "code": 350}, {"country": "Greenland", "code": 299}, {
            "country": "Gambia",
            "code": 220
        }, {"country": "Guinea", "code": 224}, {"country": "Guadeloupe", "code": 590}, {
            "country": "Greece",
            "code": 30
        }, {"country": "Guatemala", "code": 502}, {"country": "Guam", "code": 1}, {
            "country": "Guinea-Bissau",
            "code": 245
        }, {"country": "Guyana", "code": 592}, {"country": "HongKong", "code": 852}, {
            "country": "Honduras",
            "code": 504
        }, {"country": "Haiti", "code": 509}, {"country": "Hungary", "code": 36}, {
            "country": "Indonesia",
            "code": 62
        }, {"country": "Ireland", "code": 353}, {"country": "Israel", "code": 972}, {
            "country": "IsleOfMan",
            "code": 44
        }, {"country": "India", "code": 91}, {"country": "Iraq", "code": 964}, {
            "country": "Iran",
            "code": 98
        }, {"country": "Iceland", "code": 354}, {"country": "Italy", "code": 39}, {
            "country": "Jersey",
            "code": 44
        }, {"country": "Jamaica", "code": 1}, {"country": "Jordan", "code": 962}, {
            "country": "Japan",
            "code": 81
        }, {"country": "Kenya", "code": 254}, {"country": "Kyrgyzstan", "code": 996}, {
            "country": "Kiribati",
            "code": 686
        }, {"country": "Kuwait", "code": 965}, {"country": "Kazakhstan", "code": 7}, {
            "country": "Laos",
            "code": 856
        }, {"country": "Lebanon", "code": 961}, {"country": "Liechtenstein", "code": 423}, {
            "country": "Liberia",
            "code": 231
        }, {"country": "Lesotho", "code": 266}, {"country": "Lithuania", "code": 370}, {
            "country": "Luxembourg",
            "code": 352
        }, {"country": "Latvia", "code": 371}, {"country": "Libya", "code": 218}, {
            "country": "Micronesia",
            "code": 691
        }, {"country": "Morocco", "code": 212}, {"country": "Monaco", "code": 377}, {
            "country": "Moldova",
            "code": 373
        }, {"country": "Montenegro", "code": 382}, {
            "country": "Madagascar",
            "code": 261
        }, {"country": "MarshallIslands", "code": 692}, {"country": "Macedonia", "code": 389}, {
            "country": "Mali",
            "code": 223
        }, {"country": "Myanmar", "code": 95}, {"country": "Mongolia", "code": 976}, {
            "country": "Macao",
            "code": 853
        }, {"country": "Martinique", "code": 596}, {"country": "Mauritania", "code": 222}, {
            "country": "Montserrat",
            "code": 1
        }, {"country": "Malta", "code": 356}, {"country": "Mauritius", "code": 230}, {
            "country": "Maldives",
            "code": 960
        }, {"country": "Malawi", "code": 265}, {"country": "Mexico", "code": 52}, {
            "country": "Malaysia",
            "code": 60
        }, {"country": "Mozambique", "code": 258}, {"country": "Mayotte", "code": 262}, {
            "country": "NorthKorea",
            "code": 850
        }, {"country": "NorthernMarianaIslands", "code": 1}, {
            "country": "Namibia",
            "code": 264
        }, {"country": "NewCaledonia", "code": 687}, {"country": "Niger", "code": 227}, {
            "country": "NorfolkIsland",
            "code": 672
        }, {"country": "Nigeria", "code": 234}, {"country": "Nicaragua", "code": 505}, {
            "country": "Netherlands",
            "code": 31
        }, {"country": "Norway", "code": 47}, {"country": "Nepal", "code": 977}, {
            "country": "Nauru",
            "code": 674
        }, {"country": "Niue", "code": 683}, {"country": "NewZealand", "code": 64}, {
            "country": "Oman",
            "code": 968
        }, {"country": "Panama", "code": 507}, {"country": "Peru", "code": 51}, {
            "country": "PapuaNewGuinea",
            "code": 675
        }, {"country": "Philippines", "code": 63}, {"country": "Pakistan", "code": 92}, {
            "country": "Poland",
            "code": 48
        }, {"country": "PuertoRico", "code": 1}, {"country": "Palestine", "code": 970}, {
            "country": "Portugal",
            "code": 351
        }, {"country": "Palau", "code": 680}, {"country": "Paraguay", "code": 595}, {
            "country": "Qatar",
            "code": 974
        }, {"country": "Reunion", "code": 262}, {"country": "Romania", "code": 40}, {
            "country": "Russia",
            "code": 7
        }, {"country": "Rwanda", "code": 250}, {"country": "SaintBarthélemy", "code": 590}, {
            "country": "Switzerland",
            "code": 41
        }, {"country": "Spain", "code": 34}, {"country": "SaintKittsAndNevis", "code": 1}, {
            "country": "SouthKorea",
            "code": 82
        }, {"country": "SaintLucia", "code": 1}, {"country": "SriLanka", "code": 94}, {
            "country": "SaintMartin",
            "code": 590
        }, {"country": "SaintPierreAndMiquelon", "code": 508}, {
            "country": "Serbia",
            "code": 381
        }, {"country": "SaudiArabia", "code": 966}, {
            "country": "SolomonIslands",
            "code": 677
        }, {"country": "Seychelles", "code": 248}, {"country": "Sudan", "code": 249}, {
            "country": "Sweden",
            "code": 46
        }, {"country": "Singapore", "code": 65}, {"country": "SaintHelena", "code": 290}, {
            "country": "Slovenia",
            "code": 386
        }, {"country": "SvalbardAndJanMayen", "code": 47}, {
            "country": "Slovakia",
            "code": 421
        }, {"country": "SierraLeone", "code": 232}, {"country": "SanMarino", "code": 378}, {
            "country": "Senegal",
            "code": 221
        }, {"country": "Somalia", "code": 252}, {"country": "Suriname", "code": 597}, {
            "country": "SaoTomeAndPrincipe",
            "code": 239
        }, {"country": "SintMaarten(Dutchpart)", "code": 1}, {"country": "Syria", "code": 963}, {
            "country": "Swaziland",
            "code": 268
        }, {"country": "SaintVincentAndTheGrenadines", "code": 1}, {
            "country": "Samoa",
            "code": 685
        }, {"country": "SouthAfrica", "code": 27}, {
            "country": "TheDemocraticRepublicOfCongo",
            "code": 243
        }, {"country": "TurksAndCaicosIslands", "code": 1}, {"country": "Togo", "code": 228}, {
            "country": "Thailand",
            "code": 66
        }, {"country": "Tajikistan", "code": 992}, {"country": "Tokelau", "code": 690}, {
            "country": "Timor-Leste",
            "code": 670
        }, {"country": "Turkmenistan", "code": 993}, {"country": "Tunisia", "code": 216}, {
            "country": "Tonga",
            "code": 676
        }, {"country": "Turkey", "code": 90}, {"country": "TrinidadandTobago", "code": 1}, {
            "country": "Tuvalu",
            "code": 688
        }, {"country": "Taiwan", "code": 886}, {"country": "Tanzania", "code": 255}, {
            "country": "UnitedArabEmirates",
            "code": 971
        }, {"country": "UnitedKingdom", "code": 44}, {"country": "Ukraine", "code": 380}, {
            "country": "Uganda",
            "code": 256
        }, {"country": "UnitedStates", "code": 1}, {"country": "Uruguay", "code": 598}, {
            "country": "Uzbekistan",
            "code": 998
        }, {"country": "U.S.VirginIslands", "code": 1}, {"country": "Vatican", "code": 379}, {
            "country": "Venezuela",
            "code": 58
        }, {"country": "Vietnam", "code": 84}, {"country": "Vanuatu", "code": 678}, {
            "country": "WesternSahara",
            "code": 212
        }, {"country": "WallisAndFutuna", "code": 681}, {"country": "Yemen", "code": 967}, {
            "country": "Zambia",
            "code": 260
        }, {"country": "Zimbabwe", "code": 263}];
    };
