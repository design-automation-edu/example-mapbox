import './App.css';
import { Mapbox } from "./components/Mapbox"
import { Sliders } from "./components/Sliders"

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