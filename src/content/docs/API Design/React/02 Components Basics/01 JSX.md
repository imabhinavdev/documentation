---
title: JSX
description: JSX (JavaScript XML) ek syntax extension hai jo React ke saath use hoti hai. Yeh JavaScript ke andar HTML-like syntax ko allow karti hai. JSX React elements ko describe karne ka ek tarika hai. Yeh syntax visually appealing hai aur HTML aur JavaScript ko ek hi jagah pe likhne ki suvidha deta hai.


---
JSX (JavaScript XML) ek syntax extension hai jo React ke saath use hoti hai. Yeh JavaScript ke andar HTML-like syntax ko allow karti hai. JSX React elements ko describe karne ka ek tarika hai. Yeh syntax visually appealing hai aur HTML aur JavaScript ko ek hi jagah pe likhne ki suvidha deta hai.

## JSX Ka Basic Syntax
JSX syntax kaafi similar hai HTML ke syntax se, lekin yeh JavaScript ke andar likha jata hai. Ek simple example dekhen to:

```jsx
const element = <h1>Hello, world!</h1>;
```

Yahan pe, `element` ek JSX element hai jo `<h1>` tag ko represent karta hai. Yeh JSX code transpile hota hai JavaScript function calls mein jo React.createElement ko call karta hai.

## JSX Kaise Kaam Karta Hai?
Jab JSX ko transpile kiya jata hai, yeh `React.createElement` function ko call karta hai. Pichle example ko agar transpile karein to kuch aisa dikhega:

```javascript
const element = React.createElement('h1', null, 'Hello, world!');
```

Yeh function call ek object return karta hai jo React elements ko describe karta hai. Yeh object kuch aisa hota hai:

```javascript
const element = {
  type: 'h1',
  props: {
    children: 'Hello, world!'
  }
};
```

## JSX Ke Features

### Embedding Expressions
JSX mein hum JavaScript expressions ko curly braces `{}` ke andar embed kar sakte hain.

```jsx
const name = 'Abhinav';
const element = <h1>Hello, {name}!</h1>;
```

Yahan pe, `{name}` ko evaluate kiya jata hai aur result ko JSX ke andar embed kiya jata hai.

### JSX Attributes
JSX mein attributes ko HTML ki tarah likha jata hai. Lekin, JavaScript ke reserved words se avoid karne ke liye kuch attributes camelCase mein hote hain. Jaise `class` attribute ko `className` likha jata hai.

```jsx
const element = <div className="greeting">Hello, world!</div>;
```

### Nested Elements
JSX mein elements ko nested bhi kiya ja sakta hai, jaise HTML mein hota hai.

```jsx
const element = (
  <div>
    <h1>Hello, world!</h1>
    <p>Welcome to React!</p>
  </div>
);
```

### Conditional Rendering
JSX mein conditional rendering ke liye JavaScript ke conditional operators ka use kiya jata hai, jaise `if`, `&&`, `? :`.

```jsx
const isLoggedIn = true;
const element = (
  <div>
    {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
  </div>
);
```

### Lists and Keys
JSX mein lists ko render karne ke liye JavaScript arrays ka use kiya jata hai. Har element ko uniquely identify karne ke liye `key` prop ka use hota hai.

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);

const element = <ul>{listItems}</ul>;
```

## JSX Ke Fayde

1. **Readability**: JSX se code more readable aur maintainable hota hai kyunki HTML aur JavaScript ko ek hi jagah likhne ki suvidha milti hai.
2. **Efficiency**: JSX ka use karne se React elements ko describe karna easy hota hai, jo ki efficiently JavaScript function calls mein transpile hota hai.
3. **Developer Experience**: JSX React developers ke liye natural lagta hai jo HTML aur JavaScript ke saath familiar hain. Yeh developer experience ko enhance karta hai.
4. **Integration**: JSX directly JavaScript mein integrate hota hai, jo ki React ke powerful features ka fayda uthane mein madad karta hai.

## Conclusion
JSX React ka ek powerful feature hai jo JavaScript aur HTML ko combine karne ki suvidha deta hai. Yeh syntax extension code ko readable aur maintainable banata hai. JSX ka use karke hum easily React elements ko describe kar sakte hain aur efficient applications develop kar sakte hain. JSX ka samajhna aur use karna relatively easy hai, aur yeh React development process ko smooth aur enjoyable banata hai.