import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const now = new Date();

const config: Config = {
  title: "Proof Scaling Meeting",
  tagline: `December 5-6 2024 | Berkeley, California | 20-40 people on AIxFV`,
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://proof-scaling-summit.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "quinn-dougherty", // Usually your GitHub org/user name.
  projectName: "proof-scaling-meeting", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/quinn-dougherty/proof-scaling-meeting/tree/master",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Proof Scaling Meeting",
      logo: {
        alt: "My Site Logo",
        src: "img/proof.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Information",
        },
        {
          href: "https://github.com/quinn-dougherty/proof-scaling-meeting",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Information",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Sponsors",
          items: [
            {
              label: "Near AI",
              to: "https://near.org/ai",
            },
            {
              label: "Beneficial AI Foundation",
              to: "https://www.beneficialaifoundation.org/",
            },
          ],
        },
        {
          title: "Organized by",
          items: [
            { label: "Quinn Dougherty", to: "https://quinnd.net" },
            { label: "Atlas Computing", to: "https://atlascomputing.org/" },
          ],
        },
      ],
      //logo: {
      //  alt: "Near Sponsorship",
      //  src: "img/near.svg",
      //  href: "https://near.org/ai",
      //  // width: 160,
      //  // height: 51,
      //},
      copyright: `Built ${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
