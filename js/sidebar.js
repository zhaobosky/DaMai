function sideBar(divId){
	var sideBar = document.querySelector(divId);
	var lis = sideBar.querySelectorAll(".side");
	var nav = sideBar.querySelectorAll(".sideNav");
	console.log(sideBar,lis,nav);
	console.log(window.scrollY)
	//鼠标经过时增加类
	this.hover();
	

}
sideBar.prototype.winScroll = function(){

}
sideBar.prototype.hover = function() {
	// body...
	console.log(1)
	// for(var i = 0 ; i < lis.length ; i++){
	// 	lis[i].classList.remove("on");
	// 	lis[i].addEventListener("mouseover" , function(){
	// 		this.classList.add("on")
	// 	})
	// }
}