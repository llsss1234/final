function createBltTank(tank)
{
	var newBltTank = {id: gs.bltTankNum, status: 0}
	gs.bltTankList.push(newBltTank);
	gs.bltTankNum++;
	
	var mySprite = document.getElementById("sprite");
	var bltTank = document.createElement('img');
	bltTank.style.position = 'absolute';
	
	bltTank.style.left = parseInt(tank.style.left);
	bltTank.style.top = parseInt(tank.style.top) ;
	
	bltTank.style.zIndex = 11;
	bltTank.src = "bltTank.png";
	bltTank.setAttribute('id', 'bltTank' + newBltTank.id);
	document.body.appendChild(bltTank);
}


function updateBltTank(tank)
{

	var mySprite = document.getElementById("sprite");	
	
	for(var i = 0; i < gs.bltTankList.length; i++)
	{
		var bltTank = document.getElementById('bltTank' + gs.bltTankList[i].id);
		if (bltTank != null)
		{
			
			bltTank.style.left = parseInt(bltTank.style.left) - gs.bltTankSpeed;
			bltTank.style.top = parseInt(bltTank.style.top) - gs.bltTankSpeed;
			
			if (parseInt(bltTank.style.left) <= 0 || parseInt(bltTank.style.top)<=0)
			{
				document.body.removeChild(bltTank);
			}
			
			if(checkCollision(mySprite,bltTank))
			{
				//alert("---blt----"+gs.hClip1List.length);
				
				document.body.removeChild(bltTank);
				hit();
				
			}
			
		}
		
	}
	
}

function clearBltTank()
{
	for(var i=0;i<gs.bltTankList.length;i++)
	{
		var bltTank = document.getElementById('bltTank'+gs.bltTankList[i].id);
		if(bltTank != null)
		{
			document.body.removeChild(bltTank);
		}
	}

	gs.bltTankList = new Array();
}