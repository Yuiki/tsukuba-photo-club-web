import React from "react"

import Home from "./Home"
import About from "./About"
import { Switch, Route, BrowserRouter } from "react-router-dom"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
