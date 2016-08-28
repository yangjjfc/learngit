$(function(){
	//header 城市
	$(".citys").hover(function(){
		$(this).addClass("hover")
		$(this).children("span").html("∧")
		$(".deliver-address").css("display","block")
	},function(){
		$(this).removeClass("hover")
		$(this).children("span").html("∨")
		$(".deliver-address").css("display","none")
	})
	
	$(".deliver-address li").hover(function(){

		$(this).addClass("hover2")
	},
	function(){

		$(this).removeClass("hover2")
	}).click(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		var cityName = $(this).children(0).html()
		$(".citys b").html(cityName+"")
	})
	
	//header 导航条li
	$(".header_tr ul").children("li").not("huawei").hover(function(){
		$(this).addClass("hover3").children("span").html("∧")
		$(this).children(".shop").css("display","block")
	},function(){
		$(this).removeClass("hover3").children("span").html("∨")
		$(this).children(".shop").css("display","none")
		$(".shop").not(".weixing").children("li").removeClass("hover4")
	})
	
	$(".shop").not(".weixing").children("li").mouseover(function(){
		
		$(this).addClass("hover4").siblings().removeClass("hover4");
		
	})
	
	
	//header_b 按钮框事件
	$(".SP").hover(function(){
		$(this).children("ul").css("display","block").end().children("img").attr("src","images/h6.png")
		
	},function(){
		$(this).children("ul").css("display","none").end().children("img").attr("src","images/h4.png")
		
	})
	$(".SP").children("ul").children("li").hover(function(){
		$(this).addClass("hover5").siblings().removeClass("hover5")
	},function(){
		$(this).removeClass("hover5")
	})
		
	//header_b 购物车事件
	$(".cart").hover(function(){
		$(this).children("img").attr("src","images/gw4.png");
		$(".cartlist").css("display","block");
	},function(){
		$(this).children("img").attr("src","images/gw.png");
		$(".cartlist").css("display","none");
	})
	
	$(".btn1").hover(function(){
		
		$(this).addClass("hover6");
	},function(){
		
		$(this).removeClass("hover6");
	})
	
	
	//nav 导航条事件
	$(".nav_hot").hover(function(){
		$(this).children("div").css("display","block");
	},function(){
		$(this).children("div").css("display","none");
	})
	
	//banner 图片效果
	
	fnbanner()	;
		
	//goods_tl 事件	
	fungoods_tl();	
	
	
	
	
	//侧边栏购物车事件
	fnshop()
	
	//登入界面的规范
	fnsubmit()
	
	//回到顶部
	fnTop()
	
	//获取用户名
	fnusername()

})
//banner 图片效果函数
function fnbanner(){
		var timer1;
		var $index=0;
		
		function fn1(){
			timer1= setInterval(fnb,3000)
		}
		fn1();
		function fnb(){
			$index++;
			if($index==5){
				$index=0;
			}
			$(".banner").children("ul").children("li").eq($index+"").fadeIn(500).siblings().css("display","none")	
			$(".banner_b").children("a").eq($index+"").addClass("banner_sa").siblings().removeClass("banner_sa")
		}
		$(".banner_b").children("a").click(function(){
			$index = $(this).index()-1
			fnb()
			clearInterval(timer1);
			fn1();
		})
		
	}

//goods_tl 事件	
function fungoods_tl(){
	var $index=1;
	var ur="ajax/goods_list"+$index+".txt"
	var createLi
	function ajaxDY(){
		$(".goods_list").html("");
		var ajaxjson = {
				url: ur,
				success:function(data){
					var datajson= eval("("+data+")")
					
					for(var a in datajson){
						
						 createLi ="<li><img src='"+datajson[a].src+"' /><p><a href='#'>"+datajson[a].content+"</a></p><h4>商城价：<em>"+datajson[a].prise+"</em></h4></li>"
						$(".goods_list").append(createLi);
						
					}
					$(".goods_list").children().last().css("border","0")
				},
				error:function(){
					console.log("获取失败")
				},
				dataType:"html"
				
			}
			$.ajax(ajaxjson);	
			
		
	}
	ajaxDY();
	
	$(".goods_t_nav").children("li").on("mouseover",function(){
		if($index !=$(this).index()+1){
		$index = $(this).index()+1;
		ur="ajax/goods_list"+$index+".txt";
		$(".goods_list").html("");
		ajaxDY();
		}
	})
	
}





//购物车
function fnshop(){
	var setoFF = false
	$(".side1_f2").on("click",function(){
		
		if(setoFF == false){
			
			$(".shop_gw").stop().animate({left:"-210px"},500)
			setoFF = true;
		}else{
			
			$(".shop_gw").stop().animate({left:"0px"},500)
			setoFF = false;
		}
		
		
	})
	$(".shop_gw").children("h1").children().on("click",function(){
		
		$(".shop_gw").stop().animate({left:"0px"},500)
			setoFF = false;
		
	})
}


//会员登入
function fnsubmit(){
	var onOff = false;

	fnsubmit2()
	
	
	
	
	$(".side1_f1").hover(function(){
		if(onOff ==false){
			
				$(this).children("a").css("background","url(images/s1.png) no-repeat");
				$(".side1_f1_fir").css("display","block");
			
		}
	
		
	},function(){
		if(onOff ==false){
			
			$(this).children("a").css("background","url(images/s10.png) no-repeat");
			$(".side1_f1_fir").css("display","none");
		}
		
		
	})
	.on("click",function(event){
		
		if(onOff ==false){
			
			$(this).children("a").css("background","url(images/s18.png) no-repeat");
			$(".side1_f1_last").css("display","block");
			onOff=true;
		}else{
			
			$(this).children("a").css("background","url(images/s1.png) no-repeat");
			$(".side1_f1_last").css("display","none");
			onOff=false;
		}
		
		
	})
	$(".side1_f1_last").on("click hover",function(event){
		
		event.stopPropagation();
		
		
	}).children("a").click(function(event){
		
		$(this).parent().css("display","none")
		$(".side1_f1").children("a").css("background","url(images/s10.png) no-repeat");
		onOff=false;
		return false;
	})
	
}

//回到顶部
function fnTop(){
	
	$(".side1_b").hover(function(){
		
		$(this).children("a").css("background","url(images/s5.png) no-repeat")
		$(".side1_b_fir").css("display","block")
		
	},function(){
		
		$(this).children("a").css("background","url(images/s3.png) no-repeat")
		$(".side1_b_fir").css("display","none")
	}).click(function(){
		
		$("body,html").animate({scrollTop: 0},500)
		
	})
	
}


function fnusername(onOf){




			var uesename = getCookie("username")
			if(uesename.length>0){



				$("#us_p1").css("display","none")
				$("#us_p2").css("display","inline")
				$("#username").html(uesename.split("||")[0])
			}





	$("#leave").click(function(){

		$("#us_p2").css("display","none")
		$("#us_p1").css("display","inline")
		$("#username").html("")
		setCookie("username",1,-1);

	})
	
	
	
}







function yzm(){
        var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
        var str = '';
        for(var i = 0 ; i < 4 ; i ++ ){
        	
        	 str += ''+arr[Math.floor(Math.random() * arr.length)];
        }
           
        return str;
    }


