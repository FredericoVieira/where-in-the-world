import React from 'react'
import { Link } from 'react-router-dom'


class Home extends React.Component {
  componentWillMount() {
    this.props.fetchCountries()
  }

  render() {
    const { countries } = this.props

    const handleCountry = (country) => (
      <div key={country.name} className="col s12 m6 l4 xl3">
        <Link to={`/country/${country.name}`}>
          <div className="card">
            <div className="card-image">
              IMG HERE
            </div>
            <div className="card-content">
              <span className="card-title grey-text text-darken-4">
                {country.name}
              </span>
              <p>
                {country.population}
              </p>
              <p>
                {country.region}
              </p>
              <p>
                {country.capital}
              </p>
            </div>
          </div>
        </Link>
      </div>
    )
    
    return (
      <section className="home">
        <div className="row">
          {countries.length > 0 ? countries.slice(0, 6).map(country => handleCountry(country)) : null}
        </div>
    </section>
    )
  }
}

export default Home