
## What is the difference between a regular function and an arrow function?

-

## What is a React Component?

- it is a function that returns an element which may then be rendered

## How do you make a React functional component?

- you can use a function to define the component. 
 
  ``
  import React from 'react';

const MyComponent = () => {
  // Component logic and JSX rendering
  return (
    <div>
      {/* JSX content */}
    </div>
  );
};

export default MyComponent;`


## What is the difference between a pure JavaScript function and a functional component?

-pure js function => returns a value while functional component => returns a component which may then be rendered on the screen

## How small is a React component?

- 100 to 200 lines

## Can we make a button or input field component?

- `we define a functional component called Button. It receives two props: onClick (a function to be executed when the button is clicked) and children (the content inside the button). Inside the component, we render a <button> element and attach the onClick function to the onClick event handler of the button. The children prop is used to render the content of the button.`

## Make a reusable Button component

`import React from 'react';

const InputField = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;`

## Make a reusable InputField component

`import React from 'react';

const InputField = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
`

## Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box)

`import React from 'react';

const AlertBox = ({ type, message }) => {
  const alertClassName = `alert ${type}`;

  return (
    <div className={alertClassName}>
      <p>{message}</p>
    </div>
  );
};

export default AlertBox;
`
