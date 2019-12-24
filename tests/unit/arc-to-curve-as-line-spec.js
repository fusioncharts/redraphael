import Raphael from '../../source/raphael';

describe('Arc is treated as a straight line segment when rx = 0 or ry = 0', function(){
    let expectedCurve = ['C', 11, 12, 22, 24, 22, 24];
    it('Arc is treated as a straight line segment when rx = 0 and ry = 0', function(){
        let curve = Raphael.path2curve(["M", "11", "12", "A", "0", "0", "5", "5", "1", "22", "24"]);
        curve[1].forEach((element, idx) => {
            expect(element).toBe(expectedCurve[idx]);
        });
    });

    it('Arc is treated as a straight line segment when rx = 0', function(){
        let curve = Raphael.path2curve(["M", "11", "12", "A", "0", "5", "5", "5", "1", "22", "24"]);
        curve[1].forEach((element, idx) => {
            expect(element).toBe(expectedCurve[idx]);
        });
    });

    it('Arc is treated as a straight line segment when ry = 0', function(){
        let curve = Raphael.path2curve(["M", "11", "12", "A", "5", "0", "5", "5", "1", "22", "24"]);
        curve[1].forEach((element, idx) => {
            expect(element).toBe(expectedCurve[idx]);
        });
    });
});