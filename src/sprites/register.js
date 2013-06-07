Quintus.Registers = function(Q) {

	Q.Sprite.extend("Register", {
		init: function(id) {
			if(isNaN(id)) throw "Invalid Identifier";
			this._id = id;
		},
		identifier: function() {
			return this._id;
		}
	});
};
