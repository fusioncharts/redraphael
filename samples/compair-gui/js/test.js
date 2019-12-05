var paper = new RedRaphael(document.getElementById("container"), 600, 350),
    parent = paper.group('parent'),
    gridGroup = paper.group('grid', parent),
    textGroup = paper.group('text', parent),
    text,
    xRef,
    yRef,
    css = {"fontFamily":"Verdana,sans","fontSize":"10px","lineHeight":"12px","color":"rgba(85,85,85,1)","fontWeight":"normal","fontStyle":"normal","border":"","borderColor":"","borderThickness":1,"borderPadding":2,"borderRadius":0,"backgroundColor":"","borderDash":"none"},
    attr;

textGroup.css(css);
for (var i = 0; i < 10; i++) {
    // row
    paper.rect({
        x: 0,
        y: 35 * i,
        width: 600,
        height: 35
    }, gridGroup);

    // column
    paper.rect({
        x: 60 * i,
        y: 0,
        width: 60,
        height: 350
    }, gridGroup);
}

attr = {
    x: 300,
    y: 85,
    fill: '#ff0000',
    text: 'Sample Text <br> Line Break1<br>Line Break2',
    'font-size': '10',
    'text-anchor': 'end',
    'vertical-align': 'middle'
};
text = paper.text(textGroup);
text.attr(attr);

// Ref line
xRef = paper.rect({
    x: 300,
    y: 0,
    width: 1,
    height: 350,
    stroke: '#00ff00'
}, gridGroup);
yRef = paper.rect({
    x: 0,
    y: 85,
    width: 600,
    height: 1,
    stroke: '#00ff00'
}, gridGroup);

var testList = [{
    text: {
        x: 300,
        y: 85,
        text: 'Sample Text <br> Line Break1<br>Line Break2',
        'font-size': '10',
        'text-anchor': 'end',
        'vertical-align': 'middle'
    },
    xref: {
        x: 300
    },
    yRef: {
        y: 85
    }
},
{
    text: {
        x: 300,
        y: 85,
        text: 'Sample Text <br> Line Break1<br>Line Break21',
        'text-anchor': 'start',
        'vertical-align': 'top',
        'font-size': '30',        
        'direction': 'rtl'
    },
    xref: {
        x: 300
    },
    yRef: {
        y: 85
    }
},
{
    text: {
        x: 200,
        y: 85,
        text: 'Sample Text <br> Line Break1<br>Line Break2',
        'text-anchor': 'start',
        'vertical-align': 'top',
        'font-size': '60',        
        'direction': 'rtl'
    },
    xref: {
        x: 200
    },
    yRef: {
        y: 85
    }
},
{
    text: {
        x: 200,
        y: 200,
        text: 'Sample Text <br> Line Break1<br>Line Break2',
        'text-anchor': 'middle',
        'vertical-align': 'bottom',
        'font-size': '10',
        'font-family': '"Times New Roman", Times, serif',      
        'direction': 'rtl'
    },
    xref: {
        x: 200
    },
    yRef: {
        y: 200
    }
},
{
    text: {
        x: 300,
        y: 85,
        fill: '#ff0000',
        text: 'Sample Text <br> Line Break1<br>Line Break2',
        'font-size': '10',
        'text-anchor': 'end',
        'vertical-align': 'middle',
        'direction': 'rtl'
    },
    xref: {
        x: 300
    },
    yRef: {
        y: 85
    }
}],

start = 0,
end = testList.length - 1,
minDelay = 2000,
runTest = function () {
    if (testList[start]) {
        // Appy text Ref
        text.attr(testList[start].text);
        // Apply xRef attr
        xRef.attr(testList[start].xref);
        // Apply yRef attr
        yRef.attr(testList[start].yref);
    }
    if (start < end) {
        start += 1;
        setTimeout(runTest, minDelay);
    }
};


runTest();