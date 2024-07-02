---
title: Props
description: Props React mein ek fundamental concept hai jo components ke data ko pass karne aur share karne mein madad karta hai. Props ek way hai parent component se child component tak data ko transmit karne ka.

---

Props (short for properties) React mein ek fundamental concept hai jo components ke data ko pass karne aur share karne mein madad karta hai. Props ek way hai parent component se child component tak data ko transmit karne ka.

### Props Ka Istemal Kaise Hota Hai?
React mein, parent component apne child component ko props ke roop mein data provide karta hai. Props immutable (unchangeable) hote hain, yaani ki child component props ko directly change nahi kar sakta, sirf read kar sakta hai.

### Props Ka Syntax
Props ko child component tak pass karne ke liye, parent component ke JSX tag ke andar attributes ke roop mein pass kiya jata hai. Example dekhte hain:

```jsx
// Parent Component
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  return <ChildComponent name="Abhinav" age={21} />;
}

export default ParentComponent;

// Child Component
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default ChildComponent;
```

Is example mein, `ParentComponent` `ChildComponent` ko `name` aur `age` props ke roop mein data pass kar raha hai. `ChildComponent` props ko receive karta hai aur render karta hai.

### Props Ka Benefit
1. **Reusability**: Props components ko reusable banata hai kyunki data ko parent component se child component tak easily transmit kiya ja sakta hai.
2. **Component Communication**: Props ke through components ke beech communication hoti hai, jo ki React applications ko modular aur maintainable banata hai.
3. **Dynamic UI**: Props ka use karke dynamic data ko display karna easy hota hai, jaise ki user information, list items, etc.

### Props Ke Type
1. **Strings**: Props strings ke roop mein pass kiya ja sakta hai.
   ```jsx
   <ChildComponent name="Abhinav" />
   ```

2. **Numbers**: Props numbers ke roop mein pass kiya ja sakta hai.
   ```jsx
   <ChildComponent age={21} />
   ```

3. **Boolean**: Props boolean values ke roop mein pass kiya ja sakta hai.
   ```jsx
   <ChildComponent isActive={true} />
   ```

4. **Functions**: Props functions ke roop mein pass kiya ja sakta hai, jo child component mein use kiya ja sakta hai.
   ```jsx
   <ChildComponent onClick={handleClick} />
   ```

5. **Objects**: Props objects ke roop mein pass kiya ja sakta hai.
   ```jsx
   <ChildComponent user={{ name: 'Abhinav', age: 21 }} />
   ```

### Default Props
Components mein default props bhi define kiye ja sakte hain jo agar parent component se specific prop pass nahi kiya gaya ho, tab use hote hain. Example:

```jsx
function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

ChildComponent.defaultProps = {
  name: 'Guest',
  age: 18
};

export default ChildComponent;
```

Is example mein, agar `ParentComponent` `name` aur `age` props nahi pass karta hai to `ChildComponent` default values use karega (`name: 'Guest'`, `age: 18`).

## Conclusion
Props React mein component communication aur data transfer ka ek powerful mechanism hai. Props components ko reusable banata hai aur dynamic data ko manage karne mein madad karta hai. Props immutable nature se ensure karta hai ki data flow predictable aur maintainable rahe, jo React applications ke development ko streamline karta hai.