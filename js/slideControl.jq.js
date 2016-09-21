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

