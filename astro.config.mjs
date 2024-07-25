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
      head: [
        {
          tag: 'script',
          attrs: { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-BTJPBQKFW0' },
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BTJPBQKFW0');
          `,
        },
      ],
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
          label: "Practice Sheets",
          autogenerate: { directory: "03 Practice Sheets" }
        },
        {
          label: "Other Resources",
          autogenerate: { directory: "04 Other Study Material" }
        }
      ],

    }),
  ],
});
