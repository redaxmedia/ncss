#!/usr/bin/env bash

curl --request POST \
	--header "Content-Type: application/json" \
	--header "Accept: application/json" \
	--header "Travis-API-Version: 3" \
	--header "Authorization: token $TRAVIS_TOKEN" \
	--data "@trigger.json" \
	https://api.travis-ci.org/repo/redaxmedia%2Fncss-documentation-sync/requests