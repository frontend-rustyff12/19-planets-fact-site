import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { menuTransition } from "../utils/animations";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const menuItems = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className="header-container">
        <h2 className="uppercase">The Planets</h2>
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <img
            role="button"
            className={`nav-menu-hamburger ${isMenuOpen ? "open" : ""}`}
            src="/icon-hamburger.svg"
            alt=""
          />
        </button>

        {isMobile ? (
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                {...menuTransition}
                className={`nav-links-container ${isMenuOpen ? "open" : ""}`}
                role="region"
                aria-label="Main navigation"
              >
                <nav>
                  <ul className="nav-links">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <NavLink
                          to={item === "mercury" ? "/" : item}
                          className={({ isActive }) =>
                            isActive ? `active-link ${item}` : `${item}`
                          }
                          onClick={closeMenu}
                          aria-current={({ isActive }) =>
                            isActive ? "page" : undefined
                          }
                        >
                          <span
                            className={`circle ${item}`}
                            aria-hidden="true"
                          ></span>{" "}
                          {item}{" "}
                          <img
                            className="chevron"
                            src="/icon-chevron.svg"
                            alt=""
                            aria-hidden="true"
                          />
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          <div
            className={`nav-links-container ${isMenuOpen ? "open" : ""}`}
            role="region"
            aria-label="Main navigation"
          >
            <nav>
              <ul className="nav-links">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item === "mercury" ? "/" : item}
                      className={({ isActive }) =>
                        isActive ? `active-link ${item}` : `${item}`
                      }
                      onClick={closeMenu}
                      aria-current={({ isActive }) =>
                        isActive ? "page" : undefined
                      }
                    >
                      <span className={`circle ${item}`}></span> {item}{" "}
                      <img
                        className="chevron"
                        src="/icon-chevron.svg"
                        alt=""
                        aria-hidden="true"
                      />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
