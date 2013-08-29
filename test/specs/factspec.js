describe("A Fact Sprite", function() {
	var Q, canvas;
	var factsprite, fact;

	beforeEach(function() {
		this.addMatchers(imagediff.jasmine);
	});

  beforeEach(function() {
    canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 200;

    Q = Quintus().include("Sprites, Facts").setup(canvas);
    Q.clear();
  });

  afterEach(function() {
    cancelAnimationFrame(Q.loop);
  });

	beforeEach(function() {
		fact = new Fact("1+1", "1");
		factsprite = new Q.FactSprite({fact:fact});
	});

	it('can be created', function() {
		expect(factsprite).toBeDefined();
		expect(factsprite.p.fact).toBe(fact);
	});

	it('has appropriate defaults', function() {
		expect(factsprite.p.font).toBe("48pt Courier");
		expect(factsprite.p.textAlign).toBe("");
		expect(factsprite.p.fillStyle).toBe("#333");
	});

	it('allows to override the default properties.', function() {
		f = new Q.FactSprite({fact: fact, font: "32pt Arial"});
		expect(f.p.fact).toBe(fact);
		expect(f.p.font).toBe("32pt Arial");
	});

	it('displays the sprite correctly.', function() {
		var img = new Image();
		var src = "images/fact-1-plus-1.png";
		img.addEventListener("error", function() {
			throw "Problem loading sample image:" + src;
		});
		img.src = src;
		waitsFor(function() { return img.complete; });
		var factsprite = new Q.FactSprite({fact: new Fact("1+1", "2"), font: "45px Courier", fillStyle: "#000"});
		factsprite.render(Q.ctx);
		expect(canvas).toImageDiffEqual(img);
	});
});
