        $(function () {
            var curr = new Date().getFullYear();
            var opt = {

            }
            opt.date = {preset : 'date'};
	opt.datetime = { preset : 'datetime', minDate: new Date(2012,3,10,9,22), maxDate: new Date(2014,7,30,15,44), stepMinute: 5  };
	opt.time = {preset : 'time'};
	opt.tree_list = {preset : 'list', labels: ['Region', 'Country', 'City']};
	opt.image_text = {preset : 'list', labels: ['Cars']};
	opt.select = {preset : 'select'};
	<!--Script-->

            $('select.changes').bind('change', function() {
                var demo = "date";
                $(".demos").hide();
                if (!($("#demo_"+demo).length))
                    demo = 'default';

                $("#demo_" + demo).show();
                $('#test_'+demo).val('').scroller('destroy').scroller($.extend(opt["date"], { theme: "default", mode: "mixed", display: "modal", lang: "zh" }));
            });

            $('#demo').trigger('change');
        });
	//------------------

    //---------------------------------------------------------------------------
	function getToAge(){
		var dateVal = $("#test_default").val();
		var dateVals = ages(dateVal);
		$("#ageVal").val(dateVals);
	}
    //---------------------------------------------------------------------------
	  function ages(str)
	  {
			var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
			if(r==null)return   0;
			var d = new Date(r[1], r[3]-1, r[4]);
			if(d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4])
			{
				 var Y = new Date().getFullYear();
				 return((Y-r[1]));
			}
			return 0;
	  }

	  function registeremailsend(){
		//  var email = document.getElementById("email").value;
		//  doAjax("remailsend.php", {email:email}, function (emailsendmsg) {
		//	var obj = JSON.parse(emailsendmsg);
		//	if(obj.status==1){
		//		Phone_Verification();
		//	}else if(obj.status==2){
		//		//document.getElementById('email_error').style.display="block";
		//		document.getElementById('email_error').innerHTML = register_email;
		//		alert(register_email);
		//		return false;
		//	}
		//});
      Phone_Verification();
	  }
	function GetRequest() {
            var url = location.search; //获取url中"?"符后的字串
			var strfid="";
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                strs = str.split("&");
				strfid=strs[0];
            }
            return strfid;
        }
    //---------------------------------------------------------------------------
	 function registerajax(){
		 if(username=="" && gender==""){
			 username = document.getElementById("username").value;
			gender = document.getElementsByName("gender")[0].checked ? 1 : 2;
		 }
		var email_error=document.getElementById('email_error').innerHTML;
		var pass_error=document.getElementById('pass_error').innerHTML;
		var email = document.getElementById("email").value;
		var passwords = document.getElementById("password").value;
		var birthday = document.getElementById("test_default").value;
		//var code=document.getElementById("Verification_Code").value;
		//var Phones=document.getElementById("Phone_type").value;

		var friendName = GetUrlPara();
		var fid=GetRequest();
		if((email_error=="" &&pass_error=="") && (email!="" && passwords!="")){
      //注册
			doAjax("wap.php?c=passport", {username:username, email:email, password:passwords,  gender:gender, birthday:birthday}, function (msg) {
				//alert(msg);
				var obj = JSON.parse(msg);
				if(obj.status==1){
					setCookie("token",obj.token);
					clearInterval(timer);
					location.replace('homepage/index.php');
				//}else if(obj.status==2){
				//	alert(register_Verification);
				//	Verification_Code(Phones);
				//	document.getElementById("Verification_Code").value="";
				//	//window.location.reload();
				//}else if(obj.status==3){
				//	alert(register_Phone);
				//	Phone_Verification();
				//	document.getElementById("PhoneV").value="";
				//}else if(obj.status==4){
				//	alert(register_name);
				//	page_register();
				//}else if(obj.status==5){
				//	alert(logins2);
				//	page_register();
				//}else if(obj.status==6){
				//	alert(logins3);
				//	page_register();
				//}else if(obj.status==7){
				//	alert(register_sex);
				//	page_register();
				}
			});
		}else{
			alert(register_text);
		}
	}
var PhoneVerificationsend=function(){
	PhoneVs=document.getElementById("PhoneV").value;
	//if(PhoneVs){
	//	doAjax("PhoneVerification.php", { phone:PhoneVs, countryCode:Phonecountrykey}, function (msg) {
	//		var obj = JSON.parse(msg);
	//			//alert(msg);
	//			if(obj.status==1){
	//				seconds = 59;
	//				speed = 1000;
	//				Verification_Code(PhoneVs);
	//			}else if(obj.status==2){
	//				alert(register_Phone_cont);
	//				document.getElementById('PhoneV').innerHTML = register_Phone_v;
    //
	//			}
	//	});
	//}else{
	//	alert(register_Phone_em);
	//}
  Verification_Code(PhoneVs)
}

