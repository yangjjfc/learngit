/**
 * Created by admin1111 on 2016/6/23.
 */

$(function(){

    getshopxqajax()

})

function getshopxqajax(){

    var shopxqajax = {

        url:"ajax/shopxq.json",
        success:fnsucce,
        error:function(){
            console.log("获取失败")
        },
        dataType:"json"

    }

    $.ajax(shopxqajax) ;


}


function fnsucce(data){
    var pid1 = linka()
    for(var i=0;i<data.length;i++) {
        if (data[i].ppid == pid1) {
            if(data[i].length==6){

                cershopxq(data[i].ppid,data[i].Headname, data[i].shopname, data[i].url, data[i].scprice, data[i].shopprice)

            }else{

                cershopxq(data[i].ppid,data[i].Headname, data[i].shopname, data[i].url, data[i].scprice, data[i].shopprice, data[i].sp1, data[i].type, data[i].sp2, data[i].size)

            }

        }
    }
}


function cershopxq(ppid,Headname,shopname,url,scprice,shopprice,sp1,type,sp2,size){

        var html = "<h4>"+Headname+"</h4>"
        html +=    "<div class=\"shopxq_t\">"
        html +=    "<div class=\"shopxq_t_img\">"
        html +=    "<div class=\"shopxq_t_img_s\">"
        html +=    "<img src=\""+url.url_1+"\" />"
        html +=    "<div id=\"shopxq_t_m_fdj\"></div>"
        html +=    "<div id=\"zoom\"><img id=\"zoom_img\"  src=\""+url.url_1+"\" /></div>"
        html +=    "</div>"

        html +=    "<div class=\"shopxq_t_s\">"
        html +=    "<div id=\"shopxq_t_s\">"
        html +=    "<a href=\"javascript:void(0)\" id=\"shopxq_t_s_btn1\"><</a>"
        html +=    "<a href=\"javascript:void(0)\" id=\"shopxq_t_s_btn2\">></a>"
        html +=    "<ul id=\"ul_list\">"

                    for(var attr in url){

                        html +=    "<li><img src=\""+url[attr]+"\" /></li>"


                    }




        html +=    "</ul>"
        html +=    "</div>"
        html +=    "<p><span>收藏商品(0)</span><em>举报</em></p>"
        html +=    "</div>"
        html +=    "</div>"
        html +=    "<div class=\"shopxq_t_m\">"
        html +=    "<h1 name=\"k1\" ppid=\""+ppid+"\">"+shopname+"</h1>"
        html +=    "<div class=\"shopxq_t_m_prise\">"
        html +=    "<p>市 场 价： <em>"+scprice+"</em></p>"
        html +=    "<p>商 城 价： <b>"+shopprice+"</b></p>"
        html +=    "<div class=\"pf\">"
        html +=    "<p><a href=\"#\">商品评分</a></p>"
        html +=    "<img src=\"ajax/img3/x2.png\"/><img src=\"ajax/img3/x2.png\"/><img src=\"ajax/img3/x2.png\"/><img src=\"ajax/img3/x2.png\"/><img src=\"ajax/img3/x2.png\"/>"
        html +=    "</div>"
        html +=    "</div>"
        html +=    "<div class=\"shopxq_t_m_ys\">至　<span>全国 </span>：<em>卖家承担运费</em></div>"
        html +=    "<div class=\"shopxq_t_m_co\">"
    if(sp1){

        html +=    "<dl class=\"shopxq_t_m_co_1\">"
        html +=    "<dt>"+sp1+"：</dt>"

        for(var attr in type){


            html +=    "<dd class=\"shopxq_t_m_dd shop_1 shop_btn1\"><img src=\""+type[attr].type1_smimg+"\"/>"+type[attr].type2_f+"</dd>"

        }


        html +=    "</dl>"
        html +=    "<dl class=\"shopxq_t_m_co_2\">"
        html +=    "<dt>"+sp2+"：</dt>"


        for(var attr in size){

            html +=    "<dd class=\"shopxq_t_m_dd shop_1 shop_btn2\" pid=\""+size[attr].pid+"\">"+size[attr].size_1+"</dd>"

        }




        html +=    "</dl >"

    }

        html +=    "<dl class=\"shopxq_t_m_co_3\">"
        html +=    "<dt>购买数量：</dt>"
        html +=    "<dd id=\"ts_d\" >1</dd>"
        html +=    "<dd id=\"ts\">"
        html +=    "<a href=\"javascript:void(0)\" class=\"shopxq_t_m_co_3_j shopxq_t_m_dd\">+</a>"
        html +=    "<a href=\"javascript:void(0)\" class=\"shopxq_t_m_co_3_j shopxq_t_m_dd\">-</a>"
        html +=    "</dd>"
        html +=    "<p >(当前库存<span>100</span>件 )</p>"
        html +=     "</dl>"
        html +=     "<div class=\"shopxq_t_m_co_s\">已选择 <span>D135</span>，<b>双人少发</b></div>"
        html +=     "<a  id=\"shopxq_t_m_btn1\" href=\"javascript:void(0)\"></a>"
        html +=     "<a  id=\"shopxq_t_m_btn2\" href=\"javascript:void(0)\"></a>"
        html +=     "</div>"

        html +=     "</div>"
        html +=     "<div class=\"shopxq_t_r\"></div>"
        html +=     "</div>"




        $(".shopxq").html(html)

        fnglass();
        leiji2();


        gwsset();

    //页面加载时，调用。更新购物车数量
        updateCart();

         
}
