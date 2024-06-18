---
title: Main Hooks
description: Learn about the main hooks in React, including useState and useEffect.
---


### useState Hook

**Description:**
The `useState` hook is a fundamental hook in React that allows functional components to manage state. It returns a stateful value and a function to update it, facilitating state management within functional components.

**Usage:**
```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

---


### useEffect Hook

**Description:**
The `useEffect` hook allows functional components to perform side effects. It serves as a replacement for lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

**Usage:**
```jsx
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures effect runs only once on mount

  return <p>Timer: {seconds} seconds</p>;
};
```
