import React, { useEffect, useState } from 'react'
import { A } from 'hookrouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loader-spinner'

import useGlobal from '../../store';

import { numberWithCommas } from '../../utils/formatter'


const Country = ({ country }) => {
  const [ globalState, globalActions ] = useGlobal()
  const [ localState, localSetState ] = useState({ loaded: false })
  const { loaded } = localState
  const { theme } = globalState.configurations
  const { selected: selectedCountry } = globalState.countries
  const { fetchCountry } = globalActions

  useEffect(() => {
    fetchCountry(country || selectedCountry.name)
  }, [, country])

  useEffect(() => {
    if ('nativeName' in selectedCountry) {
      localSetState({ ...localState, loaded: true })
    } else {
      localSetState({ ...localState, loaded: false })
    }
  }, [selectedCountry])

  const handleBorders = (border) => 
    <A key={border} className={`btn button border button--${theme}`} href={`/country/${border}`}>
      {border}
    </A>

  return (
    <section className={`country country--${theme}`}>
      <div className="row back">
        <div className="col s12">
          <A className={`btn button button--${theme}`} href="/">
            <FontAwesomeIcon icon={faArrowLeft} size="lg"/> <span className="button__text">Back</span>
          </A>
        </div>
      </div>
      { loaded ?
      <>
        <div className="row">
          <div className="col s12 m6">
            <img className="flag" src={selectedCountry.flag} />
          </div>
          <div className="col s12 m5 offset-m1">
            <span className="title">
              {selectedCountry.name}
            </span>
            <p className="block">
              <span className="info">Native Name: </span>{selectedCountry.nativeName}
            </p>
            <p className="block">
              <span className="info">Population: </span>{numberWithCommas(selectedCountry.population)}
            </p>
            <p className="block">
              <span className="info">Region: </span>{selectedCountry.region}
            </p>
            <p className="block">
              <span className="info">Capital: </span>{selectedCountry.capital}
            </p>
            <p className="block">
              <span className="info">Top Level Domain: </span>{selectedCountry.topLevelDomain.join(', ')}
            </p>
            <p className="block">
              <span className="info">Currencies: </span>{selectedCountry.currencies.map(currency => currency.name).join(', ')}
            </p>
            <p className="block">
              <span className="info">Languages: </span>{selectedCountry.languages.map(language => language.name).join(', ')}
            </p>
            <p className="block">
              <span className="info">Borders: </span>{selectedCountry.borders.length > 0 ? selectedCountry.borders.map(border => handleBorders(border)) : 'None'}
            </p>
            
          </div>
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

export default Country