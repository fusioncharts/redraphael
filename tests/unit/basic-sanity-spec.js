describe("window", function () {
	it("should have Raphael exposed", function () {
		expect(Raphael).toBeDefined();
	});
});

describe('RedRaphael', function () {
	var paper;


	it('must be able to produce a new paper', function () {
		paper = Raphael(0, 0, 400, 400);
		expect(paper).toEqual(jasmine.any(Raphael));
	});

	describe('Paper', function () {
		var shape1,
			shape2;

		it ('must be able to produce a rectangle', function () {
			shape1 = paper.rect(50, 50, 150, 150);
		});

		it ('first element should be marked as top and bottom', function () {
			expect(shape1).toEqual(paper.top);
			expect(shape1).toEqual(paper.bottom);
		});

		it ('must be able to produce a circle', function () {
			shape2 = paper.circle(50, 50, 10);
		});

		it ('second element must be on top of the first', function () {
			expect(shape1).not.toEqual(shape2);
			expect(shape1).toEqual(paper.bottom);
			expect(shape2).toEqual(paper.top);
		});

		it ('must be able to remove shape', function () {
			shape1.remove();
			expect(shape1.removed).toEqual(true);
			expect(shape1.node).toBeNull();
		});

		it ('should have the ability to be removed', function () {
			expect(paper.remove).toEqual(jasmine.any(Function));
			paper.remove();
			expect(paper.removed).toEqual(true);
		});

		it ('must remove all remaining shapes upon its own removal', function () {
			expect(shape2.removed).toEqual(true);
			expect(shape2.node).toBeNull();
		});

	});

});

