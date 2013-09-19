describe('My First Test', function () {
	var paper,
		first,
		second,
		end;

	it('Raphael constructor exists', function () {
		expect(Raphael).toBeDefined(true);
	});


	it('Successful paper instantiation', function () {
		paper = Raphael(0, 0, 400, 400);
		expect(paper).toEqual(jasmine.any(Raphael));
	});

	it('Check paper', function () {
		expect(paper).toBeDefined(true);
	});


	describe('My First Shape', function () {

		it('is a rect', function () {
			first = paper.rect(0, 0, 40, 40);
			expect(first).toBe(paper.top);
			expect(first).toBe(paper.bottom);
		});
	});

	describe('My Second Shape', function () {
		it('is a circle', function () {
			second = paper.circle(50, 50, 10);
			expect(second).toBe(paper.top);
			expect(first).toBe(paper.bottom);
		});
	});

});

