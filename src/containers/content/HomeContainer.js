import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setCountries } from '../../actions/countries'
import Home from '../../components/content/Home'
import requester from '../../resources/requester'

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCountries: async () => {
    const [error, response] = await requester('GET', 'all?fields=name;population;capital;region')
    dispatch(setCountries(response.data))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))