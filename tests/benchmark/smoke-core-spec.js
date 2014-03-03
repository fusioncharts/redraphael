var suite = new PerfSuite({
    name: 'RedRaphael Smoke Core',
    jquery: true,

    assets: [
        '../../package/raphael-min.js'
    ]
});

suite.add({
    name: 'new Raphael(0, 0, 600, 350)',

    setup: function () {
        if (typeof Raphael === 'undefined') {
            $.ajaxSetup({async:false});
            $.getScript('assets/raphael-min.js');
        }
    },

    fn: function () {
        var paper = Raphael(0, 0, 600, 350);
    },

    teardown: function () {
        paper.remove();
    }
});