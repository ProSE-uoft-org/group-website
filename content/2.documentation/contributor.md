---
draft: false
---

# Contributor

## Project Setup

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
website: https://huakunshen.com
email: huakun.shen@huakunshen.com
---

Anything about yourself.
```

Only `name` field is necessary, other fields are all optional.

### Avatar

It can be a remote image, or a local image. If it's a local image, you should put it in `public/avatar` directory, and use the relative path as the value of `avatar` field. For example, if you put the image in `public/avatar/shen.png`, then the value of `avatar` field should be `/avatar/shen.png`.

### Content

You can add more details about yourself in the markdown file if you want. Standard markdown syntax is fully supported.

This site is built with [`@nuxt/content`](https://content.nuxt.com/) and [`docus`](https://docus.dev/) theme, which gives you more flexibility to customize the content and styling.

Read https://docus.dev/api/components for built-in components you can use. Read author's example at `content/1.members/3.grad-student/Huakun-Shen.md`.

::card-grid
#title
### Terminal Example
#root
:ellipsis
#default
  ::card
  #title
  In Markdown
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
::



</Terminal>

## Pull Request

Fork this repo, make changes, and submit a pull request. The maintainer will merge your changes if everything looks good.

::alert{type="warning"}
Make sure you run the development server locally to make sure your changes look good and doesn't break anything.
::