Quintus.Facts = function(Q) {

	Q.Sprite.extend("FactSprite", {
		init: function(fact, props, defaultProps) {
			this.p = Q._extend({
				font: "48pt Courier",
				textAlign: "",
				fillStyle: "#333"
			}, defaultProps);

			Q._extend(this.p, props);
			this.fact = fact;
		},

		draw: function(ctx) {
			ctx.fillStyle = this.p.fillStyle;
			ctx.font = this.p.font;
			ctx.textAlign = this.p.textAlign;
			ctx.textBaseline = "top";
			ctx.fillText(this.fact.Expression(), 0, 0);
		}
	});

	return Q;
};
