---
title: HTML Practice Sheet
description: This practice sheet contains a set of HTML questions to help you practice and test your knowledge.


---


### 1. **What is the difference between block-level and inline elements in HTML?**
**Answer:** Block-level elements take up the full width available and start on a new line (e.g., `<div>`, `<p>`). Inline elements only take up as much width as necessary and don't start on a new line (e.g., `<span>`, `<a>`).

### 2. **Explain the purpose and use of the data-[ ] attribute in HTML5**
**Answer:** The `data-*` attribute is used to store custom data on HTML elements. It's useful for adding extra information that you can access with JavaScript later.

### 3. **How can you include a video in an HTML document?**
**Answer:** Use the `<video>` tag. Attributes like `controls`, `autoplay`, `loop`, and `muted` help control how the video behaves. You can add a `src` attribute to specify the video file.

### 4. **What is the difference between the `<script>` tag placed in the `<head>` section and the `<body>` section of an HTML document?**
**Answer:** A `<script>` in the `<head>` runs before the page is fully loaded, which can slow down page load. In the `<body>`, it runs after the page content has loaded, making the page appear faster.

### 5. **Explain the purpose of the defer and async attributes on the `<script>` tag.**
**Answer:** `defer` delays the script until the page has loaded. `async` runs the script as soon as it's downloaded, without waiting for the rest of the page to load.

### 6. **What is the difference between `<section>`, `<div>`, and `<article>` tags in HTML5?**
**Answer:** `<section>` is for grouping related content. `<div>` is a general-purpose container with no meaning by itself. `<article>` is for independent content, like a blog post.

### 7. **How do you create an accessible form in HTML?**
**Answer:** Use labels for each input, use `aria-*` attributes for additional context, and ensure the form is navigable with a keyboard.

### 8. **Explain the use and benefits of semantic HTML.**
**Answer:** Semantic HTML uses meaningful tags like `<header>`, `<nav>`, `<footer>` that help search engines and screen readers understand the content better.

### 9. **What is the purpose of the `<meta>` tag in HTML?**
**Answer:** `<meta>` provides metadata about the HTML document, like the charset, author, or viewport settings for responsive design.

### 10. **How do you create a responsive image using the `<picture>` element in HTML5?**
**Answer:** Use the `<picture>` element with multiple `<source>` tags to define different images for different screen sizes, making the image responsive.

### 11. **What are web components and how do you create them in HTML?**
**Answer:** Web components are reusable custom elements with their own styles and behavior. You create them using HTML, CSS, and JavaScript.

### 12. **Explain the purpose and usage of the srcset attribute in the `<img>` tag.**
**Answer:** `srcset` allows you to define different image files for different screen sizes or resolutions, making images sharper on high-res screens.

### 13. **How can you create an HTML table with merged cells (both row-wise and column-wise)?**
**Answer:** Use `rowspan` to merge cells vertically and `colspan` to merge cells horizontally.

### 14. **Describe how to create an HTML5 `<audio>` element and explain its attributes.**
**Answer:** Use the `<audio>` tag. Attributes like `controls`, `autoplay`, and `loop` control playback. Use the `src` attribute to specify the audio file.

### 15. **What is the purpose of the `<noscript>` tag in HTML?**
**Answer:** `<noscript>` provides fallback content for users who have JavaScript disabled in their browser.

### 16. **How do you handle browser compatibility issues with HTML5 elements?**
**Answer:** Use feature detection with JavaScript, include polyfills, and test across different browsers to ensure compatibility.

### 17. **Explain the difference between localStorage and sessionStorage in HTML5.**
**Answer:** `localStorage` stores data that persists even after the browser is closed. `sessionStorage` stores data that is cleared when the browser is closed.

### 18. **How can you embed an SVG directly into an HTML document?**
**Answer:** Use the `<svg>` tag to embed the SVG code directly within your HTML file.

### 19. **What is ARIA and how do you use it in HTML to enhance accessibility?**
**Answer:** ARIA (Accessible Rich Internet Applications) attributes add extra information to elements to make them more accessible to screen readers.

### 20. **How do you create a dropdown menu using HTML and CSS only?**
**Answer:** Use a `<select>` tag for simple dropdowns, or use a combination of HTML `<ul>`, `<li>`, and CSS `:hover` styles for custom dropdowns.

