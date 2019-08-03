import React from 'react'
import { Link } from 'react-router-dom'


class Country extends React.Component {
  componentWillMount() {
    this.props.fetchCountry(this.props.match.params.country)
  }

  render() {
    const { country, match } = this.props

    const handleCountryBorders = (border) => <span key={border}>{border} - </span>
    
    return (
      <section className="country">
        <Link to="/">
          BACK TO HOME
        </Link>
        {
          'name' in country ?
            <>
              <span className="card-title grey-text text-darken-4">
                {country.name}
              </span>
              <p>
                {country.nativeName}
              </p>
              <p>
                {country.region}
              </p>
              <p>
                {country.subregion}
              </p>
              <p>
                {country.capital}
              </p>
              {country.borders.map(border => handleCountryBorders(border))}
          </> : null
      }
    </section>
    )
  }
}

export default Country