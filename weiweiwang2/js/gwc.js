$(function(){
	
	gwsset();

	//页面加载时，调用。更新购物车数量
	updateCart();

	gwcget();
	 
	
	 
})


function gwsset(){
	
	$("#shopxq_t_m_btn2").on("click",function(){
		var k = 1;
		var n = 1
		var pid
		var num=$("#ts_d").html()
		if($(".shop_1").length>0) {
			var color = $(".shop_btn1")
			color.each(function () {

				if ($(this).attr("onOff") == "true") {

					n = 2

				}


			})
			var obj = $(".shop_btn2")
			obj.each(function () {

				if ($(this).attr("onOff") == "true") {
					k = 2
					pid = $(this).attr("pid")

				}
			})
			if (k == 1 || n == 1) {
				return;
			}
		}else{

			pid = $(".shopxq_t_m>h1").attr("ppid")
		}
		//var name = $(".shopxq_t_m").children("h1").attr("name")
		var ppid = num+"&&"+pid
		//alert(ppid);
		setCartCookie(ppid);
		updateCart();
		$(".shop_list_xq").html("");
		$("#cartlist_m").html("");
		gwcget()
		
	});

}
 function setCartCookie(pid){
 	var a =1;
 	var ppid = pid.split("&&") 
 	var oldCartCookie=getCookie("ajaxcartcookie");
        if(oldCartCookie.length>0){
        	var arrProducts=oldCartCookie.split("||");
        	for(var i=0;i<arrProducts.length;i++){
        		var arrProductInfo = arrProducts[i].split("&&") 
            	var num_1 = arrProductInfo[0]
                var pid_1 = arrProductInfo[1];
                var name_1 = arrProductInfo[2];
        		if(ppid[1]==pid_1){
        			
        			arrProductInfo[0]=parseInt(ppid[0])+parseInt(num_1)+""
        			pid="";
        			/*if(a==2){
        				arrProducts[i-1]=arrProducts[i-1].split("||").pop().toString();
        				a=1
        			}*/
        			
        			arrProducts[i]=arrProductInfo.join("&&")
        			break;
        		}/*else if(ppid[2]==name_1){
        			a=2
        			ppid.push("1")
        			pid = ppid.join("&&") 
        			arrProducts[i]=arrProductInfo.join("&&")+"||"+pid
        			
        		}*/
        		else{
        			
        			arrProducts[i]=arrProductInfo.join("&&")
        		}
        	}
        	
        	
        	if(pid==""){
        		oldCartCookie=arrProducts.join("||")
        		var newCartCookie=oldCartCookie
        	}else{
        		
        		var newCartCookie=oldCartCookie+"||"+pid;
        	}
            
            setCookie("ajaxcartcookie",newCartCookie,30);
        }else{
            setCookie("ajaxcartcookie",pid,30);
     } 	
}
 
 function updateCart(){
 		var k=0
        //获取cookie；
        var productsCookie=getCookie("ajaxcartcookie");
        if(productsCookie.length>0){
            //如果cookie的长度大于领
            var arrProducts=productsCookie.split("||");
           for(var i=0;i<arrProducts.length;i++){
           		
           		 k += parseInt(arrProducts[i].split("&&")[0])
           		
           }
            $("#num,#num_2").html(k);
        }else{
			$("#num,#num_2").html(0);
		}
    }
    
function gwcget(){
	
	var ajaxjson={
		
		url:"ajax/gwc1.json",
		success:getCartCookie,
		error:function(){
			
			console.log("获取失败")
		}
		
		
	}
	
	$.getJSON(ajaxjson)

}




