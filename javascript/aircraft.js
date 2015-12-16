function createAircraft(index)
{
	var newAircraft = {id: gs.aircraftNum, status: 0};
	gs.aircraftNum++;
	gs.aircraftList.push(newAircraft);
	
	var aircraft = document.createElement('img');
	aircraft.style.position = 'absolute';
	aircraft.style.left = gs.aircraftStarting - aircraft.width - gs.aircraftSpeed;
	
	aircraft.style.top =  Math.ceil(Math.random() * (gs.aircraftBottomLimit - gs.aircraftTopLimit) + gs.aircraftTopLimit);
	
	aircraft.style.zIndex = index;
	aircraft.src = "aircraft.png";
	aircraft.setAttribute('id', 'aircraft' + newAircraft.id);
	document.body.appendChild(aircraft);
}


function updateAircraft()
{
	var mySprite = document.getElementById("sprite");
	
	for (var i = 0; i < gs.aircraftList.length; i++)
	{
		var aircraft = document.getElementById('aircraft' + gs.aircraftList[i].id);
		
		if (aircraft != null)
		{
			
			aircraft.style.left = parseInt(aircraft.style.left) - gs.aircraftSpeed;
			
			if(Math.ceil(Math.random(gs.scrollNum % gs.aircraftInterval)*10) == 9)
			{
				createBltAircraft(aircraft);
			}
			
			updateBltAircraft(aircraft);
			
			
			if (parseInt(aircraft.style.left)+ aircraft.width/2 < 0 )
			{
				document.body.removeChild(aircraft);
			}
			
			if(checkCollision(mySprite,aircraft))
			{
				//alert("sp--collide---aircraft");
				gs.roverStatus = 1;
				aircraft.src = "enemy/track1.png";
				document.body.removeChild(aircraft);
				
				life();
			}
	
		}
		
	}

}



function clearAircraft()
{
		
	for(var i=0;i<gs.aircraftList.length;i++)
	{
		var aircraft = document.getElementById('aircraft' + gs.aircraftList[i].id);
		if(aircraft != null)
		{
			document.body.removeChild(aircraft);
		}
	}

	gs.aircraftList = new Array();
}