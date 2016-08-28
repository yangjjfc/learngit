$(function(){
	//用户登入
	fnsubmit2()
	
	//注册账户1
	register1()
	
	//注册账户2
	register2()
	
	
	//导航条
	nav1()
	
	
	//地域
	fnarea()
	//商品详情
	menu_lists()
	
	
	Record()
	
	
	
	/*//放大镜
	fnglass()*/
	
	
	leiji2()
})





//用户登入
function fnsubmit2(){
	
	uesename = getCookie("username2")

	if(uesename.length>0){

		var yhm = uesename.split("||")
		
		
		$(".text1").val(yhm[0])
	}
	
	var onOff = false;
	
	$(".btn3").on("click",function(){
		var a = 1
		var b = 1
		var c = 1
		if($(".text1").val().length<=0){
			
			$(this).parent().find("p").eq(0).html("账号不能为空")
			a=0;
		}
		if($(".text2").val().length<=0){
			
			$(this).parent().find("p").eq(1).html("密码不能为空")
			b=0
		}
		if($(".text3").val().length<=0){
			
			$(this).parent().find("p").eq(2).html("请输入验证码")
			c=0
		}
		if(a&&b&&c){
			//var onOff = "true";
			if($(".text1").val() == yhm[0]&&$(".text2").val() == yhm[1] ){

				setCookie("username",$(".text1").val(),30);
				window.location.href="index.html"
			}else{

				$(".text1").parent().find("p").eq(0).html("用户名或密码不正确")
			}


			//fnusername(onOff)
		}
	
	})
	$(".btn1").parent().find("input:lt(3)").on("blur",function(){
		
		if($(".text1").val().length>0){
			
			$(this).parent().find("p").eq(0).html("")
			
		}
		
		if($(".text2").val().length>0){
			
			$(this).parent().find("p").eq(1).html("")
			
		}
		if($(".text3").val().length>0){
			
			
			$(this).parent().find("p").eq(2).html("")
		}
	
	})
	
	

	
}

//注册账户1
function register1(){
	var onOff_img =false //图片开关
	var onOff = false;  //密码开关
	var onOff_s = false; //验证码开关
	var re=/^1[3|4|5|7|8]\d{9}$/  //创建手机号的正则表达式
	 
	//验证手机号事件
	$(".text4").keydown(function(){
		
		$(".text4").blur(function(){
			var oTxt = $(".text4").val()
			if(re.test(oTxt)&&oTxt.length ==11){
				
				
				$(this).next().html("");
				 onOff = true;
			}else{
				$(this).next().html("请输入11位正确手机号码");
				
				  onOff = false;
			}
		})
	})
	
	//验证码失去焦点事件
	$(".text5").blur(function(){
			var oTxt = $(this).val()
			if(oTxt.length >0 ){
				
				$(this).siblings("p").eq(1).html("");
				
				
			}
		})
	
	//下一步按钮事件
	$("#btn4").on("click",function(){
		
		if($(".text5").val().length<=0){
			
			$(this).siblings("p").eq(1).html("手机验证码不能为空")
			onOff_s = false;
		}else{
				
				onOff_s = true;
				$(this).siblings("p").eq(1).html("");
		}
		//如果都通过，执行下一步
		if(onOff && onOff_img && onOff_s){
			
			$(".register_b_f1").css("display","none")
			$(".register_b_f2").css("display","block")
			$(".register_b_f2").find("span").eq(0).html($(".text4").val())
			$(".register_t").children().eq(1).addClass("register_secect")
		}
		
	})
	
	//同意协议按钮打钩切换
	$(".text6").children("img").on("click",function(){
		
		if(!onOff_img){
			
			$(this).attr("src","images/r3.png");
			onOff_img = true;
		}else{
			
			$(this).attr("src","images/r4.png");
			onOff_img = false;
		}
		
		
		
	})
	
	
}

