import { useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Mercury from "./pages/Mercury";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";
import NotFound from "./pages/NotFound";
function App() {
  const location = useLocation();
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <motion.div {...pageTransition}>
                <Mercury />
              </motion.div>
            }
          />
          <Route
            path="venus"
            element={
              <motion.div {...pageTransition}>
                <Venus />
              </motion.div>
            }
          />
          <Route
            path="earth"
            element={
              <motion.div {...pageTransition}>
                <Earth />
              </motion.div>
            }
          />
          <Route
            path="mars"
            element={
              <motion.div {...pageTransition}>
                <Mars />
              </motion.div>
            }
          />
          <Route
            path="jupiter"
            element={
              <motion.div {...pageTransition}>
                <Jupiter />
              </motion.div>
            }
          />
          <Route
            path="saturn"
            element={
              <motion.div {...pageTransition}>
                <Saturn />
              </motion.div>
            }
          />
          <Route
            path="uranus"
            element={
              <motion.div {...pageTransition}>
                <Uranus />
              </motion.div>
            }
          />
          <Route
            path="neptune"
            element={
              <motion.div {...pageTransition}>
                <Neptune />
              </motion.div>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <motion.div {...pageTransition}>
              <NotFound />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