### 21. **Explain the concept and use of iframes in HTML.**
**Answer:** An `<iframe>` embeds another HTML page within your page, like a YouTube video or another website.

### 22. **What is the contenteditable attribute and how do you use it?**
**Answer:** The `contenteditable` attribute makes any HTML element editable by the user, allowing them to change the text or content inside it.

### 23. **Describe the difference between the `<b>` and `<strong>` tags in HTML.**
**Answer:** `<b>` makes text bold without adding importance, while `<strong>` makes text bold and indicates that the text is important.

### 24. **How do you use the `<canvas>` element in HTML5, and what are its common use cases?**
**Answer:** The `<canvas>` element is used to draw graphics with JavaScript, like games, charts, or animations.

### 25. **What is the purpose of the hidden attribute in HTML5?**
**Answer:** The `hidden` attribute hides an element from view, making it invisible on the page but still part of the document.

### 26. **How do you create a favicon for your website using HTML?**
**Answer:** Use the `<link>` tag with `rel="icon"` and provide the path to your favicon image, usually a `.ico` file.

### 27. **Explain the use and differences between the `<link>`, `<style>`, and `@import` for including stylesheets in an HTML document.**
**Answer:** 
- `<link>` is used to include external CSS files.
- `<style>` is for adding internal CSS directly in the HTML.
- `@import` is a CSS rule to include stylesheets within other CSS files.

### 28. **How do you create a modal dialog box in HTML and CSS?**
**Answer:** Use a combination of HTML elements (like `<div>`) and CSS for positioning and styling to create a pop-up box that overlays the page.

### 29. **What are custom data attributes and how can they be used in HTML?**
**Answer:** Custom data attributes (`data-*`) store extra information on elements that you can later access and manipulate with JavaScript.

### 30. **How can you create a progress bar in HTML5?**
**Answer:** Use the `<progress>` tag and set the `value` and `max` attributes to show the progress level.

### 31. **Explain the difference between the `<em>` and `<i>` tags in HTML.**
**Answer:** `<em>` adds emphasis and typically italicizes the text, indicating importance. `<i>` just italicizes text without adding emphasis.

### 32. **How do you create a multi-step form in HTML?**
**Answer:** Use multiple `<form>` elements or group sections within a single form, and use JavaScript to navigate between steps.

### 33. **Describe how you can use the `<details>` and `<summary>` tags to create an accordion.**
**Answer:** Wrap content inside `<details>`, and use `<summary>` to create a clickable title that expands or collapses the content.

### 34. **What is the purpose of the translate attribute in HTML5?**
**Answer:** The `translate` attribute specifies whether the content of an element should be translated or not by browsers or translation services.

### 35. **How do you create a responsive navigation bar using HTML and CSS?**
**Answer:** Use a combination of `<nav>`, `<ul>`, and `<li>` tags with CSS for layout and media queries to adjust the navigation for different screen sizes.

### 36. **Explain the concept of shadow DOM in the context of web components.**
**Answer:** The shadow DOM is a way to encapsulate a web component's styles and markup so they don't interfere with the rest of the page.

### 37. **How do you create an HTML document that supports multiple languages?**
**Answer:** Use the `lang` attribute on the `<html>` tag to specify the document's language, and use `<meta charset="UTF-8">` to support various characters.

### 38. **What is the manifest attribute in HTML5, and how is it used?**
**Answer:** The `manifest` attribute is used to specify a manifest file for offline web apps, telling the browser which files to cache.

### 39. **How do you create a collapsible/expandable content section using HTML and CSS?**
**Answer:** Use `<details>` and `<summary>` tags to create sections that users can click to expand or collapse.

### 40. **What is the difference between the alt and title attributes for images in HTML?**
**Answer:** The `alt` attribute provides alternative text for screen readers and when images can't be displayed. The `title` attribute shows a tooltip when you hover over the image.

### 41. **How do you implement lazy loading of images in HTML?**
**Answer:** Use the `loading="lazy"` attribute in the `<img>` tag to delay loading images until they are about to be seen.

### 42. **Explain the purpose of the `<template>` tag in HTML.**
**Answer:** The `<template>` tag holds HTML code that isn't rendered when the page loads but can be used later with JavaScript.

