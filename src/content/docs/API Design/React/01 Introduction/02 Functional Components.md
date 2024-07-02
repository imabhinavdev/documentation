---
title: Functional Components
description: Functional components React ke basic building blocks hain jo ek simple JavaScript function hote hain. Yeh functions props (properties) ko accept karte hain aur React elements ko return karte hain.


---
Functional components React ke basic building blocks hain jo ek simple JavaScript function hote hain. Yeh functions props (properties) ko accept karte hain aur React elements ko return karte hain. Functional components ko stateless components bhi kaha jata hai, kyunki yeh apne andar state ko manage nahi karte (pehle yeh case tha, lekin ab React Hooks ke aane ke baad functional components mein bhi state manage ki ja sakti hai).

Functional components simple aur lightweight hote hain, aur inhe likhna aur samajhna relatively easy hota hai.

## Functional Component Ka Structure
Functional component ko banane ke liye aap sirf ek JavaScript function likhte hain jo props ko argument ke roop mein accept karta hai aur React elements ko return karta hai.

### Example
```jsx
import React from 'react';

function Greeting() {
  return <h1>Hello, World!</h1>;
}

export default Greeting;
```

Yeh ek simple functional component hai jo `<h1>` element ko return karta hai jisme "Hello, World!" likha hua hai.




## Functional Components ke Advantages
1. **Simplicity**: Functional components simple aur easy to write hote hain.
2. **Performance**: Yeh generally class components se fast hote hain kyunki inhe lifecycle methods ki zarurat nahi hoti.
3. **Hooks**: React Hooks ke aane ke baad functional components state aur lifecycle methods ko manage kar sakte hain.
4. **Reusable**: Yeh reusable hote hain aur code ko modular banate hain.

## Conclusion
Functional components React applications ka ek essential part hain. Yeh simple, efficient aur reusable hote hain. React Hooks ke aane ke baad, functional components ko use karna aur bhi beneficial ho gaya hai kyunki ab hum state aur lifecycle methods ko bhi manage kar sakte hain. Functional components ko use karke aap apne React applications ko clean aur maintainable rakh sakte hain.