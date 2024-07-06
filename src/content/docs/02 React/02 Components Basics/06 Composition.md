---
title: Composition
description: Composition React mein, components ko chote-chote parts mein divide karne ka ek technique hai jo reusability, maintainability aur readability ko improve karta hai. Composition ka use karke aap complex UI structures ko modular tarike se design kar sakte hain.

---

React mein, **composition** ek technique hai jisme aap chote-chote components ko milakar ek bada component banate hain. Yeh technique reusability, maintainability aur readability ko improve karti hai.

#### Composition ka Concept

Composition ka mool mantra yeh hai ki components ko aise design karo ki woh ek doosre ke andar nest kiye ja sakein aur ek complex UI structure ko banane mein madad kar sakein. 

#### Composition ka Example

Ek simple example se samajhte hain:

```jsx
import React from 'react';

function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}

export default App;
```

Is example mein, `Welcome` ek simple component hai jo naam ko display karta hai. `App` component `Welcome` component ko multiple times use kar raha hai, different props ke saath. Yeh composition ka ek basic example hai.

#### Props.children ka Use

React mein, `props.children` ko use karke aap complex composition patterns bana sakte hain. `props.children` ek special prop hai jo component ke child elements ko represent karti hai.

Example:

```jsx
import React from 'react';

function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>Title</h2>
      <p>This is some content inside the card.</p>
    </Card>
  );
}

export default App;
```

Is example mein, `Card` component `props.children` ko use kar raha hai taaki uske andar nested elements ko render kar sake. `App` component `Card` component ko use karte hue uske andar `h2` aur `p` elements ko nest kar raha hai.

#### Specialization aur Containment

React mein composition do tarikon se ki ja sakti hai: specialization aur containment.

1. **Specialization**:
    - Specialization pattern mein, ek general component ko specific component banane ke liye use kiya jata hai.
    
    Example:
    ```jsx
    import React from 'react';

    function Button(props) {
      return <button className={props.className}>{props.label}</button>;
    }

    function PrimaryButton(props) {
      return <Button className="primary" label={props.label} />;
    }

    function SecondaryButton(props) {
      return <Button className="secondary" label={props.label} />;
    }

    function App() {
      return (
        <div>
          <PrimaryButton label="Submit" />
          <SecondaryButton label="Cancel" />
        </div>
      );
    }

    export default App;
    ```

2. **Containment**:
    - Containment pattern mein, ek component doosre components ko apne andar contain karta hai.

    Example:
    ```jsx
    import React from 'react';

    function Container(props) {
      return <div className="container">{props.children}</div>;
    }

    function App() {
      return (
        <Container>
          <h1>Hello, World!</h1>
          <p>This is a paragraph inside a container.</p>
        </Container>
      );
    }

    export default App;
    ```

### Conclusion

React mein composition ek powerful technique hai jo aapko complex UIs ko modular aur maintainable tarike se build karne ki suvidha deti hai. Props aur `props.children` ka use karke, aap easily reusable components create kar sakte hain aur unhe multiple contexts mein use kar sakte hain. Specialization aur containment ke patterns ko samajhkar, aap apne React applications ko aur bhi effective tarike se design kar sakte hain.