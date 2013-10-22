Quintus.MatchBoard = function(Q) {

	function displayHelper(e, i) {
		return function() {
			return e.DisplayMatchRegisterAt(i);
		}
	};

	Q.scene("MatchingBoard", function(stage) {
		if (!stage.options.engine) {
			throw "Engine not specified"
		}
		var e = stage.options.engine;
		var baselinePx = stage.options.baselinePx || Q.height - (Q.height * 0.3);
		var offset = Q.width / e.MatchRegisterCount();
		var h = stage.options.h || 122;
		var w = stage.options.w || 114;
		var maxFacts = stage.options.maxFacts || 4;
		
		for(var i = 0; i < e.MatchRegisterCount(); i++) {
			stage.insert(new Q.Register({
				identifier:i+1, 
				x: offset * i + offset/2 - w/2,
			 	y: baselinePx,
				z: 10,
				registerId: i,
				engine: e,
				fact: {
					Result: displayHelper(e, i)
				}
			}));
		}

		var candidates = e.GenerateExpressionCandidates(maxFacts);
		for(var k = 0; k < maxFacts; k++) {
			stage.insert(new Q.FactSprite({
				fact: candidates[k],
				y: baselinePx + h/2 + 30,
				x: offset * k + offset/2 - w + 50
			}));
		}
	});
};
