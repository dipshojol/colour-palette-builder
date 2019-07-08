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

const Channel = () => {

  return ();
}

const Swatch = () => {

  return ();
}

const Palette = () => {

  return ();
}

const App = () => {

  const styles = {
    backgroundColor: `rgb(0,0,0)`,
  };

  return (
    <main id="app" className="app">
      <ul className="palette">
        <li className="swatch" style={ styles }>
          <span>rgb(</span>
          <div className="channel">
            <button type="button" className="btn up">+</button>
            <input type="text" className="txt" value="0" />
            <button type="button" className="btn down">-</button>
          </div>
          <div className="channel">
            <button type="button" className="btn up">+</button>
            <input type="text" className="txt" value="0" />
            <button type="button" className="btn down">-</button>
          </div>
          <div className="channel">
            <button type="button" className="btn up">+</button>
            <input type="text" className="txt" value="0" />
            <button type="button" className="btn down">-</button>
          </div>
          <span>);</span>
        </li>
      </ul>
    </main>
  );
}


ReactDOM.render( <App />, document.getElementById(`root`) );

