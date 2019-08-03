import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from '../containers/content/HomeContainer'
import Country from './content/Country'


class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route component={HomeContainer} exact path="/"/>
        <Route component={Country} path="/country" />
      </Switch>
    )
  }
}

export default Content