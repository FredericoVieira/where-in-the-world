import React, { useEffect, useState } from 'react'
import Search from 'react-search-box'
import Select from 'react-select'
import Loader from 'react-loader-spinner'

import useGlobal from '../../store'
import { A, navigate } from 'hookrouter'

import { numberWithCommas } from '../../utils/formatter'
import { shuffle } from '../../utils/shuffler'


const Home = () => {
  const [ globalState, globalActions ] = useGlobal()
  const [ localState, localSetState ] = useState({ loaded: false, countriesToShow: [], countriesSearch: [] })
  const { loaded, countriesToShow, countriesSearch } = localState
  const { theme } = globalState.configurations
  const { options: countriesOptions } = globalState.countries
  const { options: regionsOptions, selected: selectedRegion } = globalState.regions
  const { fetchCountries, handleSelectCountry, handleSearchCountry, handleFilterRegion, } = globalActions

  useEffect(() => {
    if (countriesOptions.length === 0) {
      fetchCountries()
    }
  }, [])

  useEffect(() => {
    if (countriesOptions.length > 0) {
      let countriesEligibles
      if (selectedRegion) {
        countriesEligibles = countriesOptions.filter(country => country.region === selectedRegion)
      } else countriesEligibles = countriesOptions
      const countriesSearch = countriesEligibles.map(country => Object.assign({}, { key: country.name }, { value: country.name }))
      const countriesToShow = countriesEligibles
      localSetState({ ...localState, loaded: true, countriesToShow, countriesSearch })
    } else {
      localSetState({ ...localState, loaded: false })
    }
  }, [countriesOptions])

  const handleCountry = (country) => (
    <div key={country.name} className="col s12 m6 l4 xl3">
      <A href={`/country/${country.name}`} onClick={() => handleSelectCountry(country.name)}>
        <div className="card">
          <div className="card-image">
            <img src={country.flag} />
          </div>
          <div className={`card-content card-content--${theme}`}>
            <span className="card-title">
              {country.name}
            </span>
            <p>
              <span className="card-info">Population: </span>{numberWithCommas(country.population)}
            </p>
            <p>
              <span className="card-info">Region: </span>{country.region}
            </p>
            <p>
              <span className="card-info">Capital: </span>{country.capital}
            </p>
          </div>
        </div>
      </A>
    </div>
  )
    
  return (
    <section className={`home home--${theme}`}>
    {loaded ?
      <>
        <div className="row search-filter">
          <div className={`col s12 m6 l5 xl5 search search--${theme}`}>
            <Search
              placeholder="Search for a country..."
              data={countriesSearch}
              onSelect={(selection) => handleSearchCountry(selection, navigate)}
            />
          </div>
          <div className="col s12 m6 l3 xl3 filter-float">
            <Select
              className={`filter filter--${theme}`}
              classNamePrefix={`filter--${theme}`}
              placeholder="Filter by Region"
              value={selectedRegion}
              onChange={handleFilterRegion}
              options={regionsOptions}
            />
          </div>
        </div>
        <div className="row">
          {countriesToShow.map(country => handleCountry(country))}
        </div>
      </> :
      <Loader
        className="loader"
        type="Grid"
        color={theme === 'light' ? '#CCC' : '#FFF'}
        height={80}
        width={80}
      /> }
    </section>
  )
}

export default Home