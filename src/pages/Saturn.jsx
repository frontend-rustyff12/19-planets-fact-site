import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Button from "../components/Button";
import TextContent from "../components/TextContent";
import ImageTabs from "../components/ImageTabs";
import planetData from "../data/data.json";

export default function Saturn() {
  const [curTab, setCurTab] = useState("overview");
  const [pageData, setPageData] = useState({
    name: "Saturn",
    content: "",
    source: "",
    image: "",
  });

  useEffect(() => {
    const images = planetData.find(
      (item) => item.name.toLowerCase() === "saturn"
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
        <ImageTabs
          curTab={curTab}
          pageData={pageData}
          name={pageData.name.toLowerCase()}
        />
      </AnimatePresence>
      <TextContent pageData={pageData} name="Saturn" />
    </section>
  );
}
