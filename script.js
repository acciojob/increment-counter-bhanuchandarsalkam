//your JS code here. If required.
var a=0;
function get(){
	a=a+1;
	alert(a);
	document.getElementById("counter").innerText=a;
}
const btn=document.getElementById("incrementBtn");
btn.addEventListener("click",get);