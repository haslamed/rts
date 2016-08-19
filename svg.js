// A shared set of SVG animation tricks
// Licensed under the GPLv3
// https://www.gnu.org/licenses/gpl-3.0.en.html
// Copyright Ed Haslam 2016

// animates a given object by the distance dx, dy
function animateToPos(elem, dx,dy) {
    var duration = 0.05*Math.pow(dx*dx+dy*dy,0.5);
    elem.setAttribute("style","transition: all "+duration+"s linear;transform: translateY("+dy+"px) translateX("+dx+"px)");
}

// loads a sprite from a svg file (fileName) and uploads it to the stage with ID spriteId
function loadSprite(fileName, spriteId) {
    // request the server to get soldier sprite
    xhr = new XMLHttpRequest();
    xhr.open("GET","soldier.svg",false);
    xhr.overrideMimeType("image/svg+xml");
    xhr.send("");
    
    // place the sprite on the stage
    xhr.responseXML.documentElement.setAttribute("id",spriteId);
    document.getElementById("stage").appendChild(xhr.responseXML.documentElement);
}