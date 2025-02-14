# ProSE: Programming Languages and Software Engineering

This is a group website for the Programming Languages and Software Engineering
group at the University of Toronto Computer Science department (https://www.cs.toronto.edu/~prose/).
Containing information about the group, its members, and its projects.

Please help maintain the website via pull requests.
The website gets updated every day at 9am automatically.


## Development

> Here are the notes for maintainers of this site.

[Bun](https://bun.sh/) is used as the package manager and JS runtime to develop this website. Nodejs and npm also work, but bun is much faster.

```bash
bun install     # install dependencies
bun dev         # start dev server
bun generate    # generate static files
```

CICD has been setup to auto build the site and generate a release for every commit to the `main` branch. The release asset is a tarball of the static site files. The tarball is named `static_website.tar.gz`.

For more details about how to contribute to this website and maintain/deploy it, read [content/3.documentation/contributor.md](./content/3.documentation/contributor.md) and [content/3.documentation/developer.md](./content/3.documentation/developer.md).
