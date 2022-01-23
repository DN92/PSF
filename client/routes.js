import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import Home from './components/home'
import formClientQuestionnaire from './components/formClientQaire'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    // this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/home" component={Home} />
        <Route path="/WLQuestionnaire" component={formClientQuestionnaire} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
          </Switch>
        )}
        {/* Displays our Home component as a fallback */}
        <Route component={Home} />
      </Switch>
    )
  }
}

export default Routes
