var suite = new PerfSuite({
    name: 'RedRaphael Compare Trianglepath Construction With and Without Rounded Corners',
    jquery: true,

    assets: [
        '../../package/raphael-min.js',
        '../../source/components/raphael.trianglepath.js'
    ],

    global: {
        setup: function() {
            if (typeof Raphael === 'undefined') {
                $.ajaxSetup({
                    async: false
                });
                $.getScript('assets/raphael-min.js');
                $.getScript('assets/raphael.trianglepath.js');
            }
        }
    }
});

suite.add({
    name: 'create trianglepath without rounded corners',
    setup: function() {
        var paper;

        if (typeof Raphael === 'undefined') {
            $.ajaxSetup({
                async: false
            });
            $.getScript('assets/raphael-min.js');
            $.getScript('assets/raphael.trianglepath.js');
        }

        paper = new Raphael(0, 0, 600, 350);
    },

    fn: function() {
        paper.trianglepath(20,30,20,60,40,45);
    },

    teardown: function() {
        paper.remove();
    }
});

suite.add({
    name: 'create trianglepath with rounded corners',
    setup: function() {
        var paper;

        if (typeof Raphael === 'undefined') {
            $.ajaxSetup({
                async: false
            });
            $.getScript('assets/raphael-min.js');
            $.getScript('assets/raphael.trianglepath.js');
        }

        paper = new Raphael(0, 0, 600, 350);
    },

    fn: function() {
        paper.trianglepath(20,30,20,60,40,45,5);
    },

    teardown: function() {
        paper.remove();
    }
});