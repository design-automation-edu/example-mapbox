import './App.css';
import { Mapbox } from "./components/Mapbox"
import { Sliders } from "./components/Sliders"

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoicGh0aiIsImEiOiJjbDJwd2RsNjYwMGp3M2NyMjc1aDF0Z3o5In0.D6-sXBcXxsk_ZL7KEIDivQ';

// ----------------------------------------------------------------------------
// The App
// ----------------------------------------------------------------------------

function App() {
  return (
    <div className="App">
      <header id="header">
        <p>Testing React with Mapbox.</p>
      </header> 
      <div id="sliders">
        <Sliders />
      </div>
      <div id="view">
        <Mapbox />
      </div>
    </div>
  );
}
export default App;