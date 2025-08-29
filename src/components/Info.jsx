export default function Info() {
  const infoData = {
    rotation: "58.6 Days",
    revolution: "87.97 Days",
    radius: "2,439.7 KM",
    temperature: "430°c",
  };
  return (
    <article className="info-section">
      <div className="info-container">
        <p>Rotation Time</p>
        <h3>{infoData.rotation}</h3>
      </div>
      <div className="info-container">
        <p>Revolution Time</p>
        <h3>{infoData.revolution}</h3>
      </div>
      <div className="info-container">
        <p>Radius</p>
        <h3>{infoData.radius}</h3>
      </div>
      <div className="info-container">
        <p>Average Temp.</p>
        <h3>{infoData.temperature}</h3>
      </div>
    </article>
  );
}
