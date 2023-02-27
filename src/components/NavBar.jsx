import React from "react";
import useGlobal from "../store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonRegular } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
  const [globalState, globalActions] = useGlobal();
  const { theme } = globalState.configurations;
  const { toggleTheme } = globalActions;

  return (
    <nav className={`nav--${theme}`}>
      <div className="nav-wrapper">
        <span className="nav-wrapper__title">Where in the world?</span>
        <div className="nav-wrapper__theme" onClick={() => toggleTheme(theme)}>
          <FontAwesomeIcon
            icon={theme === "light" ? faMoonRegular : faMoonSolid}
            size="lg"
            transform={{ rotate: -25 }}
          />
          <span className="nav-wrapper__theme--text">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
