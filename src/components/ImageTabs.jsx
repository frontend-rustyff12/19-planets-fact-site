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
          role="tabpanel"
          id="geology-panel"
          aria-labelledby="geology-tab"
        >
          <motion.img
            src={`/${name}/planet-${name}.svg`}
            alt=""
            {...imageAnimation}
            aria-hidden="true"
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
          role="tabpanel"
          id={`${curTab}-panel`}
          aria-labelledby={`${curTab}-tab`}
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
