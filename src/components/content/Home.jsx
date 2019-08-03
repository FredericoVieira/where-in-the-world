import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => (
  <div className="home">
    HOME HERE

    <Link to="/country">
      GO TO COUNTRY
    </Link>
  </div>
)

export default Home