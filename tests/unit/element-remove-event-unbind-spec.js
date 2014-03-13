describe("Events on elements", function () {
    var paper,
        rect;

    beforeEach(function () {
        paper = new Raphael(10, 10, 400, 400);
        rect = paper.rect(10, 10, 10, 10);
    });

    afterEach(function () {
        rect = null;

        paper.remove();
        paper = null;
    });

    it("should be stored in element.events array", function () {
        var e0,
            e1;

        expect(rect.events).not.toBeDefined();

        rect.click(e0 = function () {
            // some stuff
        });

        expect(Array.isArray(rect.events)).toBeTruthy();
        expect(rect.events.length).toEqual(1);
        expect(rect.events[0].f).toEqual(e0);

        rect.click(e1 = function () {
            // some stuff
        });

        expect(rect.events.length).toEqual(2);
        expect(rect.events[1].f).toEqual(e1);
    });

    it ("should remove all events when paper is removed", function () {
        var events,
            e0,
            e1;

        rect.click(function () {
            // some stuff
        });

        rect.click(function () {
            // some stuff
        });

        events = rect.events;
        spyOn((e0 = events[0]), 'unbind');
        spyOn((e1 = events[1]), 'unbind');

        rect.remove();

        expect(rect.events).toBeNull();
        expect(events.length).toEqual(0);
        expect(e0.unbind).toHaveBeenCalled();
        expect(e1.unbind).toHaveBeenCalled();
    });
});