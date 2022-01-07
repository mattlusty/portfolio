import { useState } from "react";
// components
import Nav from "./components/Nav";
import SideMenu from "./components/SideMenu";

function App() {
  let [hidden, setHidden] = useState(false);

  let handleToggleMenu = () => {
    setHidden(!hidden);
  };

  return (
    <div className="App">
      <Nav toggleMenu={handleToggleMenu} />
      <SideMenu hidden={hidden} />
    </div>
  );
}

export default App;
