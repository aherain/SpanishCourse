var i=1;

function zoomout(){
i++;
document.body.style.zoom=1+i/100;
}

function zoomin(){
i--;
document.body.style.zoom=1+i/100;
}
function zoom(){
document.body.style.zoom=1;
i=1;
}

function define(i){
	var targetId, srcElement, targetElement;

	targetId = "dati"+i+"Answer" ;
	targetElement = document.all(targetId);	
	
	if (targetElement.style.display == "none") {
		targetElement.style.display = "block";		
	} else {
		targetElement.style.display = "none";		
	}
	
	return false ;
}


function zhankai(){
	var targetId, srcElement, targetElement;

	targetId = "zk" ;
	targetId1 = "img00" ;
	targetElement = document.all(targetId);	
	targetElement1 = document.all(targetId1);	
	
	if (targetElement.style.display == "none") {
		targetElement.style.display = "block";
		targetElement1.src = "images/CLOSEPNE.gif";
				
	} else {
		targetElement.style.display = "none";	
		targetElement1.src = "images/openPNE.gif";	
	}
	
	return false ;
}

