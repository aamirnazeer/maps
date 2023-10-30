import db from "../react-simple-maps/db.json";

const Legend = () => {
  let list = db.objects.countries.geometries.filter(
    (el) => el.properties.g20 === "member"
  );

  return (
    <div className="legend-container">
      <div>
        <div className="legend-heading-box">
          <div className="g20-sidebox" />
          <p className="legend-heading">G21 Countries</p>
        </div>
        <ul className="two-column-list">
          {list.map((el) => (
            <li key={el.id}>{el.properties.name}</li>
          ))}
          <li className="heading">African Union</li>
          <li className="heading">European Union</li>
        </ul>
      </div>

      <div className="list2">
        <div>
          <div className="legend-heading-box">
            <div className="guest-sidebox" />
            <p className="legend-heading">Guest Countries</p>
          </div>
        </div>
        <ul className="list2">
          {db.objects.countries.geometries.map((el) => {
            if (el.properties.g20 === "guest") {
              return <li>{el.properties.name}</li>;
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Legend;
