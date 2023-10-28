#!/bin/bash
ASSET_NAME="static_website.tar.gz"
tar -zxvf $ASSET_NAME
# clear ~/public_html
rm -rf ~/public_html/*
# move the contents of the extracted tarball to ~/public_html
mv static_website/* ~/public_html