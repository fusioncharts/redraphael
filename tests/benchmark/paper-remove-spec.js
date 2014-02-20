var suite = new PerfSuite({
    name: 'RedRaphael Smoke Core',
    jquery: true,

    assets: [
        '../../package/raphael-min.js'
    ]
});

suite.add({
    name: 'Create 100 elements spaced in 10 groups and then do paper.remove()',

    setup: function () {
        if (typeof Raphael === 'undefined') {
            $.ajaxSetup({async:false});
            $.getScript('assets/raphael-min.js');
        }


    },

    fn: function () {
        var paper = Raphael(0, 0, 600, 350),
            g,
            i = 100;

        while (i) {
            if (!(i % 10)) {
                g = paper.group();
            }
            paper.rect(10, 10, 100, 100, g);
            i--;
        }

        paper.remove();
    }
});