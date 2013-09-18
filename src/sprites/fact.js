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
				z:0,
			};
			this._super(props, defaultProps);
			this.on("drag");
			this.on("touchEnd");
			this.on("reject");
		},

		draw: function(ctx) {
			ctx.fillStyle = this.p.fillStyle;
			ctx.font = this.p.font;
			ctx.textAlign = this.p.textAlign;
			ctx.textBaseline = this.p.textBaseline;
			ctx.fillRect(0,0,1,1);
			ctx.fillText(this.p.fact.Expression(), 0, 0);
			this.p.w = ctx.measureText(this.p.fact.Expression()).width;
		},


		touchEnd: function(touch) {
			try {
				this.stage.collide(this, {maxCol: 1}); // why macCol doesn't default to 1???
			} catch(e) {
				this.p.x = touch.origX;
				this.p.y = touch.origY;
			}
			console.log(this.p.z)
		},

		reject: function() {
			this.p.x = touch.p.origX;
			this.p.y = touch.p.origY;
		},

		drag: function(touch) {
		  this.p.origX = touch.origX;
			this.p.origY = touch.origY;	
			this.p.x = touch.origX + touch.dx;
			this.p.y = touch.origY + touch.dy;
		}
	});

	return Q;
};
