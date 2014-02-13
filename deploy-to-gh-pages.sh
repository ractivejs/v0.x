#!/bin/bash

# deploy script based on https://medium.com/philosophy-logic/53a8270e87db
if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
	echo "Deploy script running..."
	( cd build
		# grunt copy task doesn't seem to work here...
		cp ../root/* ./

		git init
		git config user.name "Travis-CI"
		git config user.email "richard.a.harris+travis@gmail.com"
		git add .
		git commit -m "Deployed to Github Pages"
		git push --force "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
	)
fi