// Copyright Ed Haslam 2016
// Licensed under GPLv3
// https://www.gnu.org/licenses/gpl-3.0.en.html

// currently selected sprites
var selected = [];

// location-scoring for all moveable sprites
var moveable = []

window.onload = function () {
    
    // add soldiers to stage and event listeners
    var soldiers = [placeSprite("soldier","soldier1"),placeSprite("soldier","soldier2"),placeSprite("soldier","soldier3")];
    moveable.concat(soldiers);
    for(i=0; i<soldiers.length; i++){
        soldiers[i].addEventListener("click", select);
    }
    
	// set up event listeners
    var map	= document.getElementById("map");
    map.addEventListener("mouseup", canvasClick);
}

// manages selection of combat unit
function select(e) {
    var target = e.target;
    
    // selection or deselection?
    var pos = selected.indexOf(target);
    if (pos == -1){
        target.setAttribute("fill","black");
        selected.push(target);
    } else {
        target.setAttribute("fill","blue");
        selected.splice(pos,1); 
    }
    
}

// manages target position of combat unit
function canvasClick(e) {
    var canvas  = e.target;
    var x		= e.layerX;
    var y		= e.layerY;
	
	for(i=0; i<selected.length; i++) {
        // call pathfinding and animation functions
        console.log(selected[i].getAttribute("cx")+ " "+parseInt(selected[i].getAttribute("cy")));
        animateToPos(selected[i],x-parseInt(selected[i].getAttribute("cx")),y-parseInt(selected[i].getAttribute("cy")));
    }
}
