import Raphael from '../../source/raphael';

describe('nbsp support', function () {
	var paper,
	text;

	it ('nbsp support for input string', function () {
		paper = Raphael(0, 0, 400, 400);
		text = paper.text(50, 50, 'Fusion&nbsp;&nbsp;&nbsp;Charts<br>Hello World');
		expect(text.node.children[0].innerHTML).toBe('Fusion   Charts');
		expect(text.node.children[0].style.whiteSpace).toBe('pre');
		expect(text.node.children[1].style.whiteSpace).toBe('');
	});
});

