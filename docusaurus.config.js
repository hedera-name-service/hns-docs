// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hedera Name Service",
  tagline: "",
  url: "https://hashgraph.name/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/hns-square-logo-dark.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "hedera-name-service", // Usually your GitHub org/user name.
  projectName: "hns-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/hedera-name-service/hns-docs",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        blog: false,// {
          // showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false
      },
      docs: {
        sidebar: {
          hideable: true
        }
      },
      languageTabs: [
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
          variant: "axios",
        },
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
          variant: "requests",
        },
        {
          highlight: "php",
          language: "php",
          logoClass: "php",
        },
      ],
      navbar: {
        title: "HNS Documentation",
        logo: {
          alt: "HNS",
          src: "img/hns-square-logo-dark.png"
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Tutorial"
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          // {
          //   label: "Petstore API",
          //   position: "left",
          //   to: "/docs/category/petstore-api"
          // },
          {
            href: "https://github.com/hedera-name-service/hns-docs",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "Docs",
        //     items: [
        //       {
        //         label: "Tutorial",
        //         to: "/docs/intro"
        //       }
        //     ]
        //   },
        //   {
        //     title: "Community",
        //     items: [
        //       {
        //         label: "Stack Overflow",
        //         href: "https://stackoverflow.com/questions/tagged/docusaurus"
        //       },
        //       {
        //         label: "Discord",
        //         href: "https://discordapp.com/invite/docusaurus"
        //       },
        //       {
        //         label: "Twitter",
        //         href: "https://twitter.com/docusaurus"
        //       }
        //     ]
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "Blog",
        //         to: "/blog"
        //       },
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/facebook/docusaurus"
        //       }
        //     ]
        //   }
        // ],
        copyright: `© ${new Date().getFullYear()} Hedera Name Service. All rights reserved.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["php"]
      }
    }),

  // plugins: [
  //   [
  //     "docusaurus-plugin-openapi-docs",
  //     {
  //       id: "openapi",
  //       docsPluginId: "classic",
  //       config: {
  //         resolver: {
  //           specPath: "examples/petstore.yaml",
  //           outputDir: "docs/hns-resolution-api",
  //           downloadUrl:
  //             "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml",
  //           sidebarOptions: {
  //             groupPathsBy: "tag",
  //             categoryLinkSource: "tag"
  //           }
  //         }
  //       }
  //     }
  //   ]
  // ],

  themes: ["docusaurus-theme-openapi-docs"]
};

module.exports = config;