//注册账户2
function register2(){
	var onOff =false //密码开关
	var onOff_s =false //按钮内判断 的开关
	
	//密码设置事件
	$(".text7").keydown(function(){
		
		$(".text7").eq(0).blur(function(){
			var oTxt = $(this).val()
			if(oTxt.length>=6 && oTxt.length<=16 ){
				
				
				$(this).next().html("");
				if($(".text7").eq(1).val().length>0){
					if($(".text7").eq(1).val() == $(this).val()){

						$(".text7").eq(1).next().html("")
						$(this).next().html("");
						onOff =true;
					}

				}else{

					onOff =true;
				}

			}else{
				$(this).next().html("请输入长度为6-16位的密码");
				onOff =false
			}
		})
		
		//密码确认事件
		$(".text7").eq(1).blur(function(){
			var oTxt = $(".text7").eq(0).val()
			if($(this).val() == oTxt){
				
				
				$(this).next().html("");
				onOff =true;
			}else{
				$(this).next().html("确认密码与密码不匹配");
				onOff =false
			}
		})
	})
	
	//下一步按钮事件
	$("#btn5").on("click",function(){
		//获取所有的input元素，然后遍历
		var obj = $(".text7")
		obj.each(function(){
			
			if($(this).val().length<=0){
				
				$(this).next().html("密码不能为空");
				onOff_s =false
				if($(this).index()==7){
					
					$(this).next().html("用户名不能为空");
					onOff_s =false
				}
			}else if($(".text7").eq(1).val() !=$(".text7").eq(0).val()&&$(".text7").eq(1).val().length>0&&$(".text7").eq(0).val().length>0){

				$(".text7").eq(1).next().html("确认密码与密码不匹配")
				onOff =false
			}else{
				
				$(this).next().html("");
				onOff_s =true;
			}
			
		})
		
		//开关都成立跳转
		if(onOff && onOff_s){
			var k = $("#name_use").val()+"||"+$("#password").val()

			setCookie("username",k,30);
			setCookie("username2",k,30);
			$(".register_b_f2").css("display","none")
			$(".register_b_f3").css("display","block")
			$(".register_t").children().eq(2).addClass("register_secect")
			
		}
		
	})
	
	
	
}

//导航条下拉
function nav1(){
	
	$(".nav_l").children("h2").hover(function(){
		
		$("#nav_list").css("display","block")
		
	},function(){
		
		$("#nav_list").css("display","none")
	})
	$("#nav_list").hover(function(){
		
		$(this).css("display","block")
		
	},function(){
		
		$(this).css("display","none")
	})	
}



function fnarea(){
	

	
	$("#area_p,#area").hover(function(){
		
		$("#area").css("display","block")
		
	},function(){
		
		$("#area").css("display","none")
	})
	
	$("#area").find("a").on("click",function(){
			
		$("#area_p").html($(this).html())
			
			
			
	})
		
	
}




//商品详情
function menu_lists(){
	
	
	var jsonajax = {
		url:"ajax/menu_r1.txt",
		success:function(data){
			console.log(data);
			for(var i in data){
				var k = parseInt(i/4)
				var p = i%4
				var newUl = "<ul style=\"left:"+((-4)+248*p)+"px;top:"+328*k+"px;\"\"><li><a href=\"shopxq2.html?ppid="+data[i].ppid+"\"><img src=\""+data[i].src+"\"/></a><a href=\"#\"><h3>"+data[i].content+"</h3></a><h4><b>"+data[i].prise+"</b>　　<span>"+data[i].prise_f+"</span></h4><p><span>"+data[i].inventory+"</span><em>"+data[i].area_s+"</em></p></li></ul>"
				
				$("#menu_list").append(newUl);
				
			}
			$("#menu_list").children().hover(function(){
				
				$(this).stop().animate({"backgroundColor":"#FF9900"},800);
				
			},function(){
				
				$(this).stop().animate({"backgroundColor":"#fff"},800);
			}
			)
			
			
		},
		error:function(){
			console.log("获取失败");
		},
		dataType:"json"
	};
	$.ajax(jsonajax);
	
	
	
	
	
}



