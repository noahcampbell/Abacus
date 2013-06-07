describe("A Register Sprite", function() {
	var Q, canvas;

	beforeEach(function() {
		this.addMatchers(imagediff.jasmine);
	});

  beforeEach(function() {
    canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 200;

    Q = Quintus().include("Sprites, Registers").setup(canvas);
    Q.clear();
  });

  afterEach(function() {
    cancelAnimationFrame(Q.loop);
  });

	it("contains a numeric identifier", function() {
		var register = new Q.Register(1);
		expect(register.identifier()).toEqual(1);
	});

	it("with a missing identifier in a construction throws an exception", function() {
		expect(function() { new Q.Register(); }).toThrow("Invalid Identifier");
	});

	it("with a non-numeric identifier, throws an exception", function() {
		expect(function() { new Q.Register("foo1")}).toThrow("Invalid Identifier");
	});

	it("allows for falsy identifiers", function() {
		var reg;
		expect(function() { reg = new Q.Register(0); }).not.toThrow();
		expect(reg.identifier()).toEqual(0);
	});
});
