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
