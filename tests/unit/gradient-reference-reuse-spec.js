describe("Gradient fill feature of Raphel.Paper.Element", function () {
    var paper,
        rect,
        circle;

    it ("must have the paper and rectangle accessible", function () {
        paper = new Raphael(0, 0, 400, 400);
        expect(paper).toBeDefined();

        rect = paper.rect(10, 10, 100, 100);
        expect(rect).toBeDefined();

        circle = paper.circle(200, 200, 50);
        expect(circle).toBeDefined();
    });

    it ("must NOT create a gradient definition if fill is solid", function () {
        expect(paper.defs).toBeDefined();
        expect(paper.defs.childNodes.length).toEqual(0);

        rect.attr('fill', '#ff0000');
        expect(paper.defs.childNodes.length).toEqual(0);

        circle.attr('fill', '#ff0000');
        expect(paper.defs.childNodes.length).toEqual(0);
    });

    it ("must create a gradient definition when gradient fill is added", function () {
        rect.attr('fill', '90-#ff0000-#0000ff');
        expect(paper.defs.childNodes.length).toEqual(1);
        expect(rect.gradient.parentNode).toEqual(paper.defs);
    });

    it ("must NOT re-use same gradient element if fill is changed and dispose previous element", function () {
        var prevGradient = rect.gradient;
        rect.attr('fill', '90-#00ff00-#0000ff');
        expect(paper.defs.childNodes.length).toEqual(1);
        expect(rect.gradient).not.toEqual(prevGradient);
        expect(prevGradient.parentNode).toBeNull();
    });

    it("must reuse gradient element if same fill is applied on multiple shapes", function () {
        circle.attr('fill', '90-#00ff00-#0000ff');
        expect(paper.defs.childNodes.length).toEqual(1);
        expect(rect.gradient).toEqual(circle.gradient);
    });

    it("must create new element when one of two elements sharing same gradient changes attr", function () {
        circle.attr('fill', '90-#0000ff-#0000ff');
        expect(paper.defs.childNodes.length).toEqual(2);
        expect(rect.gradient).not.toEqual(circle.gradient);
    });

    it("must NOT remove gradient definition if it still is used by one of other shapes sharing it", function () {
        rect.attr('fill', '90-#0000ff-#0000ff');
        expect(paper.defs.childNodes.length).toEqual(1);

        rect.remove();
        expect(paper.defs.childNodes.length).toEqual(1);
        expect(circle.gradient).toEqual(paper.defs.firstChild);
    });

    it("must remove gradient definitions when switched to solid fill", function () {
        var gradient = circle.gradient;
        circle.attr('fill', 'none');
        expect(paper.defs.childNodes.length).toEqual(0);
        expect(circle.gradient).not.toBeDefined();
        expect(gradient.parentNode).toBeNull();
    });

    it ("must remove all gradient defs when paper is removed", function () {
        var defs = paper.defs;

        circle.attr('fill', '20-#ff00ff-#00ff00');
        expect(defs.childNodes.length).toEqual(1);

        paper.remove();

        expect(defs.childNodes.length).toEqual(0);
        expect(defs.parentNode).toBeNull();
    });
});
