import "./App.scss";
import { useState } from "react";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Main menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <Footer toggleMenu={toggleMenu} />
    </>
  );
};

export default App;
