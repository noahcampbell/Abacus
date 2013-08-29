Quintus.MatchBoard = function(Q) {

	Q.scene("MatchingBoard", function(stage) {
		console.log(stage.options.engine);
		for(var i = 1; i <= 4; i++) {
			stage.insert(new Q.Register({identifier:i, x:96 * i, y: 743}));
		}
	});
};
