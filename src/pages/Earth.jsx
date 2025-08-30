import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";
import planetData from "../data/data.json";
import { imageAnimation } from "../utils/animations";
export default function Earth() {
  const [curTab, setCurTab] = useState("overview");
  const [pageData, setPageData] = useState({
    name: "Earth",
    content: "",
    source: "",
    image: "",
  });

  useEffect(() => {
    const images = planetData.find(
      (item) => item.name.toLowerCase() === "earth"
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
    <section className="main-wrapper" aria-labelledby="planet-heading">
      <Button
        curTab={curTab}
        handleClick={handleClick}
        name={pageData.name.toLowerCase()}
      />
      <AnimatePresence mode="wait">
        {curTab === "geology" ? (
          <motion.div
            key="geology"
            className="image-container earth geology"
            {...imageAnimation}
          >
            <motion.img
              src="/earth/planet-earth.svg"
              alt=""
              {...imageAnimation}
            />
            <motion.img
              src={pageData.image || "/earth/planet-earth.svg"}
              alt={`${pageData.name} ${curTab}`}
              {...imageAnimation}
            />
          </motion.div>
        ) : (
          <div
            key={curTab}
            className="image-container earth"
            {...imageAnimation}
          >
            <motion.img
              src={pageData.image || "/earth/planet-earth.svg"}
              alt={`${pageData.name} ${curTab}`}
              {...imageAnimation}
            />
          </div>
        )}
      </AnimatePresence>
      <div className="text-container">
        <h1 className="uppercase">Earth</h1>
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
