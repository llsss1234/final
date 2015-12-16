function createhClip(index)
{
	var newhClip = {id: gs.hClipNum, status: 0}
	gs.hClipList.push(newhClip);
	gs.hClipNum++;

	var hClip = document.createElement('img');

	hClip.style.position = 'absolute';
	hClip.style.left = Math.random() * (gs.hClipRightLimit - gs.hClipLeftLimit);
	hClip.style.top = gs.hClipStarting + hClip.height;
	
	hClip.style.zIndex = index;
	hClip.src = "hClip.png";
	hClip.setAttribute('id', 'hClip' + newhClip.id);
	document.body.appendChild(hClip);

}



function clearhClip()
{
	for(var i=0;i<gs.hClipList.length;i++)
	{
		var hClip = document.getElementById('hClip'+gs.hClipList[i].id);
		if(hClip != null)
		{
			document.body.removeChild(hClip);
		}
	}

	gs.hClipList = new Array();
}