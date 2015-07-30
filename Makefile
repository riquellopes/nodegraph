help:
	@echo "Usage make <options>"
	@echo "run"
	@echo "tests"

tests:
	 node_modules/mocha/bin/mocha
run:
	node_modules/.bin/nodemon app.js
