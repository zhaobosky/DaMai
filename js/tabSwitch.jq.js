
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