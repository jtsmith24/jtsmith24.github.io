import type { SocialObjects } from "./types";

export const SITE = {
  website: "http://jordansmithdev.com",
  author: "Jordan Smith",
  desc: "Just recipes for now",
  title: "JordanSmithDev",
  ogImage: "",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jordan-smith-nashdev/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/jtsmith24",
    linkTitle: `Github`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@JordanSmithFilms",
    linkTitle: `YouTube channel`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:jordansmithdev@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
