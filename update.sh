#!/bin/bash

wget --mirror --convert-links --adjust-extension --page-requisites --no-parent $1
cp -r $1/* .
rm -r $1
