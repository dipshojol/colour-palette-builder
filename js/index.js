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


// REACT VARIABLE TYPES:
// props = setup variables for a component, passed as an attribute
// state = local to a component, will track values over the life of the component, will trigger rerender
// local = just regular local variables


const Channel = ( {value} ) => {

  // Take the prop "value", store it locally as a state variable "num"
  const [rgb, setRgb] = useState(value);


  console.log(`Render: <Channel />`);
  return (
    <div className="channel">
      <button type="button" className="btn up" onClick={ event => setRgb( rgb + 10 ) }>+</button>
      <input type="text" className="txt" value={ rgb } onChange={ event => setRgb( parseInt(event.target.value) ) } />
      <button type="button" className="btn down" onClick={ event => setRgb( rgb - 10 ) }>-</button>
    </div>
  );
}

const Swatch = ( {red, green, blue} ) => {

  const styles = {
    backgroundColor: `rgb( ${red}, ${green}, ${blue} )`,
  };

  return (
    <li className="swatch" style={ styles }>
      <span>rgb(</span>
      <Channel value={red} />
      <Channel value={green} />
      <Channel value={blue} />
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
      {allSwatches}
    </ul>
  );
}

const App = () => {

  const palette1 = [
    {r: 255, g: 0, b: 255},
    {r: 0, g: 255, b: 255},
    {r: 255, g: 255, b: 0},
  ];

  return (
    <main id="app" className="app">
      <Palette swatches={ palette1 } />
    </main>
  );
}


ReactDOM.render( <App />, document.getElementById(`root`) );

