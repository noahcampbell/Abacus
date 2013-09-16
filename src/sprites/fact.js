Quintus.Facts = function(Q) {

	Q.Sprite.extend("FactSprite", {
		init: function(props) {
			var defaultProps = {
				font: "48px Courier",
				textAlign: "center",
				textBaseline: "middle",
				fillStyle: "#333",
				w:100,
				h:48,
			};
			this._super(props, defaultProps);
			this.on("drag");
			this.on("touch");
		},

		draw: function(ctx) {
			ctx.fillStyle = this.p.fillStyle;
			ctx.font = this.p.font;
			ctx.textAlign = this.p.textAlign;
			ctx.textBaseline = this.p.textBaseline;
			ctx.fillRect(0,0,1,1);
			ctx.fillText(this.p.fact.Expression(), 0, 0);
			this.p.w = ctx.measureText(this.p.fact.Expression())
		},

		touch: function(touch) {
			console.log(touch)
	  },

		drag: function(touch) {
			console.log(touch)
			this.p.x = touch.origX + touch.dx;
			this.p.y = touch.origY + touch.dy;
		}
	});

	return Q;
};
