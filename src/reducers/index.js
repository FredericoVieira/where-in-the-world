import { combineReducers } from 'redux'
import { countries } from './countries'
import { country } from './country'
import { region } from './region'
import { theme } from './theme'

export default combineReducers({
  countries,
  country,
  region,
  theme
})
