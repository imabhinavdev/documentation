import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "imabhinav.dev",
      social: {
        github: "https://github.com/imabhinavdev",
      },
      sidebar: [
        {
          label: "Getting Started",
          link: "/getting-started/home",
        },
        {
          label: "API Design",

          autogenerate: { directory: "API Design" },
        },
        {
          label: "React",
          autogenerate: { directory: "React" },
        },
      ],
    }),
  ],
});
