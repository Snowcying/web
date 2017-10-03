var share=document.getElementById('share'),
	hide=document.getElementById('hide');
	
var timer=null;
window.onload=function()
{
	hide.onmouseover=function()
	{
//		console.log(hide.offsetLeft);
		speedmove(0);
	}
	hide.onmouseout=function()
	{
		speedmove(-130);
	}
	
	
}

function speedmove(target)
{
	var speed=0;
	clearInterval(timer);
	timer=setInterval(function()
	{
		speed=(target-hide.offsetLeft)/10;
		if(speed>0)
		{
			speed=Math.ceil(speed);
		}
		else
		{
			speed=Math.floor(speed);
		}
		if(hide.offsetLeft==target)
		{
			clearInterval(timer);
		}
		else
		{			
			hide.style.left=hide.offsetLeft+speed+'px';
		}
	},30)
}

function getStyle(obj,str)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[str];
	}
	else
	{
		return obj.getComputedStyle(str,false)[str];
	}
}
