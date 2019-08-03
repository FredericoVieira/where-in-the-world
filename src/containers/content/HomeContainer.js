import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setCountries } from '../../actions/countries'
import Home from '../../components/content/Home'
import Axios from 'axios'

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCountries: async () => {
    try {
      const response = await Axios.get('https://restcountries.eu/rest/v2/all?fields=name;population;capital;region')
      dispatch(setCountries(response.data))
    } catch (error) {
      /* dispatch(fetchHasErrored({
        hasError: true,
        statusText: error.request.statusText,
        status: error.request.status
      })) */
      console.log(error)
    }
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))