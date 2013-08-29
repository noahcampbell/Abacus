Quintus.Facts = function(Q) {

	Q.Sprite.extend("FactSprite", {
		init: function(props, defaultProps) {
			var defaultProps = {
				font: "48pt Courier",
				textAlign: "",
				fillStyle: "#333"
			};
			this._super(props, defaultProps);
		},

		draw: function(ctx) {
			ctx.fillStyle = this.p.fillStyle;
			ctx.font = this.p.font;
			ctx.textAlign = this.p.textAlign;
			ctx.textBaseline = "top";
			ctx.fillText(this.p.fact.Expression(), 0, 0);
		}
	});

	return Q;
};