//浏览记录
function Record(){
	var i = 0;
	$(".menu_l_m").hover(function(event){
		
		var height_1 = $(".ps-scrollbar-y-rail").height()/$(this).find("dl").get().length
		var height_2 = $(this).find("dl").get().length*$(this).find("dl").eq(0).outerHeight(true);
		var height_4 = $(".ps-scrollbar-y-rail").height()/($(".menu_l_m_c").height()/36-8);
		if(height_2<309){
			
			$(".ps-scrollbar-y").css("height",$(".ps-scrollbar-y-rail").height()+"px")
		}else{
			
			$(".ps-scrollbar-y").css("height",height_1)
		}
		
		$(".ps-scrollbar-y-rail").css("display","block")
		$(".menu_l_m").on("mousewheel DOMMouseScroll",function(e){
			if(height_2>309){
			var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
			var height_3 = parseInt($(".menu_l_m_c").css("top"))
			var height_5 = parseInt($(".ps-scrollbar-y").css("top"))
			 if (delta >0) {
		        // 向上滚
		      
		        var scroll_t =height_3+36
		        if(scroll_t<36){
		        	
		        	 $(".menu_l_m_c").css("top",scroll_t)
		        }
		       	 if(height_5-height_4>-height_4){
		       	
		       		$(".ps-scrollbar-y").css("top",height_5-height_4+"px")
		       }
		       
		        console.log("wheelup");
		    } else if (delta < 0) {
		        // 向下滚
		    
		        var scroll_t =height_3-36
		        if(Math.abs(scroll_t)<height_2-$(this).height()+30){
		        	
		        	 $(".menu_l_m_c").css("top",scroll_t)
		        	
		      		
		       	
		       		$(".ps-scrollbar-y").css("top",height_5+height_4+"px")
		       
		        
		        
		        }
		       
		      
		        
		     
		        console.log("wheeldown");
		    }
			
			}
			return false;
		})
		
		
	},function(){
		
		$(".ps-scrollbar-y-rail").css("display","none")
	})
	
	
	
	
	
}



//放大镜
function fnglass(){
	
	$("#ul_list").find("li").hover(function(){
		
		
		$(this).stop().animate({"border-color":"#FFA500"},500).children().stop().animate({"border-color":"#FFA500"},500)
		var url = $(this).children().attr("src")
		$(".shopxq_t_img_s").children("img").attr("src",url)
		$("#zoom_img").attr("src",url)
	},function(){
		
		
		
		$(this).stop().animate({"border-color":"#999"},500).children().stop().animate({"border-color":"#fff"},500)
		
	}
	
	
	)
	 
	
	$("#shopxq_t_s_btn1").click(function(){
		
		var left_s=parseInt($("#ul_list").css("left"))
		var width_s = $("#ul_list").children().eq(0).outerWidth(true)*($("#ul_list").children().get().length-5)
		if(left_s>-width_s){
			
			var i =left_s-65
			$("#ul_list").css("left",i+"px")
		}
		
		
		
		
		
		
	})
	$("#shopxq_t_s_btn2").click(function(){
		
		var left_s=parseInt($("#ul_list").css("left"))
		var width_s = $("#ul_list").children().eq(0).outerWidth(true)*($("#ul_list").children().get().length-5)
		
		if(left_s<0){
			
			var i =left_s+65
			$("#ul_list").css("left",i+"px")
		}
		
		
	})
	
	
	
	
	$(".shopxq_t_img_s").mousemove(function(ev){
		var minImgWidth =Math.floor($(this).width()) //图片大小
		var maxImgWidth =Math.floor($("#zoom_img").width()) //放大的图片大小
		var minImgHeight =Math.floor($(this).height())
		var maxImgHeight =Math.floor($("#zoom_img").height())
		var maxImgWidth_z =Math.floor($("#zoom").width()) //放大的div大小
		var maxImgHeight_z =Math.floor($("#zoom").height())
		var maxImgWidth_s =Math.floor($("#shopxq_t_m_fdj").width()) //透明图的大小
		var maxImgHeight_s =Math.floor($("#shopxq_t_m_fdj").height())
		
		
		var left = ev.pageX-$(this).offset().left
		var top = ev.pageY-$(this).offset().top
		
		
	
        
        var imgMarLeft_s=parseInt(left-maxImgWidth_s/2);
        var imgMarTop_s=parseInt(top-maxImgHeight_s/2);
		
		
		if(left<maxImgWidth_s/2){
			
			//left=0
			imgMarLeft_s=0
			
			
			
		}
		if(top<maxImgHeight_s/2){
			
			//top=0
			
			imgMarTop_s =0
		}
		if(minImgWidth-left<maxImgWidth_s/2){
			
			//right=0
			imgMarLeft_s = 209
			
		}
		if(minImgHeight-top<maxImgHeight_s/2){
			
			//bottom=0
			imgMarTop_s =195
			
		}
		
		$("#shopxq_t_m_fdj").css({"left":imgMarLeft_s+"px","top":imgMarTop_s+"px"})
		
		
		
		
		
		
		
		
		var imgLeft=Math.floor(left/minImgWidth*maxImgWidth);
        var imgTop=Math.floor(top/minImgHeight*maxImgHeight);
        
        var imgMarLeft=parseInt(-imgLeft+maxImgWidth_z/2);
        var imgMarTop=parseInt(-imgTop+maxImgHeight_z/2);
         //边界。上下左右
            //上边
            if(imgMarTop>0){
                imgMarTop=0;
            }
            //左边
            if(imgMarLeft>0){
                imgMarLeft=0;
            }
            //右边 200 大图的宽度-div的宽度
            if(imgMarLeft<-420){
                imgMarLeft=-420;
            }
            //下边 200  大图的宽度-div的宽度
            if(imgMarTop<-390){
                imgMarTop=-390;
            }
            
		$("#zoom_img").css({"left":imgMarLeft+"px","top":imgMarTop+"px"})
	}).hover(function(){
		
		$("#shopxq_t_m_fdj,#zoom").css("display","block")
		
	},function(){
		
		$("#shopxq_t_m_fdj,#zoom").css("display","none")
		
	})
	
}




