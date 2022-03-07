import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
// components
import Nav from "./components/Nav";
import SideMenu from "./components/SideMenu";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactPage from "./components/ContactPage";
import CVPage from "./components/CVPage";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  let [hidden, setHidden] = useState(true);
  let [user, setUser] = useState("");

  useEffect(() => {
    let token = localStorage.getItem("accessToken");
    try {
      const user = jwtDecode(token);
      setUser(user.username);
    } catch (error) {
      console.log(error);
    }
  }, []);

  let toggleSideMenu = () => {
    setHidden(!hidden);
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login loginUser={setUser} />
        </Route>
        <Route path="/register">
          <Register loginUser={setUser} />
        </Route>
        <Route path="/">
          <Nav toggleSideMenu={toggleSideMenu} user={user} />
          <SideMenu toggleSideMenu={toggleSideMenu} hidden={hidden} />
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact" component={ContactPage} />
            <Route path="/cv" component={CVPage} />
            <Route path="/" component={About} />
          </Switch>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
