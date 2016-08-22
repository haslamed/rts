// A shared set of SVG animation tricks
// Licensed under the GPLv3
// https://www.gnu.org/licenses/gpl-3.0.en.html
// Copyright Ed Haslam 2016

// animates a given object by the distance dx, dy
function animateToPos(elem, dx,dy) {
    var duration = 0.05*Math.pow(dx*dx+dy*dy,0.5);
    console.log(dx+" "+dy+" "+duration);
    elem.setAttribute("style","transition: transform "+duration+"s linear;transform: translateY("+dy+"px) translateX("+dx+"px)");
}

// places the relevant sprite on the stage
function placeSprite(spriteName, spriteId) {
    var sprite = sprites[spriteName].cloneNode(true);
    sprite.setAttribute("id",spriteId);
    document.getElementById("stage").appendChild(sprite);
    return sprite;
}