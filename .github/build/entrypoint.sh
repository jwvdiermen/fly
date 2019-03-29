#!/bin/sh -l

set -e

echo "HELLO"

git submodule update --init

echo "Install & Bootstrap"
yarn install --no-progress && yarn bootstrap

echo "build"
yarn build && yarn bundle

echo "a'"
