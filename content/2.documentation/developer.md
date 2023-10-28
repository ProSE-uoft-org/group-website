# Notes for Developer

For developer who needs to maintain this site.

## Tech Stack

> Changing content only requires editing Markdown files.
>
> If a developer needs to fully understand and maintain this site, he/she needs to be familiar with the following tech stack.

- JavaScript and TypeScript
- [Vue.js](https://vuejs.org/): A Progressive JavaScript Framework for building web interfaces
- [Nuxt](https://nuxt.com/): (A metaframework based on Vue.js with more functionalities)
- [TailwindCSS](https://tailwindcss.com/) (A utility-first CSS framework. One can customize the style using class names, without touching CSS)
- [`@nuxt/content`](https://content.nuxt.com/): A nuxt module for managing content with Markdown files.
- [`docus`](https://docus.dev/): A nuxt theme for documentation sites based on `@nuxt/content`
  - This theme simplifies the process of building this website, as it comes with nice-looking layout and styling, a documentation-style sidebar, and a search bar.
- CICD: GitHub Action
  - Used for auto building and auto releasing the static site.
  - Read more in [CICD](#cicd) section.

## Project Structure

- The root page is `pages/index.vue`.
- `components/` directory contains all the components used in this site, such as how a member is displayed and how members are listed.
- All content is in `content` directory.
  - [`@nuxt/content`](https://content.nuxt.com/) allows querying the markdown files as a database.
  - The documentation page basically mirrors the directory structure of `content/` on file system. Markdown files in this folder will be rendered as HTML pages and searchable. Read [@nuxt/content/markdown](https://content.nuxt.com/usage/markdown) for advanced usage such as hiding a page in production build.
- The hooks for loading members from markdown files are in `composables/members-query.ts`.
  - Read [@nuxt/content/query-content](https://content.nuxt.com/composables/query-content) for how it works.

## Deployment

[Nuxt](https://nuxt.com/) is a metaframework designed with SSR (server-side rendering) in mind. However, since this site will be deployed on `cs.toronto.edu`, it needs to build compiled into a static site with SSG (static site generation) mode. Read [static hosting](https://nuxt.com/docs/getting-started/deployment#static-hosting) for more details.

Basically, instead of `npm run build`, we need to run `npm run generate` to generate static files. The static files will be generated in `.output/public` directory. Use `npx serve .output/public` to start a local server to preview the static site.

Then we can copy the files in `.output/public` directory to `cs.toronto.edu` server to deploy the site.

Read more about how to get the auto-generated static site files in [CICD](#cicd) section.

## CICD

GitHub Action [.github/ci.yml](../../.github/workflows/ci.yml) is used to auto build the static site. This workflow is run for every push and pull request. It is only used to verify that the changes won't prevent the site from building. It will not deploy the site or generate a release. Maintainers should only merge pull requests after this workflow passes.

GitHub Action [.github/auto-release.yml](../../.github/workflows/auto-release.yml) will generate a new release for every commit to the `main` branch, with generated static site files as release asset. The asset is named `static_website.tar.gz`.

Releases can be found at https://github.com/ProSE-uoft-org/group-website/releases

The latest release is at https://github.com/ProSE-uoft-org/group-website/releases/latest

https://api.github.com/repos/ProSE-uoft-org/group-website/releases/latest gives us the latest release info in JSON format. We can use this to get the download URL of the latest release asset.

A script is provided in [scripts/download_latest_release.sh](../../scripts/download_latest_release.sh), it will download the latest release asset to `static_website.tar.gz`.

::callout

#summary

Note about this script

#content

This script requires `jq` command installed. `jq` is a command-line JSON processor, installed by default on Ubuntu, but not MacOS. Use `brew install jq` to install it on MacOS.

::

Here is the script for reference:

```bash
#!/bin/bash
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
```
