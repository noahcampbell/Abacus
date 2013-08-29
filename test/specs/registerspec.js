describe("A Register Sprite", function() {
	var Q, canvas;

	beforeEach(function() {
		this.addMatchers(imagediff.jasmine);
	});

  beforeEach(function() {
    canvas = document.createElement("canvas");
    canvas.width = 640;
    canvas.height = 1136;

    Q = Quintus().include("Scenes, Sprites, Input, Registers").setup(canvas);
    Q.clear();
  });

  afterEach(function() {
    cancelAnimationFrame(Q.loop);
  });

	it("contains a numeric identifier", function() {
		var register = new Q.Register({identifier:1});
		expect(register.identifier()).toEqual(1);
	});

	it("with a missing identifier in a construction throws an exception", function() {
		expect(function() { new Q.Register(); }).toThrow();
	});

	it("with a non-numeric identifier, throws an exception", function() {
		expect(function() { new Q.Register({identifier:"foo1"})}).toThrow("Invalid Identifier");
	});

	it("allows for falsy identifiers", function() {
		var reg;
		expect(function() { reg = new Q.Register({identifier:0}); }).not.toThrow();
		expect(reg.identifier()).toEqual(0);
	});

	it("with a fact", function() {
		var fact = {
			Result: function() { return 1; }
		};
		var register = new Q.Register({identifier:1, fact:fact});
		expect(register.factResult).toBeDefined();
		expect(register.factResult()).toBe(1);
	});

	describe("in a scene", function() {
		var reg, stage;

		beforeEach(function() {
			Q.scene("Foobar", function(stage) {
				reg = stage.insert(new Q.Register({identifier:1, x:0, y:0}));
			});
			Q.stageScene("Foobar");	
			stage = Q.stage();
		});

		afterEach(function() {
			Q.clearStages();
		});
			
		it("can be located in a scene", function() {
		  var stageX = Q.canvasToStageX(2, stage),
					stageY = Q.canvasToStageY(2, stage);
			var found = Q.stage().locate(2,2);
			expect(found).toBeTruthy();
			expect(found.identifier()).toBe(1);
		});

		it("has a height and width", function() {
			expect(reg.p.w).toEqual(114);
			expect(reg.p.h).toEqual(122);	
		});
	});
});
