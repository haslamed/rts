// Copyright Ed Haslam 2016
// Licensed under GPLv3
// https://www.gnu.org/licenses/gpl-3.0.en.html
// Does some asynchronous loading of sprites

// sprite storage
var sprites = {};

// request the server to get relevant sprite
function loadSprite(fileName) {
    xhr = new XMLHttpRequest();
    xhr.open("GET",fileName,false);
    xhr.overrideMimeType("image/svg+xml");
    xhr.send("");
    return xhr.responseXML.documentElement;
}

sprites["soldier"] = loadSprite("soldier.svg");