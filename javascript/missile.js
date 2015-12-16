function createMissile(index)
{
	var newMissile = {id:gs.missileNum,status: 0};
	gs.missileList.push(newMissile);
	gs.missileNum++;
	
	var mySprite = document.getElementById("sprite");
	var missile = document.createElement('img');
	missile.style.position = 'absolute';
	missile.style.left = parseInt(mySprite.style.left) + mySprite.width;
	missile.style.top = parseInt(mySprite.style.top) + (mySprite.height)/2;
	missile.style.zIndex = index;

	switch(gs.hClip1List.length)
	{
		case 0:
			missile.src = "missile.png";
			break;
		case 1:
			missile.src = "missile1.png";
			break;
		case 2:
			missile.src = "missile2.png";
			
			break;
	}

	missile.setAttribute('id', 'missile' + newMissile.id);
	document.body.appendChild(missile);
	
}

function updateMissile()
{	
	for(var i = 0;i< gs.missileList.length; i++)
	{	
		var missile = document.getElementById('missile' + gs.missileList[i].id);
		
		if(missile != null)
		{	
			missile.style.left = parseInt(missile.style.left) + gs.missileSpeed;
			
			if(parseInt(missile.style.left) + missile.width >= gs.viewWidth)
			{
				document.body.removeChild(missile);
			}
			
			for(var j=0;j<gs.aircraftList.length;j++)
			{
				var aircraft = document.getElementById('aircraft' + gs.aircraftList[j].id);
				if(aircraft != null)
				{
					
					if(checkCollision(aircraft,missile))
					{
						
							switch(gs.hClip1List.length)
							{
								case 0:										
									gs.valueAircraft--;
									document.body.removeChild(missile);
									gs.score = gs.score + 10;
									if(gs.valueAircraft == 0)
									{
										aircraft.src = "enemy/track1.png";
										document.body.removeChild(aircraft);
										updateRover();
										gs.valueAircraft = 3;
									}
									break;
								case 1:
									gs.valueAircraft--;
									document.body.removeChild(missile);
									if(gs.valueAircraft == 1)
									{
										aircraft.src = "enemy/track1.png";
										document.body.removeChild(aircraft);
										gs.valueAircraft = 3;
									}
									gs.score = gs.score + 20;
									break;
								case 2:
									document.body.removeChild(missile);
									aircraft.src = "enemy/track1.png";
									document.body.removeChild(aircraft);
									gs.score = gs.score + 30;	
									break;	
							}
						
					}
				}
			}
			
			for(var j=0;j<gs.tankList.length;j++)
			{
				var tank = document.getElementById('tank' + gs.tankList[j].id);
				
				if(tank != null)
				{
					if(checkCollision(tank,missile))
					{
						
						switch(gs.hClip1List.length)
							{
								case 0:										
									gs.valueTank--;
									document.body.removeChild(missile);
									gs.score = gs.score + 10;
									if(gs.valueTank == 0)
									{
										tank.src = "enemy/track2.png";
										document.body.removeChild(tank);
										gs.valueTank = 3;
										
									}
									
									break;
								case 1:
									gs.valueTank--;
									document.body.removeChild(missile);
									if(gs.valueTank == 1)
									{
										tank.src = "enemy/track2.png";
										document.body.removeChild(tank);
										gs.valueTank = 3;
										//updateRover();
									}
									gs.score = gs.score + 20;
									break;
								case 2:
									document.body.removeChild(missile);
									tank.src = "enemy/track2.png";
									document.body.removeChild(tank);
									//updateRover();
									gs.score = gs.score + 30;	
									break;	
							}
					}
				}
			}
			
			for(var j=0;j<gs.truckList.length;j++)
			{
				var truck = document.getElementById('truck' + gs.truckList[j].id);
				
				if(truck != null)
				{
					if(checkCollision(truck,missile))
					{
						
						switch(gs.hClip1List.length)
							{
								case 0:										
									gs.valueTruck--;
									document.body.removeChild(missile);
									gs.score = gs.score + 10;
									if(gs.valueTruck == 0)
									{
										truck.src = "enemy/track3.png";
										document.body.removeChild(truck);
										gs.valueTruck = 3;
										
									}
									
									break;
								case 1:
									gs.valueTruck--;
									document.body.removeChild(missile);
									if(gs.valueTruck == 1)
									{
										truck.src = "enemy/track3.png";
										document.body.removeChild(truck);
										gs.valueTruck = 3;
									}
									gs.score = gs.score + 20;
									break;
								case 2:
									document.body.removeChild(missile);
									truck.src = "enemy/track3.png";
									document.body.removeChild(truck);
									gs.score = gs.score + 30;	
									break;	
							}
					}
				}
			}
			
			
			
			
			
		}
	}
}

function clearMissile()
{
	for(var i=0;i<gs.missileList.length;i++)
	{
		var missile = document.getElementById('missile'+gs.missileList[i].id);
		if(missile != null)
		{
			document.body.removeChild(missile);
		}
	}

	gs.missileList = new Array();
}
