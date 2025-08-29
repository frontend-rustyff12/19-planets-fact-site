import { useEffect, useState } from "react";
import planetData from "../data/data.json";

export default function Info({ planet }) {
  const [planetInfo, setPlanetInfo] = useState({
    rotation: "",
    revolution: "",
    radius: "",
    temperature: "",
  });

  useEffect(() => {
    const seletedPlanet = planetData.find(
      (item) => item.name.toLowerCase() === planet.toLowerCase()
    );
    setPlanetInfo(seletedPlanet);
  }, [planet]);

  return (
    <article className="info-section">
      <div className="info-container">
        <p>Rotation Time</p>
        <h3>{planetInfo.rotation}</h3>
      </div>
      <div className="info-container">
        <p>Revolution Time</p>
        <h3>{planetInfo.revolution}</h3>
      </div>
      <div className="info-container">
        <p>Radius</p>
        <h3>{planetInfo.radius}</h3>
      </div>
      <div className="info-container">
        <p>Average Temp.</p>
        <h3>{planetInfo.temperature}</h3>
      </div>
    </article>
  );
}
