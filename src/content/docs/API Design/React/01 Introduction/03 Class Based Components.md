---

title: Class Based Components
description: Class components React mein ek aur tarika hain components banane ka. Yeh JavaScript classes hoti hain jo `React.Component` ko extend karti hain. Class components mein hum state aur lifecycle methods ka use kar sakte hain, jo ki functional components mein Hooks ke aane se pehle ek unique feature tha.

---
Class components React mein ek aur tarika hain components banane ka. Yeh JavaScript classes hoti hain jo `React.Component` ko extend karti hain. Class components mein hum state aur lifecycle methods ka use kar sakte hain, jo ki functional components mein Hooks ke aane se pehle ek unique feature tha.

Class components ka syntax kuch aisa hota hai:

```jsx
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;
```

Is example mein, `Greeting` ek class component hai jo `React.Component` ko extend karta hai aur `render` method ko define karta hai. `render` method ek JSX ko return karta hai jo UI ko define karta hai.

## Class Components ke Features

### State
Class components mein hum state ko manage kar sakte hain jo component ke internal data ko represent karta hai. State ko define karne ke liye constructor method ka use hota hai aur `this.state` ke through state ko access aur update kiya jata hai.

```jsx
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

## Ab Class Components Kyun Kam Use Hote Hain?

### React Hooks
React Hooks ke aane ke baad functional components ko state aur lifecycle methods manage karne ki capability mil gayi hai. Hooks ne functional components ko zyada powerful aur preferred choice bana diya hai kyunki yeh simpler aur concise hote hain. Functional components ke saath code cleaner aur readable hota hai, aur Hooks ka use karne se hum same functionality achieve kar sakte hain jo pehle sirf class components mein possible thi.

### Simplicity
Functional components simpler aur easy to understand hote hain. Inme less boilerplate code hota hai aur yeh better suited hain modern React practices ke liye.

### Performance
Functional components generally zyada performant hote hain kyunki inme lifecycle methods ki zarurat nahi hoti, jo ki complex aur overhead create kar sakte hain.

### Community Preference
React community aur ecosystem bhi ab functional components aur Hooks ko prefer karta hai. Documentation aur tutorials bhi mostly functional components aur Hooks ko focus karte hain, jo naye developers ke liye easier aur standard practice ban gaya hai.

## Conclusion
Class components React ke ek important part hain aur inke apne advantages hain, jaise state aur lifecycle methods manage karne ki capability. Lekin, React Hooks ke aane ke baad functional components zyada preferred choice ban gaye hain. Functional components simpler, more performant aur easy to write hote hain, jo modern React development practices ke saath better suit karte hain. React community bhi functional components aur Hooks ko zyada promote karti hai, isliye class components ka use dheere-dheere kam hota ja raha hai.