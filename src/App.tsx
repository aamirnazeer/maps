import "./App.css";
import MapChart from "./react-simple-maps";
import Legend from "./legend";

function App() {
  return (
    <div className="main">
      <div className="react-simple-maps-container">
        <Legend />
        <MapChart />
        <div className="fact fact1">
          <div className="heading">79%</div>
          <div>of Global GDP</div>
        </div>
        <div className="fact fact2">
          <div className="heading">78%</div>
          <div>of World Population</div>
        </div>
        <div className="fact fact5">
          <div className="heading">75%</div>
          <div>of Worl's Major</div>
          <div>Stock Exchanges</div>
        </div>
        <div className="fact fact4">
          <div className="heading">94%</div>
          <div>of Fortune 500</div>
          <div>Companies</div>
        </div>
        <div className="fact fact3">
          <div className="heading">78%</div>
          <div>of World's</div>
          <div>Biodiversity Hotspots</div>
        </div>
        <div className="fact fact6">
          <div className="heading">82/100</div>
          <div>Top Global</div>
          <div>Universities</div>
        </div>
        <div className="fact fact7">
          <div className="heading">81%</div>
          <div>($2.6tn) of</div>
          <div>Global Education</div>
          <div>Expenditure</div>
        </div>
        <div className="fact fact8">
          <div className="heading">71%</div>
          <div>of Global</div>
          <div>FDI Inflows</div>
        </div>
        <div className="fact fact9">
          <div className="heading">75%</div>
          <div>of Global</div>
          <div>Trade</div>
        </div>
        <div className="fact fact10">
          <div>Home to</div>
          <div className="heading">7/10</div>
          <div>World's Leading</div>
          <div>Financial Center's</div>
        </div>
        <div className="fact fact11">
          <div className="heading">850,000</div>
          <div>Startups And</div>
          <div>1600 Unicorns</div>
        </div>
        <div className="fact fact12">
          <div>Constituting</div>
          <div className="heading">87%</div>
          <div>of World's</div>
          <div>Ports</div>
        </div>
        <div className="fact fact13">
          <div>In 2022 Contributed</div>
          <div className="heading">77%</div>
          <div>of Total Merchandise</div>
          <div>Export Value, 2022</div>
        </div>
        <div className="fact fact14">
          <div>Welcomed</div>
          <div className="heading">74%</div>
          <div>of International</div>
          <div>Tourists</div>
        </div>
        <div className="fact fact15">
          <div>Covers</div>
          <div className="heading">80%%</div>
          <div>of Planet's</div>
          <div>Surface Area</div>
        </div>
      </div>
    </div>
  );
}

export default App;
