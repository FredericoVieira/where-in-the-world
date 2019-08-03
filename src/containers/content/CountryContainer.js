import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setCountry } from '../../actions/country'
import Country from '../../components/content/Country'
import requester from '../../resources/requester'


const mapStateToProps = (state) => {
  return {
    country: state.country,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCountry: async (country) => {
    const [error, response] = await requester('GET', `name/${country}?fields=name;nativeName;population;region;subregion;capital;borders`)
    dispatch(setCountry(response.data[0]))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Country))
