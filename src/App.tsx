import "./App.css";
import MapChart from "./react-simple-maps";
import Legend from "./legend";
import Annotations from "./annotations";

function App() {
  return (
    <div className="main">
      <div className="react-simple-maps-container">
        <div className="legend-large">
          <Legend />
        </div>
        <MapChart />
      </div>
      <div className="legend-small">
        <Legend />
      </div>
      <Annotations />
    </div>
  );
}

export default App;
