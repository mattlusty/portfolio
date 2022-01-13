import { useState } from "react";
import { Route, Switch } from "react-router-dom";
// components
import Nav from "./components/Nav";
import SideMenu from "./components/SideMenu";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import CV from "./components/CV";

function App() {
  let [hidden, setHidden] = useState(false);

  let toggleSideMenu = () => {
    setHidden(!hidden);
  };

  return (
    <div className="App">
      <Nav toggleSideMenu={toggleSideMenu} />
      <SideMenu toggleSideMenu={toggleSideMenu} hidden={hidden} />
      <Switch>
        <Route path="/portfolio">
          <Portfolio> </Portfolio>
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="/cv" component={CV} />
        <Route path="/" component={About} />
      </Switch>
    </div>
  );
}

export default App;
