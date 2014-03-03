var suite = new PerfSuite({
    name: 'Find elements by id',
    jquery: true,

    assets: [
        '../../package/raphael-min.js',
        '../fixtures/dude.jpg'
    ],

    global: {
        setup: function () {
            if (typeof Raphael === 'undefined') {
                jQuery.ajaxSetup({async:false});
                jQuery.getScript('assets/raphael-min.js');
            }

            var elementTypes = {
                    circle: [50, 50, 40],
                    rect: [40, 40, 50, 50, 10],
                    ellipse: [50, 50, 40, 20],
                    path: ["M10 10L90 90"],
                    image: ["assets/dude.jpg", 10, 10, 80, 80],
                    text: [50, 50, "Raphaël\nkicks\nbutt!"]
                },
                elementStartId = null,
                elementEndId = null,
                paper = new Raphael(10, 10, 100, 100),
                elementArgs,
                elements,
                g;

            for (elementArgs in elementTypes) {
                element = paper[elementArgs].apply(paper, elementTypes[elementArgs], g = paper.group(g)); // in group
                if (elementStartId === null) {
                    elementStartId = element.id - 1; // for group
                }
            }
            elementEndId = element.id;

        },

        teardown: function () {
            paper.remove();
            paper = elementStartId = elementEndId = null
        }
    }
});

suite.add({
    name: 'Find bottom element among 18 elements',

    fn: function () {
        if (paper.getById(elementEndId) !== element) throw Error("paper bottom mismatch");
    }
});
suite.add({
    name: 'Find top element among 18 elements',

    fn: function () {
        if (paper.getById(elementStartId).paper !== paper) throw Error("paper top mismatch");
    }
});