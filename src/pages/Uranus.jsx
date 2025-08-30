import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import planetData from "../data/data.json";
import { imageAnimation } from "../utils/animations";
export default function Uranus() {
  const [curTab, setCurTab] = useState("overview");
  const [pageData, setPageData] = useState({
    name: "Uranus",
    content: "",
    source: "",
    image: "",
  });

  useEffect(() => {
    const images = planetData.find(
      (item) => item.name.toLowerCase() === "uranus"
    ).images;
    Object.values(images).forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

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
          className={curTab === "overview" ? "active-tab uranus" : ""}
          value="overview"
        >
          <span>01</span> Overview
        </button>
        <button
          onClick={handleClick}
          className={curTab === "structure" ? "active-tab uranus" : ""}
          value="structure"
        >
          <span>02</span> Structure
        </button>
        <button
          onClick={handleClick}
          className={curTab === "geology" ? "active-tab  uranus" : ""}
          value="geology"
        >
          <span>03</span> Surface
        </button>
      </div>
      <AnimatePresence mode="wait">
        {curTab === "geology" ? (
          <motion.div
            key="geology"
            className="image-container uranus geology"
            {...imageAnimation}
          >
            <motion.img
              src="/uranus/planet-uranus.svg"
              alt=""
              {...imageAnimation}
            />
            <motion.img
              src={pageData.image || "/uranus/planet-uranus.svg"}
              alt={`${pageData.name} ${curTab}`}
              {...imageAnimation}
            />
          </motion.div>
        ) : (
          <div
            key={curTab}
            className="image-container uranus"
            {...imageAnimation}
          >
            <motion.img
              src={pageData.image || "/uranus/planet-uranus.svg"}
              alt={`${pageData.name} ${curTab}`}
              {...imageAnimation}
            />
          </div>
        )}
      </AnimatePresence>
      <div className="text-container">
        <h1 className="uppercase">Uranus</h1>
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
