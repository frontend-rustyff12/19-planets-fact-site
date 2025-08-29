import { useState, useEffect } from "react";
import { NavLink } from "react-router";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    console.log("clicked");
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
        <button onClick={toggleMenu}>
          <img
            role="button"
            className="nav-menu-hamburger"
            src="/icon-hamburger.svg"
            alt="Hamburger icon"
          />
        </button>

        <div className={`nav-links-container ${isMenuOpen ? "open" : ""}`}>
          <nav>
            <ul className="nav-links">
              {menuItems.map((item, index) => (
                <NavLink
                  to={item === "mercury" ? "/" : item}
                  className={({ isActive }) =>
                    isActive ? `active-link ${item}` : `${item}`
                  }
                  key={index}
                  onClick={closeMenu}
                >
                  <span className={`circle ${item}`}></span> {item}{" "}
                  <img className="chevron" src="/icon-chevron.svg" alt="" />
                </NavLink>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
