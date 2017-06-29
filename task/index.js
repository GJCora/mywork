window.onload=function(){
	var oDiv=document.getElementById("box");
	document.onmousemove=function(evt){
		var e=evt||window.event;
		oDiv.style.display="block";
		oDiv.style.left=e.clientX+"px";
		oDiv.style.top=e.clientY+"px";
	}
}
