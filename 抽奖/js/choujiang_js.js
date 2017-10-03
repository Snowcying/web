var datas=['iphone','三星笔记本','惠普电脑','1000代金券','谢谢惠顾'],
	timer=null;
var title=document.getElementById('title'),
	play=document.getElementById('play'),
	stop=document.getElementById('stop');

var btns=document.getElementById('btns');
var flag=0;

window.onload=function()
{

	play.onclick=begin_fun;
	stop.onclick=stop_fun;
//	if(play.onkeyup=='13')
//	{
//		begin_fun();
//	}
	
	document.onkeyup=function(event)
	{
		event=event || window.event;
		console.log(event.keyCode);
		
		if(event.keyCode==13||32)
		{
			if(flag==0)
			{
				begin_fun();
				flag=1;
			}
			else
			{
				stop_fun();
				flag=0;
			}
		}
	}
};

function begin_fun()
{
	clearInterval(timer);
	timer=setInterval(function()
	{
		var index=Math.floor(Math.random()*datas.length);
		title.innerHTML=datas[index];
	},50);
	play.style.background='#d2cdcd';
	flag=1;
};

function stop_fun()
{
	play.style.background='gray';
	window.clearInterval(timer); 
	flag=0;
}
