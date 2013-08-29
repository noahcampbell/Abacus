Quintus.Registers = function(Q) {

	Q.Sprite.extend("Register", {
		init: function(p) {
			if(isNaN(p.identifier)) throw "Invalid Identifier";
			var defaults = {w:114, h:122};
			this._super(p, defaults);
		},
		identifier: function() {
			return this.p.identifier;
		},
		factResult: function() {
			return this.p.fact.Result();
		},
		draw: function(ctx) {
			ctx.fillRect(-this.p.cx, -this.p.cy, this.p.w, this.p.h);
		}
	});
};
