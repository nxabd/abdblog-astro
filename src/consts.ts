import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "abd >_",
  EMAIL: "heyabdwhd@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "A quiet corner of the web where I write about software engineering, Linux, and digital experiments.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "A summary of my work and experience.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Things I built to learn or solve my own problems.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com",
  },
  {
    NAME: "github",
    HREF: "https://github.com/nxabd",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/xabdwhd",
  },
];
