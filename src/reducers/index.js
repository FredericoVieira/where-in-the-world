import { combineReducers } from 'redux'
import { countries } from './countries'
import { country } from './country'
import { region } from './region'

export default combineReducers({
  countries,
  country,
  region
})
