//(function(){

var testBtn = document.getElementById("test-btn"),
    testSelect = document.getElementById("test-select"),
    autoOffBtn = document.getElementById("auto-off"),
    jsontext = document.getElementById("jsontext"),
    jsonupdate = document.getElementById("jsonupdate"),
    body = document.body,
    paper, svg,
    timeOut = 500,
    keySeparator = "$*&^$",
    jsonData = testJson,
    defTime = 2000,
    autoTestOn = false,
    waitTime = 0;

populateOptions(jsonData);

function populateOptions(json) {
    var string = "",
        key = "",
        key2 = "";
    for (key in json) {
        string += "<optgroup label=\"" + key + "\">";
        for (key2 in json[key]) {
            string += "<option value=\"" + key + keySeparator + key2 + "\">" + key2 + "</option>"
        }
        string += "</optgroup>";
    }
    jsontext.value = JSON.stringify(json, null, 4);
    // Storing the json
    jsonData = json;
    testSelect.innerHTML = string;
}

if(jsonupdate.addEventListener){
    jsonupdate.addEventListener('click', updateJson);
} else {
    jsonupdate.attachEvent('onclick', updateJson);
}

function updateJson () {
    var json = '';
    try {
        json = JSON.parse(jsontext.value);
    } catch (e) {
        alert('Invalid JSON');
        return;
    }
    jsonData = json;
    populateOptions(jsonData);
}

// function to clear all svg from body
function clearBoard() {
    var svgs = document.getElementsByTagName("svg"),
        i = 0,
        ii = svgs.length;
    for (i = 0; i < ii; ++i) {
        body.removeChild(svgs[i]);
    }
}

function testPath(val) {
    var selectValue = testSelect.value,
        startData = {},
        endData = {},
        time = 0,
        el;
        // Clear other svgs before test starts
    clearBoard();
    // Make current paper instance
    paper = Raphael(50, 50, 600, 400);

    // Logic to start and end data for animation
    if(val && val.length){
    	selectValue = val;
    } else {
		selectValue = selectValue.split(keySeparator);
    }
    // return if cannot split
    if (!selectValue.length) {
        return;
    }

    startData = jsonData[selectValue[0]][selectValue[1]].start;
    endData = jsonData[selectValue[0]][selectValue[1]].end;
    time = +jsonData[selectValue[0]][selectValue[1]].time;
    el = jsonData[selectValue[0]][selectValue[1]].element || "path";
    raphaelFn(paper, startData, endData, time, el);
    // d3Fns[selectValue] && d3Fns[selectValue](svg);
}

if(testBtn.addEventListener){
	testBtn.addEventListener('click', testPath);
} else {
	testBtn.attachEvent('onclick', testPath);
}
if(autoOffBtn && autoOffBtn.addEventListener){
    autoOffBtn.addEventListener('click', autoOffFn);
} else if (autoOffBtn && autoOffBtn.attachEvent){
    autoOffBtn.attachEvent('onclick', autoOffFn);
}

function raphaelFn(paper, start, end, time, el) {
    var path = paper[el](start);
    window.p = path;
    path.attr(start);
    time = time || defTime;
    // Animation test
    setTimeout(function pathAnimate() {
        path.animate(end, time)
    }, timeOut);
}



//});




/*svg = d3.select("body").append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .attr("style", "position:absolute;left:550px;top:50px");
// Execute function if exist
d3Fns.pathAnimation = function(svg) {
    var path = svg.append("path").
    style("fill", null).
    attr("d", "M20,20,L0,40L40,60L0,80L40,100L0,120L40,140L40,150");
    setTimeout(function() {
        path.attr("d", "M20,20,L0,40L40,60L0,80L40,100L0,120L40,140L40,150")
            .transition()
            .duration(5000).
        attr("d", "M0,0L50,20L60,10L4,5");
    }, timeOut);
}*/