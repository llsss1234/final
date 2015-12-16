function createTank(index)
{	
	var newTank = {id: gs.tankNum, status: 0}
	gs.tankNum++;
	gs.tankList.push(newTank);

	var tank = document.createElement('img');
	
	tank.style.position = 'absolute';
	tank.style.left = 0;
	tank.style.top = gs.tankTopLimit;
	
	tank.style.zIndex = index;
	tank.src = "tank.png";
	tank.setAttribute('id', 'tank' + newTank.id);
	document.body.appendChild(tank);

}

function updateTank()
{
	var mySprite = document.getElementById("sprite");
	
	for(var i = 0; i < gs.tankList.length; i++)
	{
		
		var tank = document.getElementById('tank' + gs.tankList[i].id);
		if (tank != null)
		{
			if(Math.ceil(Math.random(gs.scrollNum % gs.tankInterval)*10) == 9)
			{
				
				createBltTank(tank);
				
			}			
			updateBltTank(tank);
			tank.style.left = parseInt(tank.style.left) + gs.tankSpeed;
			if (parseInt(tank.style.left) + (tank.width)/2 > gs.viewWidth)
			{
				document.body.removeChild(tank);
			}
			
			if(checkCollision(mySprite,tank) && gs.roverStatus == 0)
			{
				//alert("sp--collide---Tank");
				gs.roverStatus = 1;
				tank.src = "enemy/track2.png";
				document.body.removeChild(tank);
				life();
			}
		}
		
	}
}

function clearTank()
{
	for(var i=0;i<gs.tankList.length;i++)
	{
		var tank = document.getElementById('tank'+gs.tankList[i].id);
		if(tank != null)
		{
			document.body.removeChild(tank);
		}
	}

	gs.tankList = new Array();
}
