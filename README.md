# Colour Palette Builder

## Setup

### Project/Package

At present, to streamline the startup process for students, the [ReactJS](https://reactjs.org/) and [Babel](https://babeljs.io/) libraries are attached directly to the HTML page using `<script>` tags. Likewise, components are attached in the same way, as individual JS files, rather than using `export` and `import` (Babel transpiles to `require`).

### Editor

The suggested code editor for this project is [VS Code](https://code.visualstudio.com/). To run the application, install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension and follow the instructions for starting a live server (`right-click` > `Open with Live Server` should do it).

### Browser

There are plenty of developer tools that aid in the development of React. At minimum, install the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) for Chrome, [developed by Facebook](https://github.com/facebook/react-devtools) (click to see Github code & docs).


## React Variables

### Variable Types

- **local**: Just regular variables stored within the component
- **props**: Setup variables for a component, passed as an attribute and stored in a parameter object {props}
- **state**: Local to a component instance, tracks values over the life of the component, will trigger the component to rerender when modified (so generally, only stores values that would result in modified UI)

```
const Greeting = ( {name} ) => {

  const [freq, setFreq] = useState(0);
  setFreq(++freq);
  const msg = <h1>Hello { name }, for the { freq } time!</h1>;

  return msg;
}
```
In the example above, `msg` is a local variable, `name` is a prop, `freq` is a state, 


### Flow of Information

In React, information flows in one direction using "prop" variables. Props pass values forward (down) to sub components from the parent component:
`App() => ( [ swatches ] ) => Palette() => ( { r, g, b } ) => Swatch() => ( value, setter() ) => Channel()`

However, using a **callback function**, children components can get access to values stored in their parent (for re-rendering, most likely). In the above, the `setter()` is a function that gets passed down from child to parent. When the function is executed from the child component (`Channel()`), it will do something to the parent component (`Swatch()`).


