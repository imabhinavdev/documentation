---
title: React is Declarative
description: React declarative programming paradigm ko follow karta hai jo UI ko specify karne ke liye imperative programming se behtar hai. Declarative nature React ko modern web development ke liye ek popular choice banata hai.

---

React ko declarative programming paradigm ke ek example ke roop mein jaana jaata hai. Declarative programming mein aap batate hain **kya** hona chahiye, **kaise** hona chahiye yeh specify nahi karte, jo imperative programming mein hota hai. React ke declarative nature ne isko modern web development ke liye ek popular choice banaya hai.

#### Declarative Programming kya hai?

Declarative programming ek programming paradigm hai jisme developer ko specify karna hota hai ki result kya chahiye, implementation details nahi batane padte. Isme focus hota hai **what to do** par, na ki **how to do** par. Yeh approach code ko more readable, maintainable aur less error-prone banata hai.

#### React mein Declarative Programming

React mein aap components ko define karte hain jo aapke UI ko represent karte hain. Aap declare karte hain ki UI ka appearance aur behavior kaisa hona chahiye based on current state, aur React ko yeh manage karne dete hain ki kaise changes ko efficiently apply kiya jaaye.

Example:
```jsx
import React, { useState } from 'react';

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

Is example mein, aap declare kar rahe hain ki jab `count` state update hoti hai, `h1` element ko updated `count` value ke saath render hona chahiye. Aapko manually DOM manipulations handle karne ki zarurat nahi hai, React uska khud dhyan rakhta hai.

#### Imperative Programming vs Declarative Programming

| Imperative Programming | Declarative Programming |
| ---------------------- | ----------------------- |
| Focuses on **how** to achieve a result. | Focuses on **what** the result should be. |
| More detailed and step-by-step instructions. | More abstract and higher-level instructions. |
| Typically involves manual DOM manipulations in the context of web development. | React handles DOM manipulations under the hood. |

Example of Imperative Programming:
```js
const list = document.createElement('ul');
document.body.appendChild(list);

const items = ['Item 1', 'Item 2', 'Item 3'];
items.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  list.appendChild(listItem);
});
```

Is example mein, aap manually DOM elements ko create aur append kar rahe hain, jo kaafi verbose aur error-prone ho sakta hai.

#### React ke Fayde as Declarative Framework

1. **Simplicity**: Declarative syntax ki wajah se code simple aur easy to understand hota hai.
2. **Maintainability**: Code ko maintain aur update karna easy hota hai kyunki aap logic aur UI ko alag-alag define karte hain.
3. **Readability**: Declarative code more readable hota hai, jisse team members ko samajhna aur collaborate karna easy hota hai.
4. **Efficient Updates**: React efficiently updates DOM ko manage karta hai using virtual DOM, jo performance ko optimize karta hai.

#### Example: React with Declarative UI

```jsx
import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(['Learn React', 'Build a Project', 'Review Code']);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default TodoList;
```

Is example mein, aap declare karte hain ki `todos` state ke basis par kaise list items render hone chahiye. Jab new todo add hota hai, state update hoti hai aur React automatically DOM ko update kar deta hai.

### Conclusion

React ka declarative approach web development ko more intuitive aur maintainable banata hai. Aap simply specify karte hain ki UI kaisa hona chahiye based on state and props, aur React efficiently usko manage karta hai. Yeh declarative nature React ko ek powerful tool banata hai modern web applications build karne ke liye.