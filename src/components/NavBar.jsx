import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons'
import { faMoon as faMoonRegular } from '@fortawesome/free-regular-svg-icons'


const NavBar = () => (
  <nav>
    <div className="nav-wrapper">
      <span className="nav-wrapper__title">Where in the world?</span>
      <div className="nav-wrapper__dark-mode">
        <FontAwesomeIcon icon={true ? faMoonRegular : faMoonSolid } size="lg" transform={{ rotate: -25 }} />
        <span className="nav-wrapper__dark-mode--text">Dark Mode</span>
      </div>
    </div>
  </nav>
)

export default NavBar
