//生成随机颜色
function randomColor(){
		var colors = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
		var R = Math.floor( Math.random()*(colors.length-1) );
		var G = Math.floor( Math.random()*(colors.length-1) );
		var B = Math.floor( Math.random()*(colors.length-1) );
		return '#'+colors[R]+colors[G]+colors[B];
		
}

function randomColor2(){
	//toString(16)先换算成16进制 在变成字符串
	var R = Math.floor(Math.random()*255).toString(16);//#0a1234
	var G = Math.floor(Math.random()*255).toString(16);
	var B = Math.floor(Math.random()*255).toString(16);
	
	return '#'+minTen2(R)+minTen2(G)+minTen2(B);
	
}
//小于10补0
function minTen2(m){
	return m.length == 1 ? "0" + m:m;
}


 function getRandomColor(){
        var str="000000"+Math.floor(Math.random()*0x1000000).toString(16);
        return "#"+str.substr(-6);
    }


