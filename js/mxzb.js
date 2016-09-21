;(function($){
	// 左侧menu start
	function MenuControl (controlEleName){
		this.$controlEle = $("#"+controlEleName);
		this.$citms = $("#"+controlEleName+" li");
		this.init();
	}
	MenuControl.prototype.init = function(){

			this.$citms.mouseenter(function(){
				$(this).addClass('active').siblings().removeClass('active');
			}).mouseleave(function(){
				$(this).removeClass('active');
			});

	};
	window.MenuControl = MenuControl;
})(jQuery)



// 左侧menu end

;(function($){
	// 轮播图 start
	function SlideControl (controlEleName){
		this.$controlEle = $("#"+controlEleName);
		this.$ulLis = $("#" + controlEleName + " ul" + " li");
		this.$olLis = $("#" + controlEleName + " ol" + " li");
		this.index = 0;
		this.changeTimer = null;
		this.init();
	}

	SlideControl.prototype.init = function(){
		var that = this;
		this.change();
		this.$olLis.mouseenter(function(){
			clearInterval(that.changeTimer);
			that.setIndex($(this).index());
			that.show();
		}).mouseleave(function(){
			that.change();
		});
		this.$ulLis.mouseenter(function(){
			clearInterval(that.changeTimer);
		}).mouseleave(function(){
			that.change();
		});
	};
	SlideControl.prototype.setIndex = function(index){
		this.index = index;
	};
	SlideControl.prototype.show = function() {
		this.$ulLis.stop();
		//this.ulLis.eq(this.index).siblings().fadeOut(300).end().stop().fadeIn(500);
		this.$ulLis.eq(this.index).addClass('active').siblings().removeClass('active');

		this.$olLis.eq(this.index).addClass('active').siblings().removeClass('active');
	};
	SlideControl.prototype.change = function() {
		var that = this;
		this.changeTimer = setInterval(function(){
			that.setIndex(that.index+1);
			if(that.index > 7)
				that.setIndex(0);
			that.show();
		},3000);
	};

	window.SlideControl = SlideControl;
})(jQuery)



;(function($){
	//子轮播图 start
	function SubSlideControl(controlEleName){
		this.$controlEle = $("#"+controlEleName);
		this.$prevBtn = $("#"+controlEleName+" .prev");
		this.$nextBtn = $("#"+controlEleName+" .next");
		this.$ul = $("#" + controlEleName + " ul");
		this.$ulLis = $("#" + controlEleName + " ul" + " li");
		this.dis = this.$ulLis[0].offsetWidth;
		this.index = 4;
		this.changeTimer = null;

		this.init();
	}

	SubSlideControl.prototype.init = function(){
		var that = this;
		this.$nextBtn.click(function(){

			that.show(that.index+1);
		});
		this.$prevBtn.click(function(){
			that.show(that.index-1);
		});
	}

	SubSlideControl.prototype.show = function(index){
		if(this.$ul.is(":animated")){
			return;
		}
		this.index = index;

		if (this.index>14) {
			this.index = 5;
			this.$ul.css("left","-"+this.dis*(this.index-1)+"px");
		}else if (this.index<0) {
			this.index = 9;
			this.$ul.css("left","-"+this.dis*(this.index+1)+"px");
		}

		this.$ul.animate({left:"-"+this.dis*this.index},1000);	
		
	}
	window.SubSlideControl = SubSlideControl;
})(jQuery)



// 子轮播图 end
// tab选项卡 start
;(function($){


	function TabSwitch(tabName) {
		this.$tab = $("#"+tabName);
		this.$tabBoxLis = $("#"+tabName+" .tab-box li");
		this.$tabContentLis = $("#"+tabName+" .tab-content-list .tab-content-item");
		this.init();
	}
	TabSwitch.prototype.init = function(){
		var that = this;
		this.$tabBoxLis.click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			that.$tabContentLis.eq($(this).index()).addClass("active").siblings().removeClass("active");
		});
	}
	window.TabSwitch = TabSwitch;
})(jQuery)


// tab选项卡 end