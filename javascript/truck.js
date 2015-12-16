function createTruck(index)
{	
	var newTruck = {id: gs.truckNum, status: 0}
	gs.truckNum++;
	gs.truckList.push(newTruck);

	var truck = document.createElement('img');
	
	truck.style.position = 'absolute';
	truck.style.left = 0;
	truck.style.top = gs.truckTopLimit;
	
	truck.style.zIndex = index;
	truck.src = "truck.png";
	truck.setAttribute('id', 'truck' + newTruck.id);
	document.body.appendChild(truck);

}

function updateTruck()
{
	var mySprite = document.getElementById("sprite");
	
	for(var i = 0; i < gs.truckList.length; i++)
	{
		
		var truck = document.getElementById('truck' + gs.truckList[i].id);
		if (truck != null)
		{
			truck.style.left = parseInt(truck.style.left) + gs.truckSpeed;
			if (parseInt(truck.style.left) + (truck.width)/2 > gs.viewWidth)
			{
				document.body.removeChild(truck);
			}
			
			if(checkCollision(mySprite,truck) && gs.roverStatus == 0)
			{
				//alert("sp--collide---truck");
				gs.roverStatus = 1;
				truck.src = "enemy/track3.png";
				document.body.removeChild(truck);
				life();
			}
		}
		
	}
}

function clearTruck()
{
	for(var i=0;i<gs.truckList.length;i++)
	{
		var truck = document.getElementById('truck'+gs.truckList[i].id);
		if(truck != null)
		{
			document.body.removeChild(truck);
		}
	}

	gs.truckList = new Array();
}
