import Raphael from '../../source/raphael';

describe('Applying gradient to stroke attribute', function () {
  let paper,
    path1,
    path2,
    defs;

  it ("Must have a paper and a path in it", function () {
    paper = new Raphael(10, 10, 400, 400);
    expect(paper).toBeDefined();

    path1 = paper.path('M100,100L200,300L400,300');
    expect(path1).toBeDefined();

    path2 = paper.path('M200,200L150,300L300,400');
    expect(path2).toBeDefined();
  });

  it ("Must not create a gradient definition if stroke is solid", function () {
    defs = paper.defs;
    expect(defs).toBeDefined();
    expect(defs.childNodes.length).toEqual(0);

    path1.attr('stroke', '#ff0000');
    expect(defs.childNodes.length).toEqual(0);
  });

  it ("Must create a gradient definition if stroke is a gradient", function () {
    path1.attr('stroke', '90-#ff0000-#0000ff');
    expect(defs.childNodes.length).toEqual(1);
    expect(path1['stroke-gradient'].parentNode).toEqual(defs);
  });

  it ("Must have a single gradient definition when stroke and fill has same gradient", function () {
    path1.attr('fill', '90-#ff0000-#0000ff');
    expect(defs.childNodes.length).toEqual(1);

    let gradientFill = path1.gradient,
      gradientStroke = path1['stroke-gradient'];
      expect(gradientFill).toEqual(gradientStroke);
  });

  it ("Must have two different gradient definition when stroke and fill has different gradient", function () {
    path1.attr('fill', '90-#00ff00-#0000ff');
    expect(defs.childNodes.length).toEqual(2);

    let gradientFill = path1.gradient,
      gradientStroke = path1['stroke-gradient'];
    expect(gradientFill).not.toEqual(gradientStroke);
  });

  it ("Must not re-use same gradient element if stroke is changed and dispose previous element", function () {
    let prevGradient = path1['stroke-gradient'];
    path1.attr('stroke', '90-#00ff00-#0000ff');
    expect(defs.childNodes.length).toEqual(1);
    expect(path1['stroke-gradient']).not.toEqual(prevGradient);
    expect(prevGradient.parentNode).toBeNull();
  });

  it("Must re-use gradient element if same stroke is applied on multiple paths", function () {
    path2.attr('stroke', '90-#00ff00-#0000ff');
    expect(defs.childNodes.length).toEqual(1);
    expect(path1['stroke-gradient']).toEqual(path2['stroke-gradient']);
  });

  it("Must create a new gradient element if one of the two different path sharing same gradient changes its stroke gradient", function () {
    path2.attr('stroke', '90-#0000ff-#0000ff');
    expect(defs.childNodes.length).toEqual(2);
    expect(path1['stroke-gradient']).not.toEqual(path2['stroke-gradient']);
  });

  it("Must not remove gradeient element if it is still being used by a path as stroke", function () {
    path1.attr('fill', '#0000ff');
    path1.attr('stroke', '90-#0000ff-#0000ff');
    expect(defs.childNodes.length).toEqual(1);
    path1.remove();
    expect(defs.childNodes.length).toEqual(1);
    expect(path2['stroke-gradient']).toEqual(defs.firstChild);
  });

  it("Must remove gradient definitions when switched to solid stroke", function () {
    var strokeGradient = path2['stroke-gradient'];
    path2.attr('fill', '#ff0000');
    expect(defs.childNodes.length).toEqual(0);
    expect(path2['stroke-gradient']).not.toBeDefined();
    expect(strokeGradient.parentNode).toBeNull();
  });

  it ("Must remove all gradient defs when paper is removed", function () {
    path2.attr('stroke', '90-#0000ff-#00ff00');
    path2.attr('fill', '90-#00ff00-#00ff00');
    expect(defs.childNodes.length).toEqual(2);

    paper.remove();
    expect(defs.childNodes.length).toEqual(0);
    expect(defs.parentNode).toBeNull();
  });
})