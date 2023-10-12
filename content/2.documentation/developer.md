# Notes for Developer

For developer who needs to maintain this site.

## Tech Stack

> Chaning content only requires editing Markdown files. 
> 
> If a developer needs to fully understand and maintain this site, he/she needs to be familiar with the following tech stack.

- JavaScript and TypeScript
- [Vue.js](https://vuejs.org/): A Progressive JavaScript Framework for building web interfaces
- [Nuxt](https://nuxt.com/): (A metaframework based on Vue.js with more functionalities)
- [TailwindCSS](https://tailwindcss.com/) (A utility-first CSS framework. One can customize the style using class names, without touching CSS)
- [`@nuxt/content`](https://content.nuxt.com/): A nuxt module for managing content with Markdown files.
- [`docus`](https://docus.dev/): A nuxt theme for documentation sites based on `@nuxt/content`
  - This theme simplifies the process of building this website, as it comes with nice-looking layout and styling, a documentation-style sidebar, and a search bar.


## Project Structure

- The root page is `pages/index.vue`.
- `components/` directory contains all the components used in this site, such as how a member is displayed and how members are listed.
- All content is in `content` directory.
  - [`@nuxt/content`](https://content.nuxt.com/) allows querying the markdown files as a database.
- The hooks for loading members from markdown files are in `composables/members-query.ts`.
  - Read [@nuxt/content/query-content](https://content.nuxt.com/composables/query-content) for how it works.


## Deployment

[Nuxt](https://nuxt.com/) is a metaframework designed with SSR (server-side rendering) in mind. However, since this site will be deployed on `cs.toronto.edu`, it needs to build compiled into a static site with SSG (static site generation) mode. Read [static hosting](https://nuxt.com/docs/getting-started/deployment#static-hosting) for more details.

Basically, instead of `npm run build`, we need to run `npm run generate` to generate static files. The static files will be generated in `.output/public` directory. Use `npx serve .output/public` to start a local server to preview the static site.

Then we can copy the files in `.output/public` directory to `cs.toronto.edu` server to deploy the site.

