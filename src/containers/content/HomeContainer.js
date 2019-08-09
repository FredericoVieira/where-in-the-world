import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setCountries, clearCountry } from '../../actions/countries'
import { setRegion } from '../../actions/regions'
import Home from '../../components/content/Home'
import requester from '../../resources/requester'


const mapStateToProps = (state) => {
  return {
    countries: state.countries.options,
    selectedRegion: state.regions.selected,
    regions: state.regions.options,
    theme: state.theme
  }
}

const mapDispatchToProps = dispatch => ({

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))