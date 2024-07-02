---
title: Conditional Rendering
description: Conditional rendering React mein, elements ko render karne ya nahi karne ke basis par decide karna hota hai. Yeh technique dynamic UI banane mein madad karta hai.

---
React mein, **conditional rendering** ka matlab hai component ke andar kuch elements ko render karna ya nahi karna specific conditions ke basis par. Yeh concept JavaScript ke conditional statements jaisa hi hota hai.

#### Conditional Rendering ke Techniques

Conditional rendering ko achieve karne ke liye React mein kai techniques use hoti hain:

1. **if Statement**
2. **Ternary Operator**
3. **Logical && Operator**
4. **Switch Statement** (Rare cases)

#### 1. if Statement

`if` statement ko use karke aap conditions ke basis par elements ko render kar sakte hain. 

Example:

```jsx
import React from 'react';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}

export default Greeting;
```

Is example mein, `Greeting` component `isLoggedIn` prop ke basis par decide karta hai ki kaunsa message display karna hai.

#### 2. Ternary Operator

Ternary operator ek concise tarika hai conditional rendering karne ka. Yeh ek inline if-else statement jaisa hota hai.

Example:

```jsx
import React from 'react';

function Greeting(props) {
  return (
    <div>
      {props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}

export default Greeting;
```

Is example mein, ternary operator (`condition ? true : false`) use karke conditional rendering ki gayi hai.

#### 3. Logical && Operator

Logical `&&` operator ko use karke aap conditionally elements ko render kar sakte hain. Agar condition true hai to element render hoga, agar false hai to render nahi hoga.

Example:

```jsx
import React from 'react';

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}
    </div>
  );
}

export default Mailbox;
```

Is example mein, agar `unreadMessages.length` greater than 0 hai to `h2` element render hoga.

#### 4. Switch Statement

Rare cases mein aap `switch` statement ka use bhi kar sakte hain jab aapko multiple conditions ko handle karna ho.

Example:

```jsx
import React from 'react';

function Status(props) {
  const status = props.status;
  let message;
  switch (status) {
    case 'success':
      message = <h1>Operation was successful!</h1>;
      break;
    case 'error':
      message = <h1>There was an error.</h1>;
      break;
    case 'loading':
      message = <h1>Loading...</h1>;
      break;
    default:
      message = <h1>Unknown status</h1>;
  }
  return <div>{message}</div>;
}

export default Status;
```

Is example mein, `switch` statement ko use karke different statuses ke basis par different messages display kiye gaye hain.

### Conclusion

React mein conditional rendering ka use karke aap dynamic aur responsive UI bana sakte hain jo user input ya application state ke basis par change hota hai. `if` statement, ternary operator, logical `&&` operator, aur `switch` statement jaise techniques ka use karke aap complex rendering logic ko easily manage kar sakte hain.