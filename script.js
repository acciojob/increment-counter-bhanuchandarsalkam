//your JS code here. If required.
var a=0;
function get(){
	
	alert(a);
	a=a+1;
	document.getElementById("counter").innerText=a;
}
const btn=document.getElementById("incrementBtn");
btn.addEventListener("click",get);