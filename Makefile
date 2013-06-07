lib/engine.js: src/sprites/fact.js src/sprites/register.js
	@uglifyjs $^ --compress --mangle --output $@

test/abacusspec.js: test/specs/factspec.js test/specs/registerspec.js
	@uglifyjs $^ --output $@

test: lib/engine.js test/abacusspec.js test/runner.html
	@open test/runner.html

run: test
	@open Game.html

.PHONY: test