function getCartCookie(arrProductsAjax){
	
	var cartCookieString=getCookie("ajaxcartcookie");
        if(cartCookieString.length>0) {
            var arrProductsCookie = cartCookieString.split("||");
            
            for (var i = 0; i < arrProductsCookie.length; i++) {
				var arrProductInfo = arrProductsCookie[i].split("&&") 
            	var num = arrProductInfo[0]
                var pid = arrProductInfo[1];
                for(var j=0;j<arrProductsAjax.length;j++){
                    if(arrProductsAjax[j].pid==pid){
                    	
                    	 var oP=arrProductsAjax[j];
                    	
							if(oP.length==5){

								initProduct(oP.name, oP.price, oP.url, oP.pid,num,oP.Cshop);
								initProduct2(oP.name, oP.price, oP.url, oP.pid,num,oP.Cshop);
								initProduct3(oP.name, oP.price, oP.url, oP.pid,num,oP.Cshop);

							}else{

								initProduct(oP.name, oP.price, oP.url, oP.pid,num,oP.Cshop,oP.color,oP.size);
								initProduct2(oP.name, oP.price, oP.url, oP.pid,num,oP.Cshop,oP.color,oP.size);
								initProduct3(oP.name, oP.price, oP.url, oP.pid,num,oP.Cshop,oP.color,oP.size);

							}
                    		



                        
                    }
                }
            }
            leiji(arrProductsCookie)
            delect(arrProductsCookie);
			dele(arrProductsCookie);
			dele2(arrProductsCookie);
            zjg();
			zjs();
        }

}

 function initProduct(name,price,imgsrc,pid,num,Cshop,color,size){
 	var zj = parseFloat(price)*parseFloat(num);
 	var html = "<dl>"

 			html += "<dt>"+Cshop+"</dt>"

 		
 		html += "<dd><ul><li class=\"gwc_xq_m_1\"><input type=\"checkbox\" name=\"sp\"/></li><li class=\"gwc_xq_m_2\"><img src=\""+imgsrc+"\"/></li><li class=\"gwc_xq_m_3\" pid=\""+pid+"\">"+name+""
	 	if(color){
			html +=	""+color+" "+size+""
		}

	 	html +="</li><li class=\"gwc_xq_m_4\">"+price+"</li><li class=\"gwc_xq_m_5\"><button class=\"btn_10\">-</button><p>"+num+"</p><button class=\"btn_11\">+</button></li><li class=\"gwc_xq_m_6\">"+zj+"</li><li class=\"gwc_xq_m_7\"><a href=\"javascript:void(0)\" class=\"collect\">收藏</a><a href=\"javascript:void(0)\" class=\"delect\">删除</a></li></ul></dd>"
		
			
			html += "<dd class=\"gwc_xq_m_b\"><p>店铺合计：　　　　<b>"+zj+"</b>　　<span>元</span>　　</p></dd>"
				
	
		html +=	"</dl>"
 	
 		$(".gwc_xq_m").append(html)
 	
 		
 }

function initProduct2(name,price,imgsrc,pid,num,Cshop,color,size){
	$("#shop_list_d2").css("display","block");
	$(".shop_none").css("display","none");
	$(".shop_list_xq").css("display","block");
	var zj = parseFloat(price)*parseFloat(num);//总结
	var html ="<dl class=\"shop_list_1\" count=\""+zj+"\" pid=\""+pid+"\"><dt><img src=\""+imgsrc+"\"/></dt><dd><h3>"+name+"</h3><p><b>"+price+"</b> × <span>"+num+"</span></p></dd><div class=\"shop_list_del\">X<div></dl>"

	$(".shop_list_xq").append(html);
	settleaccounts ();


}

function initProduct3(name,price,imgsrc,pid,num,Cshop,color,size){

	$(".cartlist_b").find("p").css("display","block");
	var zj = parseFloat(price)*parseFloat(num);//总结
	var html ="<li class=\"cartlist_t1\" pid=\""+pid+"\" count=\""+zj+"\"><div class=\"cartlist_1\" ><a href=\"#\"><img src=\""+imgsrc+"\"></a></div><div class=\"cartlist_2\">"+name+"</div> <div class=\"cartlist_3\"><p><b>"+price+"</b>×<span class=\"num_js\">"+num+"</span></p><a href=\"javascript:void(0)\" class=\"cartlist_btn1\">删除</a></div> </li>"
	$("#cartlist_m").append(html);
	settleaccounts_2 ();


}




//侧边的删除
function dele(arrProductsCookie){

	$(".shop_list_1").hover(function(){

		$(this).stop().animate({"border-color":"#FFA500"},500);
		$(this).find(".shop_list_del").stop().animate({"backgroundColor":"#FFA500"},500);

	},function(){

		$(this).stop().animate({"border-color":"#FFF"},500);
		$(this).find(".shop_list_del").stop().animate({"backgroundColor":"#f0f0f0"},500);

	})
	$(".shop_list_del").click(function(){

		var a = $(this).parent().index();
		//alert(a)
		$(".cartlist_btn1").eq(a).parents(".cartlist_t1").remove();
		$(this).parent().remove();
		settleaccounts ();
		settleaccounts_2()
		for (var i = 0; i < arrProductsCookie.length; i++) {
			var arrProductInfo = arrProductsCookie[i].split("&&");
			var num = arrProductInfo[0];
			var pid = arrProductInfo[1];
			if ($(this).parent().attr("pid") == pid) {


				arrProductsCookie.splice(i, 1);
				break;


			}
		}
		setCookie("ajaxcartcookie",arrProductsCookie.join("||"),30);
		updateCart();
	})

}


