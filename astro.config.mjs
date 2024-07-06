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

          autogenerate: { directory: "01 API Design" },
        },
        {
          label: "React",
          autogenerate: { directory: "02 React" },
        },
        {
          label:"Practice Sheets",
          autogenerate: { directory: "03 Practice Sheets" }
        }
      ],
    }),
  ],
});
