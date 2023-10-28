export default defineAppConfig({
  docus: {
    title: "ProSE",
    description: "UofT Software Engineering Group",
    socials: {
      github: "ProSE-uoft-org/group-website",
    },
    github: {
      dir: "content",
      branch: "main",
      repo: "group-website",
      owner: "ProSE-uoft-org",
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
    footer: {
      credits: {
        icon: "simple-icons:github",
        text: "UofT Software Engineering Group",
        href: "", // TODO: add link
      },
      textLinks: [
        {
          text: "Introduction",
          href: "/introduction",
        },
      ],
      iconLinks: [],
    },
  },
  ui: {
    ut: "#25355A",
  },
});
