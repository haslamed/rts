// Copyright Ed Haslam 2016
// Licensed under GPLv3
// https://www.gnu.org/licenses/gpl-3.0.en.html

var selected = [];

window.onload = function () {
    
    // add soldiers to stage
    loadSprite("soldier","soldier1");
    
	// set up event listeners
    var circle  = document.getElementById("soldier1");
    var stage	= document.getElementById("stage");
    stage.addEventListener("mouseup", canvasClick);
    circle.addEventListener("click", select);
}

// manages selection of combat unit
function select(e) {
    var target = e.target;
    target.setAttribute("fill","black");
    selected.push(target);
    console.log("here");
}

// manages target position of combat unit
function canvasClick(e) {
    var canvas  = e.target;
    var x		= e.layerX;
    var y		= e.layerY;
	
	for(i=0; i<selected.length; i++) {

        // call pathfinding and animation functions
        animateToPos(selected[i],x-parseInt(selected[i].getAttribute("cx")),y-parseInt(selected[i].getAttribute("cy")));
        //selected[i].style["animation-duration"] = "2s";
    }
}
