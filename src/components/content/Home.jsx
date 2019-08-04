import React from 'react'
import { Link } from 'react-router-dom'
import Search from 'react-search-box'
import Select from 'react-select';


class Home extends React.Component {
  componentWillMount() {
    this.props.fetchCountries()
  }

  render() {
    const { handleSearchCountry, region, handleFilterRegion, history } = this.props
    let { countries } = this.props
    const regionsFilter = [
      { value: '', label: 'All' },
      { value: 'Africa', label: 'Africa' },
      { value: 'Americas', label: 'Americas' },
      { value: 'Asia', label: 'Asia' },
      { value: 'Europe', label: 'Europe' },
      { value: 'Oceania', label: 'Oceania' }
    ]

    let countriesLoaded, countriesSearch

    if (countries.length > 0) {
      countriesLoaded = true
      
      if(region) {
        countries = countries.filter(country => country.region === region)
      }
      
      countriesSearch = countries.map(country => Object.assign({}, { key: country.name }, { value: country.name }))
    }

    const handleCountry = (country) => (
      <div key={country.name} className="col s12 m6 l4 xl3">
        <Link to={`/country/${country.name}`}>
          <div className="card">
            <div className="card-image">
              <img src={country.flag} />
            </div>
            <div className="card-content">
              <span className="card-title">
                {country.name}
              </span>
              <p>
                <span className="card-info">Population: </span>{country.population}
              </p>
              <p>
                <span className="card-info">Region: </span>{country.region}
              </p>
              <p>
                <span className="card-info">Capital: </span>{country.capital}
              </p>
            </div>
          </div>
        </Link>
      </div>
    )
    
    return (
      <section className="home">
      {countriesLoaded ?
        <>
          <div className="row search-filter">
            <div className="col s12 m6 l5 xl5">
              <Search
                placeholder="Search for a country..."
                data={countriesSearch}
                onSelect={(selection) => handleSearchCountry(selection, history)}
              />
            </div>
            <div className="col s12 m6 l3 xl3 filter-float">
              <Select
                className="filter" 
                placeholder="Filter by Region"
                value={region}
                onChange={handleFilterRegion}
                options={regionsFilter}
              />
            </div>
          </div>
          <div className="row">
            {countries.slice(0, 6).map(country => handleCountry(country))}
          </div>
        </> : null}
    </section>
    )
  }
}

export default Home