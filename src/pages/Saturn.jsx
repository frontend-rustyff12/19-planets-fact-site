import { useState, useEffect } from "react";
import planetData from "../data/data.json";
export default function Saturn() {
  const [curTab, setCurTab] = useState("overview");
  const [pageData, setPageData] = useState({
    name: "Saturn",
    content: "",
    source: "",
    image: "",
  });
  function handleClick(e) {
    setCurTab(e.target.value);
  }

  useEffect(() => {
    const infoData = planetData.find(
      (item) => item.name.toLowerCase() === pageData.name.toLowerCase()
    );
    const infoContent = infoData[curTab].content;
    const infoSource = infoData[curTab].source;
    const imageName =
      curTab === "overview"
        ? "planet"
        : curTab === "structure"
        ? "internal"
        : curTab === "geology"
        ? "geology"
        : "";
    const infoImage = infoData.images[imageName];
    setPageData((prev) => ({
      ...prev,
      content: infoContent,
      source: infoSource,
      image: infoImage,
    }));
  }, [curTab, pageData.name]);

  return (
    <section className="main-wrapper">
      <div className="buttons-container">
        <button
          onClick={handleClick}
          value="overview"
          style={{
            backgroundColor: curTab === "overview" ? "var(--saturn)" : "",
          }}
        >
          <span>01</span> Overview
        </button>
        <button
          onClick={handleClick}
          value="structure"
          style={{
            backgroundColor: curTab === "structure" ? "var(--saturn)" : "",
          }}
        >
          <span>02</span> Structure
        </button>
        <button
          onClick={handleClick}
          value="geology"
          style={{
            backgroundColor: curTab === "geology" ? "var(--saturn)" : "",
          }}
        >
          <span>03</span> Surface
        </button>
      </div>
      <div className="image-container">
        <img
          src={pageData.image || "/saturn/planet-saturn.svg"}
          alt={`${pageData.name} ${curTab}`}
        />
      </div>
      <div className="text-container">
        <h1 className="uppercase">Saturn</h1>
        <p className="info">{pageData.content}</p>
        <p className="source">
          <span>Source :</span>{" "}
          <a href={pageData.source} target="_blank" rel="noopener noreferrer">
            Wikipedia
          </a>
          <img src="/icon-source.svg" alt="" />
        </p>
      </div>
    </section>
  );
}
