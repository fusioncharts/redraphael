var Raphael = require('../../lib/raphael');

describe("Paper.getById", function () {
    var elementTypes = {
            circle: [50, 50, 40],
            rect: [40, 40, 50, 50, 10],
            ellipse: [50, 50, 40, 20],
            path: ["M10 10L90 90"],
            image: ["fixtures/dude.jpg", 10, 10, 80, 80],
            text: [50, 50, "Raphaël\nkicks\nbutt!"]
        },
        elementStartId = null,
        elementEndId = null,
        paper;

    beforeEach(function () {
        var elementArgs,
            element;

        paper = new Raphael(10, 10, 100, 100);
        for (elementArgs in elementTypes) {
            element = paper[elementArgs].apply(paper, elementTypes[elementArgs], paper.group()); // in group
            if (elementStartId === null) {
                elementStartId = element.id - 1;
            }
            element = paper[elementArgs].apply(paper, elementTypes[elementArgs]); // out group
        }
        elementEndId = element.id;
    });

    afterEach(function () {
        paper.remove();
        paper = null;
        elementStartId = null;
        elementEndId = null;
    });

    it ("must return element when passed a valid id on first run", function () {
        for (var i = elementStartId; i < elementEndId; i++) {
            expect (paper.getById(i)).toBeTruthy();
        }
    });

    it ("must return element when passed a valid id on second run", function () {
        for (var i = elementStartId; i < elementEndId; i++) {
            expect (paper.getById(i)).toBeTruthy();
        }
    });


});