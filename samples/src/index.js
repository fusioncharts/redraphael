var Raphael = require('../../lib/raphael');
var rect;

Raphael(10, 10, 600, 400, function () {
    var paper = window.pap = this;

    rect = paper.rect({
    	x: 10,
    	y: 10,
    	width: 300,
    	height: 200
    })
    .attr({
    	fill: '#FF0000'
    })
});
