import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './content/Home'
import Country from './content/Country'


class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route component={Home} exact path="/"/>
        <Route component={Country} path="/country" />
      </Switch>
    )
  }
}

export default Content