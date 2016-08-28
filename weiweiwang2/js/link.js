
function linka(){

    function UrlSearch()
    {
        var name,value;
        var str=location.href; //取得地址栏的url
        var num=str.indexOf("?");  //？ 的位置
        str=str.substr(num+1); //取得所有参数  获取？后面的url内容。
        var arr=str.split("&"); //各个参数放到数组里  ["pid=1"]
        for(var i=0;i < arr.length;i++){
            num=arr[i].indexOf("=");
            if(num>0){
                name=arr[i].substring(0,num);
                value=arr[i].substr(num+1);
                this[name]=value;
            }
        }
    }
    var request=new UrlSearch(); //实例化
    var pid=request.ppid;
    return pid ;

}

    //var name=request.name;
    //alert(name);
    /*$.ajax({
        url:"data/product.json",
        success:function(data){
            for(var i=0;i<data.length;i++){
                if(data[i].ppid==pid){
                    var html="<span>"+data[i].name+"</span>";
                    html+="<img src=\""+data[i].url+"\"/>"
                    $("div").html(html);
                }
            }
           /!* $.each(data,function(key,value){
                if(value.pid==pid){
                    var html="<span>"+value.name+"</span>";
                    html+="<img src=\""+value.url+"\"/>"
                    $("div").html(html);
                }
            });*!/
        },
        dataType:"json"
    })*/