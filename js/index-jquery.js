// 城市切换模块
$(function(){
	$(".selected strong").click(function(){
		$(".citys h2").toggleClass("on");
	})
})
// 导航栏模块
$(function(){
	for(var i=1 ; i<=10 ; i++){
		// console.log(".b"+i,"-180px "+(-90-(i-1)*40)+"px");
		$(".b"+i).css("background-position","-175px "+(-90-(i-1)*40)+"px")
	}
})
//导航

//轮播图
//JQ方法轮播图
$(function(){
	// console.log($(".slideSmall").find("li"))
	var $slide = $(".slideMain"),
		$slideBig = $slide.find(".slideBig").find("li") ,
		$slideSmall = $slide.find(".slideSmall"),
		$slideNav = $slideSmall.children("li"),
		$btnL = $slide.find(".btnL"),
		$btnR = $slide.find(".btnR"),
		timer = null,
		turn = true,
		show = ["on","right1","right2","bei","bei","left1","left2"],
		show1 = ["on","","","","","",""];
		//console.log($slideNav,$(".slideBig li"));
//右侧按钮
	$btnR.click(function(){
		// 清除定时器
		// clearInterval(timer);
		//角标的工作
		if(turn){
			turn = false;
			setTimeout(function(){
				turn = true;
			} , 1000);
			show.unshift(show.pop());
			show1.unshift(show1.pop());
			for(var i = 0 ; i < $slideNav.length ; i++ ){
				$slideNav[i].className = show[i];
				$slideBig[i].className = show1[i];
			}
		}	
	})
//console.log($slideSmall,$btnL)
//左侧按钮
	$btnL.click(function(){	
		// clearInterval(timer);	
		if(turn){  
			turn = false;
			setTimeout(function(){
				turn = true;
			} , 1000);
			show.push(show.shift());
			show1.push(show1.shift());
			for(var i = 0 ; i < $slideNav.length ; i++ ){
				$slideNav[i].className = show[i]
				$slideBig[i].className = show1[i];
			}
		}
	})
	//console.log($slideNav[0]);
	// $slideNav[0].onclick = function(){
	// 	console.log(1)
	// }
	
	//点击下标时的动作
	for(var i = 0 ; i < $slideNav.length ; i++){
		//var $slideNav[i].reb = i ;
		// var arr =  ;
		//console.log($slideNav[i]);		
		$slideNav[i].onclick=function(){
			//console.log($slideNav);
			// 遍历$slideNav 放入数组
			///console.log(1);
			var index = $(this).index()
			//console.log($(this).index())
			var arr = [];
			for(var j = 0 ; j < $slideNav.length ; j++){
				arr[j] = $slideNav[j];
			}
			
			// 修改数组
			var arr1 = arr.splice(0,index);			
			arr = arr.concat(arr1);
			//console.log(arr)
			// 遍历数组放回$slideNav
			for(var k = 0 ; k < arr.length ; k++ ){
				$slideNav[k] = arr[k];
			}
			//console.log($slideNav)
			// 修改相关类名
			for(var n = 0; n < $slideNav.length ; n++){
				$slideNav[n].className = show[n]
			}
			$slideBig.eq(index).addClass("on").siblings().removeClass("on");
		}
	}
	// 自动轮播
	timer = setInterval(function(){
		$btnR.click();
	},3000);
	//
	// 鼠标悬停效果
	$(".slideMain").mouseover(function(){
		clearInterval(timer);
	})
	// 鼠标离开
	$(".slideMain").mouseleave(function(){
		timer;
	})
})
//面向对象方法轮播图
//每日推荐切换
$(function(){
	$(".suggest li.sug").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	// $(".suggest li").mouseleave(function(){
	// 	$(this).removeClass("on");
	// })
})


//公共部分右侧选项卡
$(function(){
	$(".com-tab .list").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on")
	})
})
// 固定侧边栏背景图片
$(function(){
	for(var i=0 ; i<12 ; i++){
		// console.log(".b"+i,"-180px "+(-90-(i-1)*40)+"px");
		$("#sideBar ul li").eq(i).css("background-position","10px "+(8-(i-1)*36)+"px")
	}
})
// 侧边栏在鼠标经过时效果
$(function(){
	$("#sideBar ul li").mouseover(function(){
		$(this).addClass("on");
	}).mouseleave(function(){
		$(this).removeClass("on");
	})

})
// 侧边栏在鼠标滚动时效果
$(function(){
	//滚动条申明变量
	var $slideBar = $("#sideBar");
	var $lis =$slideBar.find("li");
	var lisTop = [$('.f1').offset().top  , $('.f2').offset().top, $('.f3').offset().top, $('.f4').offset().top, $('.f5').offset().top, $('.f6').offset().top, $('.f7').offset().top]
	//点击事件
	$lis.click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var index = $(this).index()-4;
		$("html,body").animate({'scrollTop':lisTop[index]}, 500);
	})
	$(".toTop").click(function(){
		$("html,body").animate({'scrollTop':0}, 500);
	})
	//滚动事件
	$(window).scroll(function(e){
		// 滚动时出现
		var winTop = $(window).scrollTop()
		if(winTop > 20){
			$("#sideBar").css("display","block")
		} else{
			$("#sideBar").css("display","none")
		}
		var index = 0 ;
		if(winTop <= lisTop[0]-100){
			index = -1 ;
			// for (var i = 0; i < $lis.length; i++) {
			// 	$lis[i].removeClass("on")
			// }
			// $lis.eq(index).addClass("").siblings().removeClass("");
		}else if(winTop <= lisTop[1]-100 && winTop > lisTop[0]-100){
			index = 0;
		}else if(winTop <= lisTop[2]-100 && winTop > lisTop[1]-100){
			index = 1;
		}else if(winTop <= lisTop[3]-100 && winTop > lisTop[2]-100){
			index = 2;
		}else if(winTop <= lisTop[4]-100 && winTop > lisTop[3]-100){
			index = 3;
		}else if(winTop <= lisTop[5]-100 && winTop > lisTop[4]-100){
			index = 4;
		}else if(winTop <= lisTop[6]-100 && winTop > lisTop[5]-100){
			index = 5;
		}else {
			index = 6;
		}


		if( index < 0 ){			
			$lis.eq(index+1).addClass("on").siblings().removeClass("on");
		}else{
			$lis.eq(index+4).addClass("on").siblings().removeClass("on");
		}
		
	})

})
