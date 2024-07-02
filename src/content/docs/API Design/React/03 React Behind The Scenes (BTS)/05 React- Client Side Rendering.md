---
title: React - Client-Side Rendering
description: React primarily client-side rendering (CSR) ka use karta hai. Client-side rendering mein, JavaScript browser mein run hota hai aur user ke interactions ke basis par DOM ko dynamically update karta hai. React components ko render karne aur user interactions ko handle karne ke liye JavaScript engine ki zarurat hoti hai.

---
React primarily client-side rendering (CSR) ka use karta hai. CSR mein, JavaScript browser mein run hota hai aur user ke interactions ke basis par DOM ko dynamically update karta hai. React components ko render karne aur user interactions ko handle karne ke liye JavaScript engine ki zarurat hoti hai.

#### Client-Side Rendering (CSR) in React

Client-side rendering mein, server se initial HTML page serve hota hai jo basic HTML structure contain karta hai. JavaScript files ko browser download karta hai aur React application ko initialize karta hai, jo DOM ko dynamically modify aur update kar sakta hai.

**Pros of CSR:**
1. **Rich User Experience**: CSR se highly interactive and responsive user interfaces banayi ja sakti hain.
2. **Reduced Server Load**: Server se sirf initial page load hota hai, baaki interactions client-side par handle hote hain, jisse server load reduce hota hai.
3. **Fast User Interactions**: CSR se page reload ki zarurat nahi hoti, jisse user interactions fast hote hain.

**Cons of CSR:**
1. **Initial Load Time**: JavaScript files ko download aur execute hone mein time lagta hai, jo initial page load ko slow kar sakta hai.
2. **SEO Challenges**: Search engines JavaScript-rendered content ko properly index nahi kar paate, jo SEO ke liye challenge ho sakta hai.
3. **JavaScript Dependency**: CSR JavaScript engine par depend karta hai, agar user ne JavaScript disable kiya hai to application properly work nahi karega.

#### React without JavaScript (JS Engine Disabled)

Agar user ne browser mein JavaScript disable kiya hai, to client-side rendering par based React application kaam nahi karega. User ko sirf initial HTML structure dikhega, aur koi dynamic content ya interactivity available nahi hogi.

Example:
```jsx
// React code
function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

Agar JavaScript disabled hai, to user ko sirf static HTML milega:
```html
<div>
  <h1>Count: 0</h1>
  <button>Increment</button>
</div>
```

#### Solutions for JavaScript Disabled Users

1. **Server-Side Rendering (SSR)**: SSR mein, React components server par render hote hain aur fully rendered HTML client ko send hota hai. Isse initial load time fast hota hai aur SEO improve hota hai. JavaScript disable hone par bhi user ko content visible hota hai.

   Example: Next.js, a popular React framework for SSR.

2. **Static Site Generation (SSG)**: SSG mein, application ko build time par static HTML files mein convert kiya jata hai. Yeh pages fast aur SEO-friendly hote hain.

   Example: Gatsby, a popular React framework for SSG.

3. **Graceful Degradation**: Graceful degradation approach mein, application basic functionality aur content ko provide karta hai even if JavaScript disabled ho. Isse user ko minimum functionality aur content accessible rehta hai.

#### Example of SSR with Next.js

Next.js use karke React application ko server-side render kiya ja sakta hai.

```jsx
import React from 'react';

// Next.js page component
function HomePage({ initialCount }) {
  const [count, setCount] = React.useState(initialCount);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Server-side rendering for initial props
export async function getServerSideProps() {
  return {
    props: {
      initialCount: 0,
    },
  };
}

export default HomePage;
```

Is example mein, `getServerSideProps` function server-side se initial props provide karta hai aur component server-side render hota hai.

### Conclusion

React primarily client-side rendering par depend karta hai, jo rich user experiences provide karta hai. Lekin agar user ne JavaScript disable kiya hai to application proper function nahi karega. Server-side rendering (SSR) aur static site generation (SSG) jaise approaches use karke React applications ko more resilient, fast aur SEO-friendly banaya ja sakta hai. Next.js aur Gatsby jaise frameworks aapko yeh capabilities easily provide karte hain.