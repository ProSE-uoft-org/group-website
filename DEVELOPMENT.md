# Development Notes

[Bun](https://bun.sh/) is used as the package manager. Nodejs and npm also work.

```bash
bun install     # install dependencies
bun dev         # start dev server
bun generate    # generate static files in .output/public
```

The site is built with [Nuxt](https://nuxt.com/), [`@nuxt/content`](https://content.nuxt.com/)
(to query the member files) and [TailwindCSS](https://tailwindcss.com/).
The page is `pages/index.vue`, and `components/` defines how members are displayed.

Since the site is deployed on `cs.toronto.edu`, it is generated as a static site.
Set `BASE_URL` when it is served from a subpath, e.g. `BASE_URL=/~prose bun generate`.

## CICD

- [ci.yml](.github/workflows/ci.yml) checks that the site builds, for every push and pull request.
- [auto-release.yml](.github/workflows/auto-release.yml) creates a
  [release](https://github.com/ProSE-uoft-org/group-website/releases) for every
  commit to `main`, with the static site as the asset `static_website.tar.gz`.
- [scripts/download_latest_release.sh](scripts/download_latest_release.sh)
  downloads the latest release asset (requires `jq`), and
  [scripts/extract_to_public_html.sh](scripts/extract_to_public_html.sh) extracts it to `~/public_html`.
