import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: "https://fantastic-cupcake-d048d9.netlify.app/",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-uk</language>`,
  });
}
