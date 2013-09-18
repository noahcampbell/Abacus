Quintus.Registers = function(Q) {

	Q.Sprite.extend("Register", {
		init: function(p) {
			if(isNaN(p.identifier)) throw "Invalid Identifier";
			var defaults = {
				w: 114,
				h: 122,
				z: 10,
				textAlign: "center",
				testBaseline: "top"
			};
			this._super(p, defaults);
			this.on("hit", this, "collision");
			this.on("touch")
		},

		identifier: function() {
			return this.p.identifier;
		},

		factResult: function() {
			return this.p.fact.Result();
		},

		draw: function(ctx) {
			ctx.strokeRect(-this.p.cx, -this.p.cy, this.p.w, this.p.h);
			ctx.textAlign = this.p.textAlign;
			ctx.textBaseline = this.p.textBaseline;
			ctx.fillText(this.factResult(), 0, 0);
			ctx.fillText("(" + this.p.engine.MatchesRegisterCountAt(this.p.registerId) + ")", 0, 25);
		},

		collision: function(col) {
			if(col.obj.p.fact) {
				if(this.p.engine.MatchesAt(this.p.registerId, col.obj.p.fact.Result())) {
					col.obj.destroy();
					var maxFacts = 1;
					var candidates = this.p.engine.GenerateExpressionCandidates(maxFacts);
					for(var k = 0; k < maxFacts; k++) {
						this.stage.insert(new Q.FactSprite({
							fact: candidates[k],
							y: 100,
							x: 100
						}));
					}	
				} else {
					col.trigger("reject")
				}
			}
	  },

		touch: function(touch) {
			if(this.p.engine.MatchesRegisterLimitAt(this.p.registerId)) {
				this.p.engine.ClearMatchRegisterAt(this.p.registerId)
			}
	 	}

	});
};
