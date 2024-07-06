---
title: Component Life Cycle
description: React functional components mein lifecycle methods ko handle karne ke liye hooks ka use kiya jata hai. Yeh hooks functional components ko bhi class components ke jaisa lifecycle behavior provide karte hain.

---
Functional components mein lifecycle methods ko handle karne ke liye hooks ka use kiya jata hai. Yeh hooks functional components ko bhi class components ke jaisa lifecycle behavior provide karte hain.

#### Lifecycle Phases

React component lifecycle ko broadly teen phases mein divide kiya ja sakta hai:
1. **Mounting**
2. **Updating**
3. **Unmounting**

#### 1. Mounting

Mounting phase mein component DOM mein pehli baar insert hota hai. Is phase mein `useEffect` hook ko use kiya jata hai. 

Example:

```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted!');

    // Clean-up function to handle unmounting
    return () => {
      console.log('Component will unmount!');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

Is example mein, `useEffect` hook ko empty dependency array (`[]`) ke saath use kiya gaya hai, jo ensure karta hai ki yeh effect sirf mounting aur unmounting ke dauran hi chale.

#### 2. Updating

Updating phase mein component re-render hota hai jab props ya state change hoti hai. Is phase mein bhi `useEffect` hook ka use kiya jata hai.

Example:

```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component updated! Count is now:', count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

Is example mein, `useEffect` hook ko `count` dependency ke saath use kiya gaya hai, jo ensure karta hai ki yeh effect tab chale jab `count` state change hoti hai.

#### 3. Unmounting

Unmounting phase mein component DOM se remove hota hai. `useEffect` hook mein clean-up function ko return karke unmounting ko handle kiya jata hai.

Example:

```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log('Component mounted!');

    return () => {
      console.log('Component will unmount!');
    };
  }, []);

  return (
    <div>
      {visible && <p>Component is visible!</p>}
      <button onClick={() => setVisible(false)}>Hide Component</button>
    </div>
  );
}

export default MyComponent;
```

Is example mein, jab `Hide Component` button click hota hai, component DOM se remove ho jata hai aur clean-up function execute hota hai.

### Summary

React functional components mein lifecycle methods ko handle karne ke liye `useEffect` hook ka use hota hai. Yeh hook aapko mounting, updating, aur unmounting phases ko handle karne ka flexibility deta hai. Proper understanding aur usage se aap apne React applications ko efficiently manage kar sakte hain.