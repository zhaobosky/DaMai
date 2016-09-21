// 巡演动态
// JQ动画方法
// $(function(){
// 	$(".shows .showsL .sel").mouseover(function(){
// 		$(this).children(".fly").animate({"bottom":"0"} , 200,"swing");
// 	})
// })
// $(function(){
// 	$(".shows .showsL .sel").mouseleave(function(){
// 		$(this).children(".fly").stop().animate({"bottom":"-100%"}, 200 ,"swing");
// 		var that = this;
// 		setTimeout(function(){
// 			//console.log($(that).children(".fly"));
// 			$(that).children(".fly").css({"bottom":"100%"})	
// 		},210);
// 	})
// })
// CSS过渡动画方法
$(function(){
	$(".shows .sel").mouseover(function(){
		$(this).children(".fly").css({"bottom":"0"})
	}).mouseleave(function(){
		$(this).children(".fly").css({"bottom":"-100%"});
		// .queue(function(){
		// 	//console.log(1);
		// 	$(this).css({"display":"none","bottom":"100%"}).dequeue();
		// }).queue(function(){
		// 	//console.log(2);
		// 	$(this).css({"display":"block"}).dequeue();
		// })
		var that = this;
		// if($(this).children(".fly").is(":animated")){
		// 	console.log(1);
		// 	$(this).children(".fly").css({"display":"none","bottom":"100%"})
		// }
		setTimeout(function(){
			//console.log(1)
			// $(that).children(".fly").style.transition = "";
			$(that).children(".fly").css({"display":"none","bottom":"100%"})
			// 
		},400)
		setTimeout(function(){
			//console.log(2)
			// $(that).children(".fly").style.transition = "";
			$(that).children(".fly").css({"display":"block"});
			// .css({"display":"block"})
		},450)
	})
})
// 城市演出切换
$(function(){
	$(".allItem .cit").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
})
// 公共模块中部小星星控制
$(function(){
	for(var i = 0 ; i< $(".pot .star").length ; i++){
		var width = $(".pot .star").eq(i).parent().text();
		// console.log($($(".pot .star")[i]),parseInt(width));
		$($(".pot .star")[i]).children(".active").css({"width":parseInt(width)*9+"px"})
		
	}
})