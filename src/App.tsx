import './App.css';
import MapChart from './react-simple-maps';
import Legend from './legend';
import Annotations from './annotations';

function App() {
  return (
    <div className="main">
      <div className="react-simple-maps-container">
        <Legend />
        <MapChart />
        <Annotations />
      </div>
    </div>
  );
}

export default App;
