import React, { Fragment } from 'react'
import { StaticRouter, BrowserRouter, Route, Link } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { Provider } from 'rebass'
import theme, { colors } from './style'
import Home from './pages/index'
import Edu from './pages/edu'

injectGlobal`
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, SegoeUI, Roboto, sans-serif;
    line-height: 1.5;
    margin: 0;
    color: ${colors.black}
  }
  a { text-decoration: none; }
`

// universal router component
const Router = typeof document !== 'undefined' ? BrowserRouter : StaticRouter

const App = props => (
  <Router basename={props.basename} location={props.pathname}>
    <Fragment>
      <meta charSet="UTF-8" />
      <title>Lachlan Campbell – @lachlanjc</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta name="theme-color" content={colors.base} />
      <Provider theme={theme}>
        <Route exact path="/" render={() => <Home {...props} />} />
        <Route path="/edu" render={() => <Edu {...props} />} />
      </Provider>
    </Fragment>
  </Router>
)

export default App
