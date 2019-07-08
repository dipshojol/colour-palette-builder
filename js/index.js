/* 
Looking at the HTML, identify the potential components:
  - App
    - Palette
      - Swatch
        -Channel
        -Channel
        -Channel
      - Swatch
        -Channel
        -Channel
        -Channel
      - Swatch
        -Channel
        -Channel
        -Channel
    - Palette
      - Swatch
        -Channel
        -Channel
        -Channel
      - Swatch
        -Channel
        -Channel
        -Channel 
*/


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

