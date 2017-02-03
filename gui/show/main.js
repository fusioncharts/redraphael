//(function(){

var testBtn = document.getElementById("test-btn"),
    testSelect = document.getElementById("test-select"),
    autoOffBtn = document.getElementById("auto-off"),
    jsontext = document.getElementById("jsontext"),
    jsonupdate = document.getElementById("jsonupdate"),
    pauseBtn = document.getElementById("pause-anim"),
    resumeBtn = document.getElementById("resume-anim"),
    attrDisplay = document.getElementById("source"),
    getAttr = document.getElementById("get-attr"),
    setStart = document.getElementById("set-start"),
    animateSaved = document.getElementById("anim-saved"),
    body = document.body,
    paper, svg,
    timeOut = 500,
    keySeparator = "$*&^$",
    jsonData = testJson,
    defTime = 2000,
    autoTestOn = false,
    waitTime = 0,
    saveStart,
    Storage = window.localStorage;

populateOptions(jsonData);

function populateOptions(json) {
    var string = "",
        key = "",
        key2 = "",
        lastTestKey = Storage.getItem('testId');
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
    lastTestKey && (testSelect.value = lastTestKey);
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

function testPath(saveStart) {
    var selectValue = testSelect.value,
        startData = {},
        endData = {},
        time = 0,
        el;
        selectValue && Storage.setItem('testId', selectValue);
    // Clear other svgs before test starts
    if (saveStart !== 'animateSaved')
    clearBoard();
    // Make current paper instance
    paper = Raphael(0, 0, 700, 700);

    selectValue = selectValue.split(keySeparator);
    // return if cannot split
    if (!selectValue.length) {
        return;
    }

    startData = jsonData[selectValue[0]][selectValue[1]].start;
    endData = jsonData[selectValue[0]][selectValue[1]].end;
    time = +jsonData[selectValue[0]][selectValue[1]].time;
    el = jsonData[selectValue[0]][selectValue[1]].element || "path";
    if (saveStart === 'save') {
        raphaelFnSetStart(paper, startData, endData, time, el);
    } else if (saveStart === 'animateSaved') {
        raphaelFnAnimateSaved(paper, startData, endData, time, el);
    } else {
        raphaelFn(paper, startData, endData, time, el);
    }
}

function addEventListener (el, fn) {
    if(el.addEventListener){
        el.addEventListener('click', fn);
    } else {
        el.attachEvent('onclick', fn);
    }
}

addEventListener(testBtn, testPath);

addEventListener(getAttr, function () {
    attrDisplay.innerHTML += '</br><hr>' + stringifyPath(path.attrs.path);
});

function pauseAnim () {
    if (path) {
        path.pause();
    }
}
function resumeAnim () {
    if (path) {
        path.resume();
    }
}

function stringifyPath (arr) {
    return "";
    var i = 0,
        ii = arr.length,
        str = '';
    for (i = 0; i < ii; ++i) {
        str += arr[i].join ? arr[i].join(',') : arr[i].toString();
        str += '</br>';
    }
    return str;
}

function raphaelFn(paper, start, end, time, el) {
    var path = paper[el](start);
    window.path = path;
    attrDisplay.innerHTML = "Start </br>" + stringifyPath(path.attrs.path);
    path.attr(start);
    time = time || defTime;
    // Animation test
    setTimeout(function pathAnimate() {
        path.animate(end, time);
        setTimeout (function () {
            attrDisplay.innerHTML += '<hr>End</br>' + stringifyPath(path.attrs.path);
        }, time * 1.1);
    }, timeOut);
}
function raphaelFnSetStart(paper, start, end, time, el) {
    var path = paper[el](start);
    attrDisplay.innerHTML = "Start </br>" + stringifyPath(path.attrs.path);
    path.attr(start);
    window.savePath = path;
    window.savePathData = start;
}
function raphaelFnAnimateSaved(paper, start, end, time, el) {
    var savePath = window.savePath,
        startTime = +Date.now(),
        i = -1;
    if (!savePath) {
        return;
    }
    time = time || defTime;
    savePath.attr(savePathData);
    function toPath(arr) {
        return arr.map((a)=>{
            return a.join(' ');
        }).join('');
    }
    function log () {
        ++i;
        if (i % 100 === 0) {
            console.log(toPath(savePath.attrs.path), i);
        }
        if (+Date.now() < startTime + time) {
            requestAnimationFrame(log);
        }
    };
    log();
    setTimeout(function () {
        savePath.animate(end, time);
        setTimeout (function () {
            attrDisplay.innerHTML += '<hr>End</br>' + stringifyPath(savePath.attrs.path);
        }, time * 1.1);
    }, 500);
}
