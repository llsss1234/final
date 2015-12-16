function createBoss(index)
{	
	var newBoss = {id: gs.bossNum, status: 0}
	gs.bossNum++;
	gs.bossList.push(newBoss);
	var boss = document.createElement('img');	
	boss.style.position = 'absolute';
	boss.style.left = gs.viewWidth - 50;
	boss.style.top = gs.viewHeight - 300;
	boss.style.top = Math.ceil(Math.random() * gs.viewHeight + gs.viewHeight - 300);
	boss.style.zIndex = index;
	boss.src = "enemy/boss.png";
	boss.setAttribute('id', 'boss' + newBoss.id);
	document.body.appendChild(boss);
}

function updateBoss()
{
	var mySprite = document.getElementById("sprite");
	for(var i = 0; i < gs.bossList.length; i++)
	{
		
		var boss = document.getElementById('boss'+ gs.bossList[i].id);
		if (boss != null)
		{
			boss.style.left = parseInt(boss.style.left) - 10;	
			if (parseInt(boss.style.left) + (boss.width)/2 > gs.viewWidth)
			{
				document.body.removeChild(boss);
			}
			
			if(checkCollision(mySprite,boss))
			{
					alert("sp--collide---boss");
					gs.roverStatus = 1;
					boss.src = "enemy/track3.png";
					gs.score = 0;
					document.body.removeChild(boss);
					life();
			}
		}	
	}
}

function clearBoss()
{
	for(var i=0;i<gs.bossList.length;i++)
	{
		var boss = document.getElementById('boss'+ gs.bossList[i].id);
		if(boss != null)
		{
			document.body.removeChild(boss);
		}
	}

	gs.bossList = new Array();
}
