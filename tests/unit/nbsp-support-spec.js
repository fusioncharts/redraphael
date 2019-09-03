import Raphael from '../../source/raphael';

describe('nbsp support for input string', function () {
    var paper,
        text;

    it('should convert &nbsp; to blank space and change whitespace to preserve', function () {
        paper = Raphael(0, 0, 400, 400);
        text = paper.text(50, 50, 'Fusion&nbsp;&nbsp;&nbsp;Charts<br>Hello World');
        expect(text.node.children[0].innerHTML).toBe('Fusion   Charts');
        expect(text.node.children[0].style.whiteSpace).toBe('pre');
        expect(text.node.children[1].style.whiteSpace).toBe('');
    });
    it('should remove whitespace on update', function () {
        paper = Raphael(0, 0, 400, 400);
        text = paper.text(50, 50, 'Fusion&nbsp;&nbsp;&nbsp;ChartsHello World');
        text.attr('text', 'Fusion Charts');
        expect(text.node.style.whiteSpace).toBe('');
    });
    it('should remove multiple whitespace', function () {
        paper = Raphael(0, 0, 400, 400);
        text = paper.text(50, 50, ' Fusion   &nbsp;   Charts  Hello  World  ');
        expect(text.node.innerHTML).toBe('Fusion   Charts Hello World');
    });
    it('should remove multiple whitespace even if the text is broken down ', function () {
        paper = Raphael(0, 0, 400, 400);
        text = paper.text(50, 50, '  hello <br>    &nbsp;    hey  ');
        expect(text.node.children[1].innerHTML).toBe('  hey');
    });
});
