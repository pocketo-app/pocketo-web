#!/bin/bash

# http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -e
set -u

# https://www.shellcheck.net/
# Unavailable in POSIX sh
set -o pipefail
IFS=$'\n\t'

APP_IMAGE=$1
CONTAINER_NAME=pocketo-web
CONTAINER_PATH=/output

# Remove the stopped previous container
# Skip if not found, and log the error if the container is running
docker rm $CONTAINER_NAME || true

# Run Docker image
docker run \
	--name $CONTAINER_NAME \
	--mount type=bind,source="$(pwd)",target=$CONTAINER_PATH \
	"$APP_IMAGE"
