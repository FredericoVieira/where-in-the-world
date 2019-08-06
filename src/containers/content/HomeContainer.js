import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setCountries } from '../../actions/countries'
import { setRegion } from '../../actions/region'
import { clearCountry } from '../../actions/country'
import Home from '../../components/content/Home'
import requester from '../../resources/requester'


const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    region: state.region,
    theme: state.theme
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCountries: async () => {
    const [, response] = await requester('GET', 'all?fields=flag;name;population;region;capital')
    dispatch(setCountries(response.data))
  },
  handleSearchCountry: (selection, history) => {
    dispatch(clearCountry())
    history.push(`/country/${selection.value}`)
  },
  handleFilterRegion: (selection) => dispatch(setRegion(selection.value)),
  handleSelectCountry: () => dispatch(clearCountry())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))