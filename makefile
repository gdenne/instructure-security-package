BUILD=$(shell date +%s)
SEMVER=$(shell jq -r '.version | split("+") | .[0]' package.json)

all: jq git

jq:
	jq '.version = "$(SEMVER)+$(BUILD)"' package.json | sponge package.json
	
git:
	git add .
	git commit -m "Build v$(SEMVER)+$(BUILD)"
	git push
	