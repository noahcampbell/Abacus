lib/engine.js: src/sprites/fact.js src/sprites/register.js src/scenes/matchboard.js
	@uglifyjs $^ --compress --mangle --output $@

test/abacusspec.js: test/specs/factspec.js test/specs/registerspec.js test/specs/matchingscenespec.js
	uglifyjs $^ --output $@ -b

test: lib/engine.js test/abacusspec.js test/runner.html
	@open test/runner.html

run: test
	@open Game.html

.PHONY: test
