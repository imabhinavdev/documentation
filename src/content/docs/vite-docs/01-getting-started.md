---
title: Getting Started with Vite
description: A step-by-step guide to getting started with Vite.
---

Welcome to the Vite documentation! This guide will help you set up Vite for your project and get you up and running quickly.

## What is Vite?

Vite is a modern frontend build tool that offers a fast and optimized development experience. It provides instant server start, lightning-fast hot module replacement (HMR), and rich support for TypeScript, JSX, CSS preprocessors, and more.

## Prerequisites

Before you begin, make sure you have Node.js installed on your computer. You can download it from the [official Node.js website](https://nodejs.org/).

## Setting Up Your Project

Follow these steps to set up a new project with Vite:

### Step 1: Create a New Project Directory

First, create a new directory for your project and navigate into it using your terminal or command prompt.

```bash
mkdir my-vite-project
cd my-vite-project
```

### Step 2: Initialize a New Vite Project

Next, initialize a new Vite project. Vite provides a simple command to set up a project with various templates (e.g., vanilla, vue, react). 

```bash
npm create vite@latest
```

You will be prompted to choose a template. For this guide, let's choose the `vanilla` template. You can select other templates based on your needs.

### Step 3: Install Dependencies

Navigate to your new project directory and install the necessary dependencies.

```bash
cd my-project
npm install
```

### Step 4: Start the Development Server

After the dependencies are installed, you can start the development server. This will launch your application in development mode and open it in your default web browser.

```bash
npm run dev
```

You should see your new Vite project running at `http://localhost:3000`.

## Project Structure

Here's a brief overview of the structure of a new Vite project:

- **index.html:** The main HTML file for your project.
- **src:** The source directory where your application code resides.
- **main.js (or main.ts):** The entry file for your application.
- **vite.config.js:** The configuration file for Vite.

## Configuring Vite

You can customize Vite by modifying the `vite.config.js` file. This file allows you to set various options, such as the development server port, build output directory, and plugins.

### Example Configuration

Here’s an example of a basic configuration:

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});
```

## Adding Plugins

Vite's plugin system is built on top of Rollup's plugin interface, making it easy to extend its functionality. 

### Using a Plugin

To use a plugin, install it via npm and add it to your `vite.config.js` file. For example, to use the Vue plugin:

1. Install the plugin:

   ```bash
   npm install @vitejs/plugin-vue
   ```

2. Add it to your configuration file:

   ```javascript
   import { defineConfig } from 'vite';
   import vue from '@vitejs/plugin-vue';

   export default defineConfig({
     plugins: [vue()],
   });
   ```

## Building for Production

When you're ready to deploy your application, use the build command to generate optimized static files for production:

```bash
npm run build
```

The build output will be placed in the directory specified in your `vite.config.js` file (default is `dist`).

## Conclusion

Congratulations! You've successfully set up a Vite project and learned the basics of configuring and extending it. Vite provides a powerful and fast development experience, making it a great choice for modern web development. For more detailed information and advanced usage, refer to the [official Vite documentation](https://vitejs.dev/).

Happy coding!
