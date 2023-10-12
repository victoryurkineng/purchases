#!/bin/bash

mkdir -p ready/app
mkdir ready/docs
mkdir ready/storybook
cp -R dist/apps/account/* ready/app
cp -R dist/apps/docs/* ready/docs
cp -R dist/storybook/storybook/* ready/storybook

