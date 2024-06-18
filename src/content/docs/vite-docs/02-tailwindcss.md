---
title: Tailwind CSS in Vite
description: Learn how to integrate Tailwind CSS, a utility-first CSS framework, into your Vite project for efficient and customizable styling.

---
Certainly! Based on the reference you provided, here's a concise guide to setting up Tailwind CSS in a Vite project, using React as the template:

---

## Setting Up Tailwind CSS in Vite with React

### Create Your Project

Start by creating a new Vite project using the React template.

```bash
npm create vite@latest my-project -- --template react
cd my-project
```

### Install Tailwind CSS

Install Tailwind CSS and its peer dependencies, and generate configuration files.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure Tailwind CSS Paths

In your `tailwind.config.js`, specify the paths to your template files.

```javascript
// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Add Tailwind Directives to Your CSS

Add Tailwind directives to your main stylesheet (`src/index.css`).

```css
/* src/index.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Start Your Development Server

Run your Vite development server to start using Tailwind CSS.

```bash
npm run dev
```

### Start Using Tailwind in Your Project

Now you can use Tailwind CSS utility classes in your React components.

```jsx
// App.jsx

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}
```

### Conclusion

You've successfully set up Tailwind CSS in your Vite project with React. Tailwind CSS provides utility classes that allow you to rapidly style your components. For more customization options and advanced features, refer to the [official Tailwind CSS documentation](https://tailwindcss.com/).

---

This guide provides a streamlined approach to integrating Tailwind CSS into a Vite project using React, based on the latest recommended practices.