---
draft: false
---

# Contributor

## Project Setup

If you want to preview the changes locally, you will need to setup the project locally. Adding or editing a new member doesn't require setting up the project locally, simply modify markdown files in `content/1.members` directory.

You will need to install nodejs and run the project with a package manager. Nodejs comes with `npm`, you can use it. But I recommend [`bun`](https://bun.sh/) as it's much faster.

::code-group

```bash [bun]
bun install     # install dependencies
bun dev         # start dev server
bun generate    # generate static files
```

```bash [npm]
npm install
npm run dev
npm run generate
```

```bash [yarn]
yarn install
yarn dev
yarn generate
```

```bash [pnpm]
pnpm install
pnpm dev
pnpm generate
```

::

## Add A New Member

Go to `content/1.members` directory, based on the member's role, add a new markdown file in the corresponding directory. For example, if you want to add a new faculty member, you should add a new markdown file in `content/1.members/faculty` directory. The markdown file should have the following format:

```markdown
---
name: Huakun Shen
description: Master Student
avatar: https://github.com/HuakunShen.png
# website: https://huakunshen.com
website: /members/grad-student/huakun-shen
email: huakun.shen@huakunshen.com
year: 2023 # necessary for an alumni
---

Anything about yourself.
```


::alert{type="warning"}
Only `name` field is necessary, other fields are all optional.
::

::alert{type="warning"}
For alumnis, `year` field is necessary as it will be used to sort alumnis by year.
::

### Avatar

It can be a remote image, or a local image. If it's a local image, you should put it in `public/avatar` directory, and use the relative path as the value of `avatar` field. For example, if you put the image in `public/avatar/shen.png`, then the value of `avatar` field should be `/avatar/shen.png`.

### Website

If you include the `website` field, clicking on your avatar will link to the website you specified. 
<!-- markdown-link-check-disable -->
Otherwise it by default will link to your profile on this website. For example, for me it will link to [/members/grad-student/huakun-shen](/members/grad-student/huakun-shen).
<!-- markdown-link-check-enable -->

<details>
<summary>More Details</summary>

For the `website` field, you can put a complete url that start with `https://`, or use a relative path to link to your profile on this website in case you don't have a website yet.

For example, if you want to link to `https://huakunshen.com`, you can put `https://huakunshen.com` or `/members/grad-student/huakun-shen` as the value of `website` field.

The relative path is just the file path of your markdown file relative to the `content` folder (but without the numbers, the numbers is only for sorting). For example, if your markdown file is at `content/1.members/3.grad-student/Huakun-Shen.md`, then the relative path is `/members/grad-student/huakun-shen`.


However, the website has been configured to auto link to your profile on this website if a `website` field is not specified. So you can just leave it blank if you don't have a website yet.
</details>


### Content

You can add more details about yourself in the markdown file if you want. Standard markdown syntax is fully supported.

This site is built with [`@nuxt/content`](https://content.nuxt.com/) and [`docus`](https://docus.dev/) theme, which gives you more flexibility to customize the content and styling. In markdown, you can write `html` and `css`. [TailwindCSS](https://tailwindcss.com/) is supported to make styling easier.

For example `<span class="bg-red-300">Hello World</span>` gives you <span class="bg-red-500">Hello World</span>.

Read https://docus.dev/api/components for built-in components you can use. Read author's example at `content/1.members/3.grad-student/Huakun-Shen.md`.

Here is a sample of a terminal docus component.

::card
#title
  What is displayed
#description
  ```md
  ::terminal
  ---
  content:
  - npm install
  - npm run dev
  - npm run generate
  ---
  ::
  ```
::

::card
#title
What is displayed
#description
  ::terminal
  ---
  content:
  - npm install
  - npm run dev
  - npm run generate
  ---
  ::

::



## Editing Your Content

Simple content modification can be done fully in browser without a dev environment. In the documentation page, there is a "Edit this page" button at the bottom of the page. Click it to edit the markdown file of the current page.

## Pull Request

Fork this repo, make changes, and submit a pull request. The maintainer will merge your changes if everything looks good.

::alert{type="warning"}
It is recommended you run the development server locally to make sure your changes look good and doesn't break anything.
::

If you don't want to setup a local environment, you can also use cloud dev env in browser after forking it. Here are some sample services.

### Codesandbox

Or simply edit your github url to <code>https://github<span class="text-red-400">box</span>.com/your-github-username/website</code> to open it in codesandbox.

For example, I forked this repo to https://github.com/HuakunShen/ut-prose-group-website, then I can open it in codesandbox with https://githubbox.com/HuakunShen/ut-prose-group-website.

### Gitpod

Prepend `gitpod.io/#` to your github repo url to open it in gitpod.

<code><span class="text-red-400">gitpod.io/#</span>https://github.com/HuakunShen/ut-prose-group-website</code>



