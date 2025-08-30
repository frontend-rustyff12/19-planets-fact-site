import { motion } from "framer-motion";
import { imageAnimation } from "../utils/animations";

export default function ImageTabs({ curTab, pageData, name }) {
  return (
    <>
      {curTab === "geology" ? (
        <motion.div
          key="geology"
          className={`image-container ${name} geology`}
          {...imageAnimation}
        >
          <motion.img
            src={`/${name}/planet-${name}.svg`}
            alt=""
            {...imageAnimation}
          />
          <motion.img
            src={pageData.image || `/${name}/planet-${name}.svg`}
            alt={`${pageData.name} ${curTab}`}
            {...imageAnimation}
          />
        </motion.div>
      ) : (
        <motion.div
          key={curTab}
          className={`image-container ${name}`}
          {...imageAnimation}
        >
          <motion.img
            src={pageData.image || `/${name}/planet-${name}.svg`}
            alt={`${pageData.name} ${curTab}`}
            {...imageAnimation}
          />
        </motion.div>
      )}
    </>
  );
}
