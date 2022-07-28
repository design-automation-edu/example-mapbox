import './App.css';

import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import { Mapbox3 } from "./components/Mapbox3"

// ----------------------------------------------------------------------------
// The App
// ----------------------------------------------------------------------------
function App() {
  return (
    <div className="App">
        <Mapbox3 />
    </div>
  );
}
export default App;