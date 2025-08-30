import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";
import TextContent from "../components/TextContent";
import planetData from "../data/data.json";
import { imageAnimation } from "../utils/animations";
export default function Mars() {
  const [curTab, setCurTab] = useState("overview");
  const [pageData, setPageData] = useState({
    name: "Mars",
    content: "",
    source: "",
    image: "",
  });

  useEffect(() => {
    const images = planetData.find(
      (item) => item.name.toLowerCase() === "mars"
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
            className="image-container mars geology"
            {...imageAnimation}
          >
            <motion.img
              src="/mars/planet-mars.svg"
              alt=""
              {...imageAnimation}
            />
            <motion.img
              src={pageData.image || "/mars/planet-mars.svg"}
              alt={`${pageData.name} ${curTab}`}
              {...imageAnimation}
            />
          </motion.div>
        ) : (
          <div
            key={curTab}
            className="image-container mars"
            {...imageAnimation}
          >
            <motion.img
              src={pageData.image || "/mars/planet-mars.svg"}
              alt={`${pageData.name} ${curTab}`}
              {...imageAnimation}
            />
          </div>
        )}
      </AnimatePresence>
      <TextContent pageData={pageData} name="Mars" />
    </section>
  );
}
