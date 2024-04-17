# Using Aphrodite for Inline Styling in React

## Overview

Aphrodite is a library that allows you to write CSS styles directly in your JavaScript files using JavaScript objects. This approach, known as inline styling, can offer several benefits, including scoped styles and dynamic styling based on props or state.

In this guide, we'll walk through the basics of using Aphrodite for inline styling in React applications.

## Installation

First, you'll need to install Aphrodite in your React project. You can do this using npm or yarn:

```bash
npm install aphrodite
```

or

```bash
yarn add aphrodite
```

## Getting Started

Once Aphrodite is installed, you can start using it in your React components.

### Import Aphrodite

Import Aphrodite at the top of your file:

```javascript
import { StyleSheet, css } from 'aphrodite';
```

### Define Styles

You can define your styles using Aphrodite's `StyleSheet.create()` method. This method accepts an object where each key represents a style name and its corresponding value is a JavaScript object containing CSS properties:

```javascript
const styles = StyleSheet.create({
  container: {
    padding: '20px',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'blue',
  },
});
```

### Apply Styles

To apply styles to your components, use the `css` function provided by Aphrodite. Pass the style name as an argument to `css()`:

```javascript
import React from 'react';

const MyComponent = () => {
  return (
    <div className={css(styles.container)}>
      <h1 className={css(styles.heading)}>Hello, Aphrodite!</h1>
    </div>
  );
};

export default MyComponent;
```

### Dynamic Styles

Aphrodite also supports dynamic styling based on props or state. You can use JavaScript expressions within your styles:

```javascript
const styles = StyleSheet.create({
  button: {
    padding: '10px',
    backgroundColor: props => props.primary ? 'blue' : 'gray',
    color: props => props.primary ? 'white' : 'black',
    borderRadius: '5px',
  },
});
```

In your component:

```javascript
const MyButton = ({ primary }) => {
  return (
    <button className={css(styles.button({ primary }))}>
      {primary ? 'Primary Button' : 'Secondary Button'}
    </button>
  );
};
```

## Conclusion

Aphrodite simplifies inline styling in React by allowing you to write CSS styles using JavaScript objects. It provides a convenient way to manage styles within your components and supports dynamic styling based on props or state. Experiment with Aphrodite in your React projects to see how it can enhance your styling workflow.

For more detailed documentation and advanced features, refer to the [Aphrodite documentation](https://github.com/Khan/aphrodite).


