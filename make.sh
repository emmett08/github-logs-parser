#!/bin/bash

set -e

# npm test

npm run gl:build

# npm token create --read-only

npm publish

npm install -g github-logs-parser
