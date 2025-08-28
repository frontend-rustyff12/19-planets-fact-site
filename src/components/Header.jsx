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
              {menuItems.map((items, index) => (
                <NavLink
                  to={items}
                  className={({ isActive }) =>
                    isActive ? "active-link" : "not-active-link"
                  }
                  key={index}
                >
                  {items}
                </NavLink>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