### 43. **How do you create an HTML document with a fixed header and footer?**
**Answer:** Use CSS with `position: fixed;` on the header and footer, ensuring they stay in place while the content scrolls.

### 44. **Describe the use of the autocomplete attribute in form elements.**
**Answer:** The `autocomplete` attribute helps users by automatically filling in form fields with previously entered values. It can be set to `on` or `off`.

### 45. **How do you use the `<output>` tag in HTML5 forms?**
**Answer:** The `<output>` tag is used to display the result of a calculation or user action in a form, like showing the sum of two numbers entered by the user.

### 46. **What is the purpose of the `<time>` tag in HTML5?**
**Answer:** The `<time>` tag represents a specific date, time, or duration, making it machine-readable for things like events, deadlines, or time spans.

### 47. **How do you implement browser caching strategies using HTML5?**
**Answer:** Use the `<meta>` tag with cache-related attributes and configure your server to set caching rules, ensuring that resources are stored in the browser for faster loading.

### 48. **Explain the use of the sandbox attribute in iframes.**
**Answer:** The `sandbox` attribute restricts what an iframe can do, like preventing scripts from running or restricting forms from being submitted, to improve security.

### 49. **How do you create a sticky element using HTML and CSS?**
**Answer:** Use `position: sticky;` in CSS to make an element stick to the top of the page (or a parent element) when scrolling.

### 50. **Describe how to use microdata in HTML to improve SEO.**
**Answer:** Microdata adds structured data to your HTML, helping search engines understand your content better and potentially improving your search ranking.

### 51. **How do you create an image map in HTML and what are its use cases?**
**Answer:** Use the `<map>` and `<area>` tags to create clickable areas on an image, which can link to different pages or actions. It's useful for interactive diagrams.

### 52. **What is the difference between the rel and rev attributes in the `<link>` tag?**
**Answer:** The `rel` attribute defines the relationship between the current document and the linked resource, like `stylesheet`. The `rev` attribute (rarely used) defines the reverse relationship.

### 53. **Explain the purpose of the inputmode attribute in HTML5.**
**Answer:** The `inputmode` attribute helps control the type of keyboard that appears for a specific input, like showing a numeric keypad for number input.

### 54. **How do you create a custom tooltip using HTML and CSS?**
**Answer:** Use an HTML element with CSS `:hover` or `:focus` to display a hidden `<span>` or `<div>` as a tooltip when the user interacts with the element.

### 55. **What are the different types of input fields available in HTML5 forms?**
**Answer:** HTML5 offers various input types like `text`, `email`, `number`, `date`, `color`, `range`, and `file`, each designed for specific kinds of data.

### 56. **Explain the use of the pattern attribute in HTML5 forms.**
**Answer:** The `pattern` attribute allows you to define a regular expression that the input value must match, which is useful for validating things like phone numbers or postal codes.

### 57. **How do you create a responsive grid layout using HTML and CSS?**
**Answer:** Use CSS Grid or Flexbox to create a layout that adjusts to different screen sizes. You can define rows and columns that change based on the screen width.

### 58. **What is the purpose of the `<wbr>` tag in HTML?**
**Answer:** The `<wbr>` (Word Break Opportunity) tag suggests where a line break can occur if needed, helping with word wrapping in long texts.

### 59. **How do you handle form validation using HTML5 attributes?**
**Answer:** Use attributes like `required`, `minlength`, `maxlength`, `pattern`, and `type` to enforce validation rules on form inputs directly in the HTML.

### 60. **Explain the use of the novalidate attribute in the `<form>` tag.**
**Answer:** The `novalidate` attribute disables HTML5 form validation, allowing forms to be submitted without the browser checking for validation rules.

### 61. **How do you create a fullscreen background image using HTML and CSS?**
**Answer:** Use a CSS `background-image` on an element with `position: fixed;`, `width: 100%;`, `height: 100%;`, and `background-size: cover;` to make the image cover the entire background.

### 62. **What is the difference between the `<mark>` and `<cite>` tags in HTML?**
**Answer:** `<mark>` highlights text as important or relevant, usually with a yellow background. `<cite>` is used to reference a title or source, often italicized.

### 63. **How do you create an HTML email template that is compatible with most email clients?**
**Answer:** Use inline CSS, tables for layout, and simple HTML elements. Avoid using JavaScript, as it's not supported in most email clients.

