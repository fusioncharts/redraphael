describe("RedRaphael", function () {
	it("should be accessible through window scope", function () {
		expect(Raphael)
			.toBeDefined();
	});

	it("should not dirty the window scope other than exposing itself", function () {
		expect(arr_diff(initialGlobalKeys,postloadGlobalKeys))
			.toEqual(["postloadGlobalKeys", "eve", "Raphael"]);
	});

	describe("Creating paper", function () {

		afterEach(function () {

		});
	});

})