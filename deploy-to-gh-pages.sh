#!/bin/bash

# deploy script based on https://medium.com/philosophy-logic/53a8270e87db
rm -rf build || exit 0;
mkdir build;
grunt build
( cd build
	git init
	git config user.name "Travis-CI"
	git config user.email "richard.a.harris+travis@gmail.com"
	git add .
	git commit -m "Deployed to Github Pages"
	git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
)