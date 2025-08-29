import { NavLink } from "react-router";
export default function Header() {
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
  return (
    <header>
      <div className="header-container">
        <h2 className="uppercase">The Planets</h2>
        <button>
          <img
            role="button"
            className="nav-menu-hamburger"
            src="/icon-hamburger.svg"
            alt="Hamburger icon"
          />
        </button>
        <div className="nav-links-container">
          <nav>
            <ul className="nav-links">
              {menuItems.map((item, index) => (
                <NavLink
                  to={item === "mercury" ? "/" : item}
                  className={({ isActive }) =>
                    isActive ? `active-link ${item}` : `${item}`
                  }
                  key={index}
                >
                  {item}
                </NavLink>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
