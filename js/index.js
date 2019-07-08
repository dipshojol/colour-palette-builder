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

const Channel = (props) => {

  return (
    <div className="channel">
      <button type="button" className="btn up">+</button>
      <input type="text" className="txt" value={props.value} />
      <button type="button" className="btn down">-</button>
    </div>
  );
}

const Swatch = (props) => {

  const styles = {
    backgroundColor: `rgb( ${props.red}, ${props.green}, ${props.blue} )`,
  };

  return (
    <li className="swatch" style={ styles }>
      <span>rgb(</span>
      <Channel value={props.red} />
      <Channel value={props.green} />
      <Channel value={props.blue} />
      <span>);</span>
    </li>

  );
}

const Palette = (props) => {

  // Create one <Swatch> for each props.swatches
  // Iterate through the Array we received using map
  const allSwatches = props.swatches.map( (col, i) => <Swatch key={i} red={col.r} green={col.g} blue={col.b} /> )

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

