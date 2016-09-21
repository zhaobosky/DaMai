
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
