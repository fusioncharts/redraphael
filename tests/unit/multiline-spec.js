import Raphael from '../../source/raphael';

describe('multiline update', function () {
	var paper,
	text;

	it ('must remove child tsapns after updating multiline text to single line', function () {
		paper = Raphael(0, 0, 400, 400);
		text = paper.text(50, 50, 'Fusion<br />Charts');
		text.attr('text', 'Fusion Charts');
		expect(text.node.childElementCount).toBe(0);
	});
});

