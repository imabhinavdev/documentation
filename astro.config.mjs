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
          tag: "script",
          attrs: {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-BTJPBQKFW0",
          },
        },
        {
          tag: "script",
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
          label: "C Programming",
          autogenerate: { directory: "01 C Programming" },
          collapsed: true,
        },
        {
          label: "API Design",
          autogenerate: { directory: "02 API Design" },
          collapsed: true,
        },
        {
          label: "React",
          autogenerate: { directory: "03 React" },
          collapsed: true,
        },
        {
          label: "Practice Sheets",
          autogenerate: { directory: "04 Practice Sheets" },
          collapsed: true,
        },
        {
          label: "Other Resources",
          autogenerate: { directory: "05 Other Study Material" },
          collapsed: true,
        },
      ],
    }),
  ],
});
