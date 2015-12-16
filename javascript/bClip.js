function createbClip(index)
{
	var newbClip = {id: gs.bClipNum, status: 0}
	gs.bClipList.push(newbClip);
	gs.bClipNum++;

	var bClip = document.createElement('img');

	bClip.style.position = 'absolute';
	bClip.style.left = Math.random() * (gs.bClipRightLimit - gs.bClipLeftLimit);
	bClip.style.top = gs.bClipStarting + bClip.height;
	
	bClip.style.zIndex = index;
	bClip.src = "bClip.png";
	bClip.setAttribute('id', 'bClip' + newbClip.id);
	document.body.appendChild(bClip);
}



function clearbClip()
{
	for(var i=0;i<gs.bClipList.length;i++)
	{
		var bClip = document.getElementById('bClip'+gs.bClipList[i].id);
		if(bClip != null)
		{
			document.body.removeChild(bClip);
		}
	}

	gs.bClipList = new Array();
}