import { useState } from "react";
import classes from "./Main.module.scss";
import Icons from "../Icons/Icons.jsx";
import Console from "../Modals/Console/Console.jsx";
import Paint from "../Modals/Paint/Paint.jsx";
import StartBar from "../StartBar/StartBar.jsx";

const Main = ({ menuOpen, toggleMenu }) => {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("none");

  const openModal = (type) => {
    setModal(true);
    setModalType(type);
  };

  const closeModal = () => {
    setModal(false);
    setModalType("none");
  };

  return (
    <div className={classes.main}>
      <Icons openModal={openModal} />
      {modal &&
        (modalType === "Console" ? (
          <Console closeModal={closeModal} />
        ) : (
          <Paint closeModal={closeModal} />
        ))}

      {menuOpen && <StartBar toggleMenu={toggleMenu} />}
    </div>
  );
};
export default Main;
