describe("Matching Scene", function() {
	var Q, canvas, stage;

	beforeEach(function() {
		this.addMatchers(imagediff.jasmine);
	});

  beforeEach(function() {
    canvas = document.createElement("canvas");
    canvas.width = 640;
    canvas.height = 1136;

    Q = Quintus().include("Scenes, Sprites, Touch, Facts, Registers, MatchBoard")
		Q.setup(canvas);
		Q.touch(Q.SPRITE_ALL);
    Q.clear();
  });

	beforeEach(function() {
		stage = Q.stageScene("MatchingBoard", {});
	});

  afterEach(function() {
    cancelAnimationFrame(Q.loop);
		Q.clearStages()
  });

	it("has four registers", function() {
		expect(Q("Register").length).toBe(4);
	});

	it("correctly places those four registers in a game board", function() {
		expect(stage.locate(96 * 1, 743)).toBeTruthy();
		expect(stage.locate(96 * 2, 743)).toBeTruthy();
		expect(stage.locate(96 * 3, 743)).toBeTruthy();
		expect(stage.locate(96 * 4, 743)).toBeTruthy();
	});
/*
	it("a fact dropped on a register matches and is added to the register", function() {
		var factSprite = new Q.FactSprite({fact: new Fact("1+1", "1"), x:0, y:0, h:1, w:1});
		Q.stage().insert(factSprite);
		factSprite.trigger('touch', {x:0, y:0, origX:0, origY:0, identifier:1, obj:factSprite, scene:null});
		factSprite.trigger('drag', {dx:5, dy:5, origX:0, origY:0, identifier:1, obj:factSprite, scene:null});
		var registers = Q.stage().locate(0,0);
		expect(registers).toBeTruthy();
		console.log(registers);
		expect(registers.length).toBe(1);
		var register = registers.first();
		expect(register.hasMatches()).toBeTruthy();
		expect(Q('FactSprite')).not.toBeDefined();
	});
*/
});
