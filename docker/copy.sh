#!/bin/sh

# http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -e
set -u

# https://www.shellcheck.net/
# Unavailable in POSIX sh
# set -o pipefail
# IFS=$'\n\t'

# Mount to /output, but static files are located at /output/dist/**
MOUNT_DIR=/output
STATIC_DIR=$MOUNT_DIR/dist/

# Clear and recreate static directory
echo Clear existing files in $STATIC_DIR
rm -rf $STATIC_DIR
mkdir -p $STATIC_DIR

# Copy bundle files to static directory
echo Copy files to $STATIC_DIR
cp -r /workspace/dist/** $STATIC_DIR

echo Done
