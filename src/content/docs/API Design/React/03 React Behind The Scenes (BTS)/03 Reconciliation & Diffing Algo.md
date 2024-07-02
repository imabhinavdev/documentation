---
title: Reconciliation & Diffing Algorithm
description: React mein, reconciliation aur diffing algorithm dono hi fundamental concepts hain jo efficient updates aur rendering ke liye zaroori hain. Reconciliation process aur diffing algorithm ka use karke React efficiently DOM ko update karta hai bina unnecessary operations ke.


---
React mein, **reconciliation** aur **diffing algorithm** dono hi fundamental concepts hain jo efficient updates aur rendering ke liye zaroori hain. Reconciliation process aur diffing algorithm ka use karke React efficiently DOM ko update karta hai bina unnecessary operations ke.

#### Reconciliation

Reconciliation ek process hai jo React use karta hai virtual DOM aur real DOM ke beech differences ko identify karne aur inhe efficiently sync karne ke liye.

##### Kaise kaam karta hai?
1. **Virtual DOM Creation**: Jab bhi koi state ya props change hoti hai, React ek naya virtual DOM tree create karta hai.
2. **Diffing Algorithm**: React purane aur naye virtual DOM tree ke beech differences ko identify karta hai.
3. **Updates Apply**: Identified differences ke basis par, React sirf necessary updates ko real DOM par apply karta hai.

#### Diffing Algorithm

Diffing algorithm reconciliation process ka ek part hai jo virtual DOM trees ke beech differences ko efficiently identify karta hai. React ka diffing algorithm kuch assumptions par based hota hai taaki performance ko optimize kiya ja sake:

1. **Two elements of different types will produce different trees**: Agar elements ka type alag hai, React purane tree ko unmount karta hai aur naye tree ko mount karta hai.
   
   Example:
   ```jsx
   // Old Virtual DOM
   <div>
     <span>Old Element</span>
   </div>

   // New Virtual DOM
   <div>
     <p>New Element</p>
   </div>
   ```

   Is example mein, `span` element completely replace ho jata hai `p` element se kyunki unka type alag hai.

2. **The developer can hint at which child elements may be stable across different renders with a key prop**: `key` prop ka use karke, aap elements ko uniquely identify kar sakte hain aur React ko batate hain ki kaunsa element stable rahega across renders.

   Example:
   ```jsx
   // Old Virtual DOM
   <ul>
     <li key="1">Item 1</li>
     <li key="2">Item 2</li>
   </ul>

   // New Virtual DOM
   <ul>
     <li key="2">Item 2</li>
     <li key="1">Item 1</li>
   </ul>
   ```

   Is example mein, `key` props ke through React ko pata chal jata hai ki `Item 1` aur `Item 2` same elements hain, sirf order change hua hai, to React unnecessary re-render nahi karta.

#### Kaise Work karta hai Diffing Algorithm?

1. **Element Type Comparison**: Sabse pehle, purane aur naye elements ke type ko compare kiya jata hai. Agar type different hai, to purana element unmount aur naya element mount ho jata hai.
2. **Props and State Comparison**: Agar type same hai, to props aur state ko compare kiya jata hai aur sirf necessary updates apply kiye jate hain.
3. **Child Elements Comparison**: Child elements ke beech comparison depth-first traversal method ka use karke kiya jata hai. Unique keys ke through, React efficiently elements ko match aur update karta hai.

#### Example

Consider the following example to illustrate how the diffing algorithm works:

```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);

  const moveItem = () => {
    setItems([
      { id: 2, text: 'Item 2' },
      { id: 3, text: 'Item 3' },
      { id: 1, text: 'Item 1' },
    ]);
  };

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <button onClick={moveItem}>Move Item 1</button>
    </div>
  );
}

export default MyComponent;
```

Is example mein, `moveItem` function items ka order change karta hai, lekin kyunki `key` prop use ho raha hai, React efficiently changes ko identify karta hai aur sirf necessary updates apply karta hai.

### Conclusion

React ka reconciliation process aur diffing algorithm DOM updates ko highly efficient banate hain. Virtual DOM ke through differences ko identify karke aur sirf necessary updates ko apply karke, React performance ko optimize karta hai aur seamless user experience provide karta hai. Keys ka use karke aap React ko hint de sakte hain ki kaunse elements stable rahenge, jo further performance ko improve karta hai.