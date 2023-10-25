import db from '../react-simple-maps/db.json';

const Legend = () => {
  return (
    <div className="legend-container">
      <div className="legend-heading-box">
        <div className="g20-sidebox" />
        <p className="legend-heading">G21 Countries</p>
      </div>
      <ul>
        {db.objects.countries.geometries.map((el) => {
          if (el.properties.g20 === 'member') {
            return <li>{el.properties.name}</li>;
          }
        })}
        <li className="heading">African Union</li>
        <li className="heading">European Union</li>
      </ul>

      <div>
        <div className="legend-heading-box">
          <div className="guest-sidebox" />
          <p className="legend-heading">Guest Countries</p>
        </div>
      </div>
      <ul>
        {db.objects.countries.geometries.map((el) => {
          if (el.properties.g20 === 'guest') {
            return <li>{el.properties.name}</li>;
          }
        })}
      </ul>
    </div>
  );
};

export default Legend;
