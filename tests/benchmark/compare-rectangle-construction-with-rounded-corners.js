var suite = new PerfSuite({
    name: 'RedRaphael Compare Rectangle Construction With and Without Rounded Corners',
    jquery: true,

    assets: [
        '../../package/raphael-min.js'
    ],

    global: {
        setup: function() {
            if (typeof Raphael === 'undefined') {
                $.ajaxSetup({
                    async: false
                });
                $.getScript('assets/raphael-min.js');
            }
        }
    }
});

suite.add({
    name: 'create rectangle without rounded corners',
    setup: function() {
        var paper;

        if (typeof Raphael === 'undefined') {
            $.ajaxSetup({
                async: false
            });
            $.getScript('assets/raphael-min.js');
        }

        paper = new Raphael(0, 0, 600, 350);
    },

    fn: function() {
        paper.rect({
            x: 10,
            y: 10,
            width: 300,
            height: 175,
            'stroke-width': 2,
            'stroke': '#ff0000',
            'fill': '#0000ff'
        });
    },

    teardown: function() {
        paper.remove();
    }
});

suite.add({
    name: 'create rectangle with rounded corners',
    setup: function() {
        var paper;

        if (typeof Raphael === 'undefined') {
            $.ajaxSetup({
                async: false
            });
            $.getScript('assets/raphael-min.js');
        }

        paper = new Raphael(0, 0, 600, 350);
    },

    fn: function() {
        paper.rect({
            x: 10,
            y: 10,
            width: 300,
            height: 175,
            r: 5,
            'stroke-width': 2,
            'stroke': '#ff0000',
            'fill': '#0000ff'
        });
    },

    teardown: function() {
        paper.remove();
    }
});