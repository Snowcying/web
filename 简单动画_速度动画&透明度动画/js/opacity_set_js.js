var odiv1=document.getElementById('odiv1'),
	timer=null;

var preopacity=odiv1.style.opacity,
	test1=1;
	
var style=document.styleSheets[0];

var rule=style.rules ||CSSRule;


window.onload=function()
{
	odiv1.onmouseover=function()
	{
		setopacity(0.6);		
	}
	odiv1.onmouseout=function()
	{
		odiv1.style.opacity=preopacity;		
	}
	
}
//opacity 只支持单向赋值？

function setopacity(target)
{
	clearInterval(timer);
	var speed=0.01;
	var alpha=rule[0].style.opacity;
	timer=setInterval(function()
	{	
		if(alpha>target)
		{
			alpha=alpha-speed;
			odiv1.style.opacity=alpha;
		}
	},1)
}
