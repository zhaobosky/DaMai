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