//浮动购物车删除
function dele2(arrProductsCookie){


	$(".cartlist_btn1").click(function(){

		var a = $(this).parent().parent().index();
		//alert(a)
		$(this).parents(".cartlist_t1").remove();
		$(".shop_list_del").eq(a).parent().remove();
		settleaccounts ();
		settleaccounts_2()
		for (var i = 0; i < arrProductsCookie.length; i++) {
			var arrProductInfo = arrProductsCookie[i].split("&&");
			var num = arrProductInfo[0];
			var pid = arrProductInfo[1];
			if ($(this).parent().parent().attr("pid") == pid) {


				arrProductsCookie.splice(i, 1);
				break;


			}
		}
		setCookie("ajaxcartcookie",arrProductsCookie.join("||"),30);
		zjs();
		updateCart();
	})

}






//侧边总结
function settleaccounts (){

	if($(".shop_list_xq").children().length>0){
		var a = 0 ;
		var obj = $(".shop_list_1")
		obj.each(function(){
			console.log($(this).attr("count"))
			a += parseFloat($(this).attr("count"))

		})
		$("#shop_list_d2").find("b").html(a)
	}else{

		$("#shop_list_d2").find("b").html(0)
	}
}

function settleaccounts_2 (){

	if($("#cartlist_m").children().length>0){
		var a = 0 ;
		var obj = $(".cartlist_t1")
		obj.each(function(){
			console.log($(this).attr("count"))
			a += parseFloat($(this).attr("count"))

		})
		$(".cartlist_b").find("b").html(a)
	}else{

		$(".cartlist_b").find("b").html(0)
	}
}










//商品数量加减
function leiji(arrProductsCookie){
	
	//购物车减
	$(".btn_10").click(function(){
		
		
		var i = $(this).siblings("p").html()
		i--
		if(i==0){
			
			i=1
		}
		$(this).siblings("p").html(i)
		var price = parseFloat($(this).parent().siblings(".gwc_xq_m_4").html())
		var total_price = i*price;
		$(this).parents("dd").siblings(".gwc_xq_m_b").find("b").html(total_price);
		$(this).parent().siblings(".gwc_xq_m_6").html(total_price)
		for (var i = 0; i < arrProductsCookie.length; i++) {
				var arrProductInfo = arrProductsCookie[i].split("&&") 
            	var num = parseInt(arrProductInfo[0])  
                var pid = arrProductInfo[1];
		
				if($(this).parent().siblings(".gwc_xq_m_3").attr("pid")==pid){
					
					arrProductInfo[0] = (num-1)+"";
					arrProductsCookie[i] = arrProductInfo.join("&&")
					break;
				}
		}
		
		setCookie("ajaxcartcookie",arrProductsCookie.join("||"),30);
		zjg();
	})
	

	$(".btn_11").click(function(){
		
		
		var i = $(this).siblings("p").html()
		i++
		
		$(this).siblings("p").html(i)
		
		var price = parseFloat($(this).parent().siblings(".gwc_xq_m_4").html())
		var total_price = i*price
		$(this).parents("dd").siblings(".gwc_xq_m_b").find("b").html(total_price);
		$(this).parent().siblings(".gwc_xq_m_6").html(total_price)
		for (var i = 0; i < arrProductsCookie.length; i++) {
				var arrProductInfo = arrProductsCookie[i].split("&&") 
            	var num = parseInt(arrProductInfo[0])  
                var pid = arrProductInfo[1];
		
				if($(this).parent().siblings(".gwc_xq_m_3").attr("pid")==pid){
					
					arrProductInfo[0] = (num+1)+"";
					arrProductsCookie[i] = arrProductInfo.join("&&")
					break;
				}
		}
		
		setCookie("ajaxcartcookie",arrProductsCookie.join("||"),30);
		zjg();

	})

}

//商品总价格
function zjg(){
	var k=0
	var obj = $(".gwc_xq_m_b")
	
	obj.each(function(){
		console.log($(this).find("b").html())
	 k += parseInt($(this).find("b").html()) 
		
		
		
	})
	
	$("#gwc_xq_b").find("b").html(k)
	
}

function zjs(){
	var k=0
	var obj = $(".num_js")

	obj.each(function(){
		console.log($(this).html())
		k += parseInt($(this).html())



	})

	$("#shop_s").html(k)

}

//删除商品
function delect(arrProductsCookie){
	
	$(".delect").on("click",function(){
		
		
		
		$(this).parents("dl").remove()
	for (var i = 0; i < arrProductsCookie.length; i++) {
				var arrProductInfo = arrProductsCookie[i].split("&&") 
            	var num = arrProductInfo[0]
                var pid = arrProductInfo[1];
         if($(this).parent().siblings(".gwc_xq_m_3").attr("pid")==pid){
         	
         		
         		arrProductsCookie.splice(i,1);
         		break;
         		
         	
         }
         
       }
		zjg();
		setCookie("ajaxcartcookie",arrProductsCookie.join("||"),30);
	})
	
	
	
	
}