//商品选择
function leiji2(){
	
	var k = 1
	$(".shopxq_t_m_co_3_j").click(function(){
		
		var i=$(this).index();
		if(i==0){
			
			k++
			if(k==100){
				
				k=1
			}
			
		}else{
			
			k--
			if(k==0){
				
				k=99
			}
		}
		
		$("#ts_d").html(k)
		
	})
	
	

	
		$(".shopxq_t_m_dd").hover(function(){
			
			$(this).css("border-color","#FFA500")
			
		},function(){
			if($(this).attr("onOff") !="true"){
				
				$(this).css("border-color","#f0f0f0")
			}
			
		})


	$(".shop_btn1").click(function(){

		if($(this).attr("onOff")=="true"){

			$(this).attr("onOff","false")
			$(this).css("background","#fff")
			$(this).css("border-color","#f0f0f0")


		}else{
			$(this).attr("onOff","true")
			$(this).css("background","url(images/btn3.png) no-repeat right bottom")
			$(this).css("border-color","#FFA500")
			if($(this).siblings().length>0){

				$(this).siblings().css({"background":"#fff","border-color":"#f0f0f0"}).attr("onOff","false")
			}

		}


	})

	$(".shop_btn2").click(function(){

		if($(this).attr("onOff")=="true"){

			$(this).attr("onOff","false")
			$(this).css("background","#fff")
			$(this).css("border-color","#f0f0f0")


		}else{
			$(this).attr("onOff","true")
			$(this).css("background","url(images/btn3.png) no-repeat right bottom")
			$(this).css("border-color","#FFA500")
			if($(this).siblings().length>0){

				$(this).siblings().css({"background":"#fff","border-color":"#f0f0f0"}).attr("onOff","false")
			}

		}


	})

	
	/*$(".shopxq_t_m_dd:lt(3)").click(function(){
		
		if($(this).attr("onOff")=="true"){
			
			$(this).attr("onOff","false")
			$(this).css("background","#fff")
			$(this).css("border-color","#f0f0f0")
			
			
		}else{
			$(this).attr("onOff","true")
			$(this).css("background","url(images/btn3.png) no-repeat right bottom")
			$(this).css("border-color","#FFA500")
			if($(this).index()==1){
				
				$(".shopxq_t_m_dd:lt(3)").eq(2).css({"background":"#fff","border-color":"#f0f0f0"}).attr("onOff","false")
			}
			if($(this).index()==2){
				
				$(".shopxq_t_m_dd:lt(3)").eq(1).css({"background":"#fff","border-color":"#f0f0f0"}).attr("onOff","false")
			}
		}
		
	})*/
}



