var suite = new PerfSuite({
    name: 'RedRaphael Smoke Core',
    jquery: true,

    assets: [
        '../../package/raphael-min.js'
    ]
});

suite.add({
    name: 'Fill element with gradient',

    setup: function () {
        if (typeof Raphael === 'undefined') {
            $.ajaxSetup({async:false});
            $.getScript('assets/raphael-min.js');
        }

        var paper = Raphael(0, 0, 600, 600);
    },

    fn: function () {
        var i = 100;
        while (i--) {
            paper.rect({
                x: 10,
                y: 10,
                width: 10,
                height: 10,
                fill: '90-#ff0000-0000ff'
            });
        }
    },

    teardown: function () {
        paper.remove();
    }
});