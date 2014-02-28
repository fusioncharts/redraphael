describe('Raphael.remove', function () {
    var $this = {};

    beforeEach(function () {
        $this.paper = new Raphael(0, 0, 400, 400);
    });

    afterEach(function () {
        $this.paper.remove();
        delete $this.paper;
    });


    it ('must have the remove method', function () {
        expect($this.paper.remove).toEqual(jasmine.any(Function));
    });

    it ('Element not retain references to HTML post removal', function () {
        var rect = $this.paper.rect(0, 0, 100, 100),
            htmlNode = rect.node,
            parent = htmlNode.parentNode;

        expect(rect.removed).not.toBeTruthy();
        expect(rect.node).toBeDefined();
        expect(rect.node.parentNode).toBeDefined();

        rect.remove();

        expect(rect.removed).toBeTruthy();
        expect(rect.node).toEqual(null);
        expect(htmlNode.parentNode).toEqual(null);
    });

    it ('Paper must not retain references to HTML post removal', function () {
        var rect = $this.paper.rect(0, 0, 100, 100),
            htmlNode = rect.node,
            parent = htmlNode.parentNode;

        expect(rect.removed).not.toBeTruthy();
        expect(rect.node).toBeDefined();
        expect(rect.node.parentNode).toBeDefined();

        $this.paper.remove();

        expect(rect.removed).toBeTruthy();
        expect(rect.node).toEqual(null);
        expect(htmlNode.parentNode).toEqual(null);
    });
});