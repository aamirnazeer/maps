import './App.css';
import MapChart from './react-simple-maps';
import Legend from './legend';

function App() {
  return (
    <div className="main">
      <div className="react-simple-maps-container">
        <Legend />
        <MapChart />
      </div>
    </div>
  );
}

export default App;
