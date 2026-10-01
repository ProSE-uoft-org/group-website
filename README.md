# ProSE: Programming Languages and Software Engineering

This is a group website for the Programming Languages and Software Engineering
group at the University of Toronto:

https://www.cs.toronto.edu/~prose/

Please help maintain the website via pull requests.
The website updates itself every day at 9am ET.

## Add or Edit a Member

The site is a single page listing the group members. Each member is a markdown
file in `content/1.members`, in the directory matching their role. Only the
front matter is used.

To add a graduate student, create `content/1.members/3.grad-student/First-Last.md`
and open a pull request:

```markdown
---
name: Huakun Shen
website: https://huakunshen.com
avatar: https://github.com/HuakunShen.png
---
```

- `name` is the only required field.
- `website` (optional): makes the entry clickable.
- `avatar` (optional): an image url, or a local image added to `public/avatar`
  and referred to as e.g. `/avatar/shen.png`.

To move a graduate student to alumni, move their file to `content/1.members/4.alumni` and add:

```markdown
year: 2023
description: PhD, Assistant Professor at ...
```

Alumni are listed as `Name (year, description)` without avatars, sorted by
`year` (required). `description` is the degree, optionally followed by their
current position.

## Development Notes

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
