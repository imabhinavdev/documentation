---
title: React Concepts Explained
description: Learn about key concepts and features in React, a popular JavaScript library for building user interfaces.
---

### Component Lifecycle

**Description:**
React components go through several phases during their lifecycle, from initialization to rendering, updating, and finally unmounting. Each phase offers lifecycle methods that can be overridden to perform certain actions.

- **Mounting Phase:**
  - **constructor:** Initializes state and binds methods.
  - **render:** Returns the JSX to be rendered.
  - **componentDidMount:** Executes after the component is rendered for the first time, ideal for making API calls or initializing subscriptions.

- **Updating Phase:**
  - **componentDidUpdate:** Executes after a component's state or props update, useful for performing side effects after a re-render.
  - **shouldComponentUpdate:** Controls if the component should re-render based on changes in props or state.

- **Unmounting Phase:**
  - **componentWillUnmount:** Executes just before the component is removed from the DOM, useful for cleanup tasks like cancelling network requests or removing event listeners.

### Lists and Keys

**Description:**
When rendering lists in React, each item should have a unique `key` prop assigned to help React identify which items have changed, added, or removed efficiently. Keys should be stable, unique, and derived from the data itself.

```jsx
const items = ['Apple', 'Banana', 'Cherry'];

const listItems = items.map((item) => (
  <li key={item}>{item}</li>
));

return <ul>{listItems}</ul>;
```

### Render Props

**Description:**
Render props is a pattern in React where a component accepts a function as a prop that returns a React element. This allows components to share code and behavior in a flexible and reusable manner.

```jsx
// Parent component
const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
};

// Child component using Render Props
const App = () => (
  <MouseTracker
    render={(position) => (
      <h1>Mouse is at: ({position.x}, {position.y})</h1>
    )}
  />
);
```

### Refs

**Description:**
Refs in React provide a way to access DOM nodes or React elements created in the render method. They are used for imperative operations like focusing an input or triggering animations.

```jsx
import { useRef } from 'react';

const TextInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};
```

### Higher-Order Components (HOC)

**Description:**
Higher-Order Components (HOCs) are functions that accept a component and return a new enhanced component. They enable code reuse, logic abstraction, and can add additional props or behavior to wrapped components.

```jsx
// Example of a higher-order component
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log(`Rendering ${WrappedComponent.name}`);
    return <WrappedComponent {...props} />;
  };
};

// Usage
const EnhancedComponent = withLogger(MyComponent);
```
