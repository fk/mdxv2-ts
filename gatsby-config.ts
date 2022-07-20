import type { GatsbyConfig } from "gatsby"
import remarkGfm from "remark-gfm"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-mdx",
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}

export default config
