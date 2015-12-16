function createBomb(index)
{
	var newBomb = {id: gs.bombNum, status: 0};
	gs.bombList.push(newBomb);
	gs.bombNum++;
	
	var mySprite = document.getElementById("sprite");
	var bomb = document.createElement('img');
	bomb.style.position = 'absolute';
	bomb.style.left = parseInt(mySprite.style.left) + (mySprite.width)/2;
	bomb.style.top = parseInt(mySprite.style.top) + mySprite.height;
	bomb.style.zIndex = index;
	bomb.src = "bomb.png";
	bomb.setAttribute('id', 'bomb' + newBomb.id);
	document.body.appendChild(bomb);
}

function updateBomb()
{
	for(var i=0; i< gs.bombList.length; i++)
	{
		
		var bomb = document.getElementById('bomb'+ gs.bombList[i].id);
		
		if(bomb != null)
		{
			bomb.style.top = parseInt(bomb.style.top) + gs.bombSpeed;
			if (parseInt(bomb.style.top) + bomb.height > gs.viewHeight)
			{
				document.body.removeChild(bomb);
			}
			for(var j=0;j<gs.tankList.length;j++)
			{
				var tank = document.getElementById('tank' + gs.tankList[j].id);
				if(tank != null)
				{
					if(checkCollision(tank,bomb))
					{
						tank.src = "enemy/track2.png";
						document.body.removeChild(tank);
						document.body.removeChild(bomb);
						gs.score = gs.score + 10;
					}
				}
			}
			for(var k=0;k < gs.aircraftList.length;k++)
			{
				var aircraft = document.getElementById('aircraft' + gs.aircraftList[k].id);
				if(aircraft != null)
				{
					if(checkCollision(aircraft,bomb))
					{
						aircraft.src = "enemy/track1.png";
						document.body.removeChild(aircraft);
						document.body.removeChild(bomb);
						gs.score = gs.score + 10;
					}
				}
			}
			
			for(var m=0;m < gs.truckList.length;m++)
			{
				var truck = document.getElementById('truck' + gs.truckList[m].id);
				if(truck != null)
				{
					if(checkCollision(truck,bomb))
					{
						truck.src = "enemy/track3.png";
						document.body.removeChild(truck);
						document.body.removeChild(bomb);
						gs.score = gs.score + 10;
					}
				}
			}
		}
	}
}


function clearBomb()
{
	
	for(var i=0;i<gs.bombList.length;i++)
	{
		var bomb = document.getElementById('bomb'+gs.bombList[i].id);
		if(bomb != null)
		{
			document.body.removeChild(bomb);
		}
	}

	gs.bombList = new Array();
}
