---
title: States
description: State React components ka ek crucial part hai jo dynamic data ko handle karne mein help karta hai. Normal variables ke comparison mein, state reactive hoti hai aur component ke re-render hone par bhi apni value ko preserve karti hai.


---
React mein, **state** ek aisa concept hai jo component ki dynamic properties ko manage karta hai. State component ke andar rehti hai aur usko sirf wohi component update kar sakta hai. State ko initial value assign ki ja sakti hai aur component ke lifecycle ke dauran yeh value change ho sakti hai.

#### State ko Define aur Use Karna

State ko define karne ke liye, aap `useState` hook ka use karte hain. Yeh hook ek array return karta hai jisme pehla element current state value hoti hai aur doosra element ek function hota hai jo state ko update karta hai.

```jsx
import React, { useState } from 'react';

function Counter() {
  // State ko define kar rahe hain
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
```

Is example mein, `count` state variable hai jisko initial value `0` di gayi hai. `setCount` ek function hai jo `count` ki value ko update karta hai. Har baar jab button click hota hai, `setCount` function ko call kiya jata hai aur `count` ki value increase ho jati hai.

#### State vs Normal Variable

React mein state aur normal variable mein kuch key differences hain:

1. **Reactivity**:
    - **State**: State reactive hoti hai. Matlab, jab bhi state change hoti hai, component re-render hota hai aur updated state ko reflect karta hai.
    - **Normal Variable**: Normal variable reactive nahi hota. Agar aap normal variable ki value change karte hain to component re-render nahi hota.

2. **Preservation**:
    - **State**: State ki value component ke re-render hone par preserve hoti hai.
    - **Normal Variable**: Normal variable ki value component ke har render par reset ho jati hai.

3. **Updates**:
    - **State**: State ko update karne ke liye aapko setter function ka use karna padta hai (e.g., `setCount`).
    - **Normal Variable**: Normal variable ko update karne ke liye aap simply assignment operator (`=`) ka use kar sakte hain.

Example:

```jsx
import React, { useState } from 'react';

function Example() {
  const [stateVariable, setStateVariable] = useState(0);
  let normalVariable = 0;

  function handleClick() {
    setStateVariable(stateVariable + 1);
    normalVariable += 1;
    console.log('Normal Variable:', normalVariable);
  }

  return (
    <div>
      <p>State Variable: {stateVariable}</p>
      <p>Normal Variable: {normalVariable}</p>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default Example;
```

Is example mein, `stateVariable` ko update karne par component re-render hota hai aur updated value display hoti hai. Lekin, `normalVariable` ko update karne par uski updated value sirf console mein dikhai deti hai, UI mein nahi.

### Conclusion

State React components ka ek crucial part hai jo dynamic data ko handle karne mein help karta hai. Normal variables ke comparison mein, state reactive hoti hai aur component ke re-render hone par bhi apni value ko preserve karti hai.