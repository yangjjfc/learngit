$(function(){
	
		//楼梯事件
	funfloor();
	
})

//楼梯事件
function funfloor(){
	var onOff=false;
	var mark = 1;
	var $height = $(".content").children(".content_t").offset().top-$(".content").children(".content_t").height()
	$(window).scroll(function(){
		if(mark ==1){
				if($(window).scrollTop()>$height){
					//$(this).scrollTop($(".content").children(".content_t").offset().top-$(".content").children(".content_t").height()+"")
					if(onOff==false){
						$("#LoutiNav").css("display","block")
						$(this).scrollTop($height+86)
						onOff=true;
					}
					
				}else{
					if(onOff==true){
						
						$("#LoutiNav").css("display","none")
						onOff=false
					}
				}
		
				var $obj = $(".content").children(".content_F")
				$obj.each(function(){
					var $index = $(this).index()-1;
					var $height2 = $(this).offset().top;
					if($(window).scrollTop()<$height2){
						
						$("#LoutiNav").find("li").removeClass("selected2")
						$("#LoutiNav").find("li").eq($index).addClass("selected2");
						return false;
			
					}
					
				
				})
		}
		
	})
		$(".content_t").find("li").on("click",function(){
			//alert($(this).index())
			mark = 2;
			
			var $index = $(this).index();
			var $height3 = $(".content").children(".content_F").eq($index).offset().top-$(".content_t").height();
			$("body,html").animate({
					scrollTop: $height3
				},0, function() {
					$("#LoutiNav").find("li").removeClass("selected2")
					$("#LoutiNav").find("li").eq($index).addClass("selected2");
					mark = 1;
				}); 
			
			
		})
	

}