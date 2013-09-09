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
		var h = 122;
		var w = 114;
		for(var i = 0; i < e.MatchRegisterCount(); i++) {
			var j = i;
			stage.insert(new Q.Register({
				identifier:i+1, 
				x: offset * i + offset/2 - w/2,
			 	y: baselinePx,
				registerId: i,
				fact: {
					Result: displayHelper(e, i)
				}
			}
			));
		}
	});
};
