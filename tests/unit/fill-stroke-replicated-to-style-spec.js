import Raphael from '../../source/raphael';

describe('elproto.attr', function () {
    var paper,
        shape1;

    it('must be able to produce a new paper and shape', function () {
        paper = Raphael(0, 0, 400, 400);
        shape1 = paper.rect(50, 50, 150, 150);
        expect(paper).toEqual(jasmine.any(Raphael));
        expect(shape1.node).toBeDefined();
    });

    it('must apply hex fill and copy attribute to element style', function () {
        shape1.attr('fill', 'rgb(255, 0, 0)');
        expect(shape1.node.getAttribute('fill')).toBe('#ff0000');
        // expect(shape1.node.style.fill).toBe('rgb(255, 0, 0)');
    });

    it('must apply hex stroke and copy attribute to element style', function () {
        shape1.attr('stroke', 'rgb(255, 0, 0)');
        expect(shape1.node.getAttribute('stroke')).toBe('#ff0000');
        // expect(shape1.node.style.stroke).toBe('rgb(255, 0, 0)');
    });

    it('must apply rgba fill to element', function () {
        shape1.attr('fill', 'rgba(255,0,255,0.5)');

        expect(shape1.node.getAttribute('fill')).toBe('#ff00ff');
        // expect(shape1.node.style.fill).toBe('rgb(255, 0, 255)');

        expect(shape1.node.getAttribute('fill-opacity')).toBe('0.5');
        // expect(shape1.node.style.fillOpacity).toBe('0.5');
    });

    it('must apply rgba stroke to element', function () {
        shape1.attr('stroke', 'rgba(255,0,255,0.5)');

        expect(shape1.node.getAttribute('stroke')).toBe('#ff00ff');
        // expect(shape1.node.style.stroke).toBe('rgb(255, 0, 255)');

        expect(shape1.node.getAttribute('stroke-opacity')).toBe('0.5');
        // expect(shape1.node.style.strokeOpacity).toBe('0.5');
    });

    it('must clear fill and opacity when set to gradient from normal', function () {
        shape1.attr('fill', 'rgba(0,255,0,0.5)');
        // now set to gradient
        shape1.attr('fill', '90-#ff0000-#0000ff');

        expect(shape1.node.getAttribute('fill')).toMatch(/url\('#rr-\d+?-90-_ff0000-_0000ff'\)/);
        expect(shape1.node.style.fill).toBe('');

        expect(shape1.node.getAttribute('fill-opacity')).toBe('1');
    });

    it('must reset fill when set to none from solid', function () {
        shape1.attr('fill', 'rgba(0,0,255,0.5)');
        shape1.attr('fill', 'none');

        expect(shape1.node.getAttribute('fill')).toBe('none');
        // expect(shape1.node.style.fill).toBe('none');

        expect(shape1.node.getAttribute('fill-opacity')).toBeNull();
        // expect(shape1.node.style.fillOpacity).toBe('');
    });

    it('must reset stroke when set to none from solid', function () {
        shape1.attr('stroke', 'rgba(0,0,255,0.5)');
        shape1.attr('stroke', 'none');

        expect(shape1.node.getAttribute('stroke')).toBe('none');
        //expect(shape1.node.style.stroke).toBe('none');

        expect(shape1.node.getAttribute('stroke-opacity')).toBeNull();
        //expect(shape1.node.style.strokeOpacity).toBe('');
    });
});