### 64. **Explain the use of the accept attribute in the `<input>` tag for file uploads.**
**Answer:** The `accept` attribute specifies the types of files that are allowed to be uploaded, like `accept="image/*"` for only images.

### 65. **How do you create a fixed sidebar using HTML and CSS?**
**Answer:** Use `position: fixed;` in CSS on a sidebar element to keep it in place as the user scrolls the page.

### 66. **What is the purpose of the `<legend>` tag in HTML forms?**
**Answer:** The `<legend>` tag is used to add a caption to a `<fieldset>`, helping to describe the group of form elements inside.

### 67. **How do you create a print-friendly version of a webpage using HTML and CSS?**
**Answer:** Use a separate CSS file or media query with `@media print` to style the page specifically for printing, like hiding navigation bars and adjusting font sizes.

### 68. **Explain the difference between the `<abbr>` and `<acronym>` tags in HTML.**
**Answer:** The `<abbr>` tag is used for abbreviations, like "Mr." or "etc.," providing an optional `title` attribute to explain the full form. The `<acronym>` tag, which was used for acronyms like "HTML," is now deprecated and replaced by `<abbr>`.

### 69. **How do you create an HTML5 form with placeholder text and floating labels?**
**Answer:** Use the `placeholder` attribute in the `<input>` element for placeholder text. For floating labels, use CSS to position and animate the label when the user types into the input field.

### 70. **What is the draggable attribute and how do you use it in HTML5?**
**Answer:** The `draggable` attribute allows an element to be dragged and dropped. Set `draggable="true"` on an element and use JavaScript to handle the drag and drop events.

### 71. **How do you implement a countdown timer using HTML and JavaScript?**
**Answer:** Use JavaScript to calculate the remaining time, update an HTML element regularly (e.g., every second), and display the countdown.

### 72. **Explain the purpose of the `<base>` tag in HTML.**
**Answer:** The `<base>` tag sets a base URL for all relative links and URLs in a document. For example, if you set `<base href="https://example.com/">`, all links will be relative to this URL.

### 73. **How do you create an HTML5 form with multiple file uploads?**
**Answer:** Use the `<input>` tag with `type="file"` and the `multiple` attribute to allow users to select and upload multiple files at once.

### 74. **What is the `http-equiv` attribute in the `<meta>` tag used for?**
**Answer:** The `http-equiv` attribute in a `<meta>` tag is used to simulate an HTTP response header, such as setting the content type, character set, or refreshing the page.

### 75. **How do you create a responsive carousel using HTML and CSS?**
**Answer:** Use a combination of `<div>` elements for slides and CSS for positioning and transitions. Add media queries to adjust the layout for different screen sizes.

### 76. **Explain the use of the `<output>` tag in HTML5 forms.**
**Answer:** The `<output>` tag is used to display the result of a calculation or other operation, often related to form inputs, such as showing a total price.

### 77. **How do you create a parallax scrolling effect using HTML and CSS?**
**Answer:** Use CSS to create a background image that moves at a different speed than the foreground content when scrolling, giving a 3D effect.

### 78. **What is the difference between the `<optgroup>` and `<option>` tags in HTML forms?**
**Answer:** The `<optgroup>` tag groups related `<option>` tags within a dropdown list, providing a label for each group, while `<option>` represents each selectable item.

### 79. **How do you implement form fieldsets and legends to group related fields in HTML forms?**
**Answer:** Use the `<fieldset>` tag to group related form fields and the `<legend>` tag to provide a caption or title for the group.

### 80. **What is the purpose of the `is` attribute in custom elements in HTML5?**
**Answer:** The `is` attribute extends existing HTML elements to create custom elements, allowing you to define new behaviors while keeping the default functionality.

### 81. **How do you create a sticky footer that always stays at the bottom of the page using HTML and CSS?**
**Answer:** Use CSS with `position: fixed;` or flexbox layout to keep the footer at the bottom of the viewport, regardless of content height.

### 82. **Explain the use of the `spellcheck` attribute in HTML5.**
**Answer:** The `spellcheck` attribute enables or disables spelling and grammar checking in text inputs and content-editable areas. Set `spellcheck="true"` or `"false"` as needed.

