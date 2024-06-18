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
          label: "Vite",
          autogenerate: { directory: "vite-docs" },
        },
      ],
    }),
  ],
});
