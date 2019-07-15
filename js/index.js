const { useState } = React;

/* 
Looking at the static HTML, identify the structure and potential components:
  - App
    - Palette
      - Swatch
        -Channel
        -Channel
        -Channel
      ...
    ...
*/

// LAB:
// Complete each React Component to return its own static HTML
// Test by creating multiple Swatch components
// Have each Swatch created using 3 properties (one for each channel)
// Ensure the Channel's <input> value is set to the appropriate number to start

// NEXT:
// Create the colours from an Array defined in <App />
// Allow the colours to be interactive
// Store the values for when we return
// Allow the user to create a new Swatch 


// LAB (Week 12):
// - Turn this into a react project
// - Prevent negatives, or greater than 255
// - Allow for multiple Palettes in the App
//    - Note: The CSS for the "App" has to change to accomodate multiple columns


const Channel = ( {value, changeRgb} ) => {

  // Take the prop "value", store it locally as a state variable "num"
  //const [rgb, setRgb] = useState(value);
  const rgb = value;


  console.log(`Render: <Channel />`);
  return (
    <div className="channel">
      <button type="button" className="btn up" onClick={ event => changeRgb( rgb + 10 ) }>+</button>
      <input type="text" className="txt" value={ rgb } onChange={ event => changeRgb( parseInt(event.target.value) ) } />
      <button type="button" className="btn down" onClick={ event => changeRgb( rgb - 10 ) }>-</button>
    </div>
  );
}

const Swatch = ( {red, green, blue} ) => {

  const [r, setR] = useState(red);
  const [g, setG] = useState(green);
  const [b, setB] = useState(blue);


  const styles = {
    backgroundColor: `rgb( ${r}, ${g}, ${b} )`,
  };

  return (
    <li className="swatch" style={ styles }>
      <span>rgb(</span>
      <Channel value={r} changeRgb={setR} />
      <Channel value={g} changeRgb={setG} />
      <Channel value={b} changeRgb={setB} />
      <span>);</span>
    </li>

  );
}

const Palette = ( {swatches} ) => {

  // Create one <Swatch> for each props.swatches
  // Iterate through the Array we received using map
  const allSwatches = swatches.map( (col, i) => <Swatch key={i} red={col.r} green={col.g} blue={col.b} /> )

  return (
    <ul className="palette">
      { allSwatches }
    </ul>
  );
}

const App = () => {

  const palette1 = [
    {r: 255, g: 0, b: 255},
    {r: 0, g: 255, b: 255},
    {r: 255, g: 255, b: 0},
  ];

  // 1. Test adding a second palette Array called `palette2`, modify the `<App />`
  //    return to create a second <Palette /> that uses the values from `palette2`
  // 2. Modify the CSS so that the `grid-template-columns` property of `.app` 
  //    matches the number of pallets you have
  // 3. Create an array called `palettes` that holds the arrays `palette1` and `palette2`
  // 4. `map()` each array to a <Palette />

  return (
    <main id="app" className="app">
      <Palette swatches={ palette1 } />
    </main>
  );
}


ReactDOM.render( <App />, document.getElementById(`root`) );

