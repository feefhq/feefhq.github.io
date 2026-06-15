import { defineConfig } from "astro/config";
import remarkHeadingAttrs from "./src/lib/remark-heading-attrs.mjs";

export default defineConfig({
  site: "https://feef.io",
  markdown: {
    remarkPlugins: [remarkHeadingAttrs],
    rehypePlugins: [],
  },
});
