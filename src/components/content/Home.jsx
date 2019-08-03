import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  componentWillMount() {
    this.props.fetchCountries()
  }

  render() {
    const { countries } = this.props

    return (
      <div className="home">
      HOME HERE

      <span>
        {countries[0] && countries[0].name}
      </span>
  
      <Link to="/country">
        GO TO COUNTRY
      </Link>
    </div>
    )
  }
}

export default Home