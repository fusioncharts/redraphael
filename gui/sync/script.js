var paper = new Raphael(0, 0, 500, 500),
	h = paper.rect(0, 0, 500, 500),
	a = paper.rect(0, 0, 50, 50),
	b = paper.rect(450, 50, 50, 50),
	c = paper.rect(400, 450, 50, 50),
	d = paper.rect(0, 400, 50, 50),
	e = paper.rect(100, 225, 50, 50),
	log = console.log.bind(console),
	animTime = 5000,
	animObj = Raphael.animation({
        x : 300
    }, animTime, 'linear', function () {
    	log('over');
    });

// Animating main element
e.hide();
e.animate(animObj);

a.animateWith(e, animObj, {
	x: 450
}, animTime, 'linear', function () {
	log('a ended');
}, {
	end: 0.25,
	hookFn : function () {
		log('a started');
	}
});

b.animateWith(e, animObj, {
	y: 450
}, animTime, 'linear', function () {
	log('b ended');
}, {
	start: 0.25,
	end: 0.5,
	hookFn : function () {
		log('b started');
	}
});

c.animateWith(e, animObj, {
	x: 0
}, animTime, 'linear', function () {
	log('c ended');
}, {
	start: 0.5,
	end: 0.75,
	hookFn : function () {
		log('c started');
	}
});

d.animateWith(e, animObj, {
	y: 0
}, animTime, 'linear', function () {
	log('d ended');
}, {
	start: 0.75,
	hookFn : function () {
		log('d started');
	}
});