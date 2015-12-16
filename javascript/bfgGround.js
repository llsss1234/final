
function foreground()
{
	fg.style.left = parseInt(fg.style.left) - gs.scrollSpeed;

	if(parseInt(fg.style.left)< -(fg.width/2))
	{
		fg.style.left = 0;
	}
	
	fg.style.clip = genRect(0,gs.viewWidth - parseInt(fg.style.left),gs.viewHeight, -parseInt(fg.style.left));		
		
	return fg.style.left;
}

function background()
{
	bg.style.left = parseInt(bg.style.left) - gs.scrollSpeed/10;
	
	if(parseInt(bg.style.left)< -(bg.width/2))
	{
		bg.style.left = 0;
	}
	
	bg.style.clip = genRect(0,gs.viewWidth - parseInt(bg.style.left),gs.viewHeight, -parseInt(bg.style.left));	
	return bg.style.clip;
}