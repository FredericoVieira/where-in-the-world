import requester from '../resources/requester'


export const clearCountry = store => {
  const countries = {
    ...store.state.countries,
    selected: {
      name: null
    }
  }
  store.setState({ ...store.state, countries })
}

export const setCountries = (store, countriesOptions) => {
  const countries = {
    ...store.state.countries,
    options: countriesOptions
  }
  store.setState({ ...store.state, countries })
}

export const setCountry = (store, country) => {
  const countries = {
    ...store.state.countries,
    selected: {
      name: country,
    }
  }
  store.setState({ ...store.state, countries })
}

export const setCountryData = (store, countryData) => {
  const countries = {
    ...store.state.countries,
    selected: {
      ...countryData
    }
  }
  store.setState({ ...store.state, countries })
}

export const handleSelectCountry = (store, country) => {
  setCountry(store, country)
}

export const handleSearchCountry = (store, selected, navigate) => {
  setCountry(store, selected)
  navigate(`/country/${selected.value}`)
}

export const fetchCountries = async store => {
  const [, response] = await requester('GET', 'all?fields=flag;name;population;region;capital')
  setCountries(store, response.data)
}

export const fetchCountry = async (store, country) => {
  const fields = 'fields=flag;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders'
  const [, countryResponse] = await requester('GET', `name/${country}?${fields}`)
  let countryData = countryResponse.data[0]
  if (countryData.borders.length > 0) {
    const codes = countryData.borders.join(';')
    const [, borderResponse] = await requester('GET', `alpha/?codes=${codes}&fields=name`)
    const borderNames = borderResponse.data.map(border => border.name)
    countryData = { ...countryData, borders: borderNames }
  }
  setCountryData(store, countryData)
}
