import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'


class Country extends React.Component {
  componentWillMount() {
    this.props.fetchCountry(this.props.match.params.country)
  }

  render() {
    const { country, handleBorder } = this.props

    const handleBorders = (border) => <Link
      key={border}
      className="btn button border"
      to={`/country/${border}`}
      onClick={() => handleBorder(border)}
    >
      {border}
    </Link>
    
    return (
      <section className="country">
        <div className="row back">
          <div className="col s12">
            <Link className="btn button" to="/">
              <FontAwesomeIcon icon={faArrowLeft} size="lg"/> <span className="button__text">Back</span>
            </Link>
          </div>
        </div>
        { 'name' in country ?
        <>
          <div className="row">
            <div className="col s12 m6">
              <img className="flag" src={country.flag} />
            </div>
            <div className="col s12 m5 offset-m1">
              <span className="title">
                {country.name}
              </span>
              <p className="block">
                <span className="info">Native Name: </span>{country.nativeName}
              </p>
              <p className="block">
                <span className="info">Population: </span>{country.population}
              </p>
              <p className="block">
                <span className="info">Region: </span>{country.region}
              </p>
              <p className="block">
                <span className="info">Capital: </span>{country.capital}
              </p>
              <p className="block">
                <span className="info">Top Level Domain: </span>{country.topLevelDomain.join(', ')}
              </p>
              <p className="block">
                <span className="info">Currencies: </span>{country.currencies.map(currency => currency.name).join(',')}
              </p>
              <p className="block">
                <span className="info">Languages: </span>{country.languages.map(language => language.name).join(', ')}
              </p>
              <p className="block">
                <span className="info">Borders: </span>{country.borders.length > 0 ? country.borders.map(border => handleBorders(border)) : 'None'}
              </p>
              
            </div>
          </div>
        </> : null }
    </section>
    )
  }
}

export default Country