import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "tom.liu",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "tom-liu.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "Google Sans Code",
      },
      colors: {
        lightMode: {
          light: "#fdfcfa",        // soft warm white, feels inviting
          lightgray: "#e6e4e1",    // muted stone gray
          gray: "#aaa9a6",         // warm neutral gray
          darkgray: "#4b4b4b",     // deep charcoal gray
          dark: "#262626",         // almost black for strong contrast
          secondary: "#355c7d",    // calm deep blue with a touch of slate
          tertiary: "#a8c3b6",     // soft sage green for balance
          highlight: "rgba(168, 195, 182, 0.18)", // gentle greenish highlight
          textHighlight: "#ffe06688",             // warm golden text highlight
        },
        darkMode: {
          light: "#1b1b1e",        // rich near-black with a hint of warmth
          lightgray: "#3d3c40",    // cool muted gray
          gray: "#7a7a7a",         // medium warm gray
          darkgray: "#d5d5d5",     // soft light for contrast text
          dark: "#f2f2f3",         // off-white for inverted scheme
          secondary: "#9cb3c9",    // softened blue-gray for dark mode
          tertiary: "#a8c3b6",     // consistent sage tone
          highlight: "rgba(168, 195, 182, 0.18)", // same greenish glow
          textHighlight: "#e8d95c88",             // muted golden text highlight
        },
      }
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
