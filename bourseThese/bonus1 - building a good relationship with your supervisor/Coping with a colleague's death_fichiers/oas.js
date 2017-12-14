
// From the first inline OAS script
	function OAS_NORMAL(pos) {
	document.write('<A HREF="' + OAS_url + 'click_nx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '!' + pos + '?' + OAS_query + '" TARGET=' + OAS_target + '>'); 
	document.write('<IMG SRC="' + OAS_url + 'adstream_nx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '!' + pos + '?' + OAS_query + '" BORDER=0></A>'); 
	}
	
// Second inline script*/

 OAS_version = 11;   
if ((navigator.userAgent.indexOf('Mozilla/3') != -1) || (navigator.userAgent.indexOf('Mozilla/4.0 WebTV') != -1))  
 OAS_version = 10; 
if (OAS_version >= 11) 
document.write('<SCR' + 'IPT LANGUAGE=JavaScript1.1 SRC="' + OAS_url + 'adstream_mjx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '?' + OAS_query + '"><\/SCRIPT>');


// Third inline script*/

 document.write('');  
function OAS_AD(pos) {  
if (OAS_version >= 11)  
 OAS_RICH(pos);  
else 
 OAS_NORMAL(pos);  
}