### 83. **How do you implement an infinite scrolling feature using HTML and JavaScript?**
**Answer:** Use JavaScript to detect when the user scrolls near the bottom of the page and then automatically load more content, creating an infinite scroll effect.

### 84. **What is the difference between the `<datalist>` and `<select>` tags in HTML forms?**
**Answer:** The `<datalist>` tag provides a list of predefined options that users can choose from when typing in an input field, whereas `<select>` creates a dropdown menu with options.

### 85. **How do you create a toggle switch using HTML and CSS?**
**Answer:** Use a combination of `<input type="checkbox">` for the toggle and CSS for styling to make it look like a switch. You can add a label and animate the switch using CSS.

### 86. **Explain the purpose of the `nonce` attribute in the `<script>` tag.**
**Answer:** The `nonce` attribute adds an extra layer of security by allowing only scripts with a matching `nonce` value to run, helping prevent certain types of attacks like Cross-Site Scripting (XSS).

### 87. **How do you create a breadcrumb navigation using HTML and CSS?**
**Answer:** Use an unordered list (`<ul>`) with list items (`<li>`) for each breadcrumb link, and style it with CSS to separate each link with a symbol like ">" or "/".

### 88. **What is the `itemprop` attribute and how is it used in HTML5 microdata?**
**Answer:** The `itemprop` attribute is part of microdata, used to define properties of an item, making it easier for search engines to understand and index content.

### 89. **How do you create a timeline using HTML and CSS?**
**Answer:** Use a series of `<div>` or `<li>` elements to represent timeline events, and use CSS to position them vertically or horizontally with connecting lines.

### 90. **Explain the difference between `target="_blank"` and `rel="noopener noreferrer"` in anchor tags.**
**Answer:**  
`target="_blank"` makes a link open in a new tab.  
`rel="noopener noreferrer"` keeps your website safe by stopping the new tab from accessing your page’s information.

### 91. **How do you create a progress indicator that shows the current step in a multi-step form using HTML and CSS?**
**Answer:**  
Use HTML elements like `<div>` or `<ul>` to list the steps.  
Use CSS to highlight the current step, showing users where they are in the form.


### 92. **Explain the use of the `tabindex` attribute in HTML and how it affects keyboard navigation.**
**Answer:**  
The `tabindex` attribute sets the order elements are focused when pressing the Tab key.  
It helps users move through the page using the keyboard easily.


### 93. **How do you implement a lightbox effect for images using HTML and CSS?**
**Answer:**  
Create a hidden overlay with a larger image using HTML.  
Use CSS to show the overlay when a smaller image is clicked, making the image appear in a "lightbox."


### 94. **What is the purpose of the `<keygen>` tag in HTML5, and why is it deprecated?**
**Answer:**  
The `<keygen>` tag was used to create a key pair for secure forms.  
It is deprecated because it's not safe and better security methods are now available.


### 95. **How do you create a fixed table header and scrollable body using HTML and CSS?**
**Answer:**  
Use CSS to fix the header row at the top with `position: sticky;` or `fixed;`.  
Set a height and `overflow: auto;` on the table body to make it scrollable.


### 96. **Explain the difference between `aria-labelledby` and `aria-describedby` attributes in HTML for accessibility.**
**Answer:**  
`aria-labelledby` links an element to another that labels it, like a title.  
`aria-describedby` links to another that describes it, giving more information.


### 97. **How do you create a collapsible sidebar navigation menu using HTML and CSS?**
**Answer:**  
Build the sidebar with HTML using `<div>` or `<nav>`.  
Use CSS to hide or show the menu when a button is clicked, making it collapsible.


### 98. **What is the `loading` attribute in the `<img>` tag, and how do you use it for lazy loading images?**
**Answer:**  
The `loading` attribute can be set to `lazy` in an `<img>` tag.  
This makes the image load only when it's about to be seen, saving time and data.


### 99. **How do you implement a custom file upload button using HTML and CSS?**
**Answer:**  
Hide the default file input with CSS.  
Create a styled button that, when clicked, triggers the hidden file input to open the file chooser.


### 100. **Explain the use and differences between `preload` and `prefetch` in the `<link>` tag.**
**Answer:**  
`preload` tells the browser to load important resources early, like a main stylesheet.  
`prefetch` tells the browser to load resources it might need soon, like a next page, to make things faster.
