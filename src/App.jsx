import { useState } from "react";
import "./App.scss";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
// import StartBar from "./components/StartBar/StartBar.jsx";

const App = () => {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("");
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleModal = (type) => {
    setModal(!modal);
    setModalType(type);
  };

  return (
    <>
      <Main />
      <Footer />
    </>
  );
};

export default App;
