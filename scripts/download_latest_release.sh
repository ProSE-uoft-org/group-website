#!/bin/bash

# Replace with your GitHub username and repository name
USERNAME="ProSE-uoft-org"
REPO="group-website"
ASSET_NAME="static_website.tar.gz"

# Get the download URL for the asset
DOWNLOAD_URL=$(curl -s "https://api.github.com/repos/$USERNAME/$REPO/releases/latest" | jq -r '.assets[] | select(.name == "'$ASSET_NAME'") | .browser_download_url')
echo $DOWNLOAD_URL
if [ -n "$DOWNLOAD_URL" ]; then
    rm $ASSET_NAME
    echo "Downloading $ASSET_NAME..."
    # Download the asset using curl
    curl -LJO -H 'Accept: application/octet-stream' "$DOWNLOAD_URL"
else
    echo "Asset $ASSET_NAME not found in the latest release."
fi
