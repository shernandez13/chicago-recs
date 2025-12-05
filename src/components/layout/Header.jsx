import { NavLink } from 'react-router-dom';


/**
 * Header component with navigation
 * Displays navigation links with active state highlighting
 */
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1 className="logoText">Chicago Eats</h1>
          <p className="tagline">Discover Local Favorites</p>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <ul className="navList">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
                aria-current={({ isActive }) => isActive ? 'page' : undefined}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/top-10"
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
                aria-current={({ isActive }) => isActive ? 'page' : undefined}
              >
                Top 10
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recommend"
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
                aria-current={({ isActive }) => isActive ? 'page' : undefined}
              >
                Recommend
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;