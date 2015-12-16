

function createBltAircraft(aircraft)
{
	var newBltAircraft = {id: gs.bltAircraftNum, status: 0};
	gs.bltAircraftList.push(newBltAircraft);
	gs.bltAircraftNum++;
	
	var mySprite = document.getElementById("sprite");
	var bltAircraft = document.createElement('img');
	bltAircraft.style.position = 'absolute';
	bltAircraft.style.left = parseInt(aircraft.style.left);
	bltAircraft.style.top = parseInt(aircraft.style.top) + (aircraft.height)/2;
	 
	bltAircraft.style.zIndex = 10;
	bltAircraft.src = "bltAircraft.png";
	bltAircraft.setAttribute('id', 'bltAircraft' + newBltAircraft.id);
	document.body.appendChild(bltAircraft);
	
}


function updateBltAircraft(aircraft)
{	
	var mySprite = document.getElementById("sprite");	
	for(var i = 0;i< gs.bltAircraftList.length; i++)
	{
		
		var bltAircraft = document.getElementById('bltAircraft' + gs.bltAircraftList[i].id);	
		
		if(bltAircraft != null)
		{	
			
			bltAircraft.style.left =  parseInt(bltAircraft.style.left) + gs.bltAircraftSpeed;
			bltAircraft.style.top = parseInt(bltAircraft.style.top) + gs.bltAircraftSpeed;
			
		
			if(parseInt(bltAircraft.style.left) + bltAircraft.width >= gs.viewWidth || parseInt(bltAircraft.style.left) <= 0 || parseInt(bltAircraft.style.top) + bltAircraft.height >= gs.viewHeight || parseInt(bltAircraft.style.top)  <= 0)
			{
				document.body.removeChild(bltAircraft);
				
			}
			
			if(checkCollision(mySprite,bltAircraft))
			{
				document.body.removeChild(bltAircraft);
				hit();
			}
			
			
		}
	}
}


function clearBltAircraft()
{
	for(var i=0;i<gs.bltAircraftList.length;i++)
	{
		var bltAircraft = document.getElementById('bltAircraft'+gs.bltAircraftList[i].id);
		if(bltAircraft != null)
		{
			document.body.removeChild(bltAircraft);
		}
	}

	gs.bltAircraftList = new Array();
}