import recycle from "../../assets/recycle_bin_full-4.png";
import computer from "../../assets/computer_explorer_cool-0.png";
import console from "../../assets/console_prompt-0.png";
import paint from "../../assets/paint_old-0.png";
import folder from "../../assets/directory_closed-4.png";
import classes from "./Icons.module.scss";

const Icons = ({ openModal }) => {
  return (
    <div className={classes.container}>
      <div className={classes.iconsContainer}>
        <img src={computer} alt="My PC" className={classes.icon} />
        <p className={classes.label}>My PC</p>
      </div>
      <div className={classes.iconsContainer}>
        <img src={recycle} alt="Recycle Bin" className={classes.icon} />
        <p className={classes.label}>Recycle Bin</p>
      </div>
      <div className={classes.iconsContainer}>
        <img src={folder} alt="My Documents" className={classes.icon} />
        <p className={classes.label}>Documents</p>
      </div>
      <div className={classes.iconsContainer}>
        <img
          src={console}
          alt="Command Prompt"
          className={classes.icon}
          onClick={() => openModal("Console")}
        />
        <p className={classes.label}>Terminal</p>
      </div>
      <div className={classes.iconsContainer}>
        <img
          src={paint}
          alt="Microsoft Paint"
          className={classes.icon}
          onClick={() => openModal("Paint")}
        />
        <p className={classes.label}>MS Paint</p>
      </div>
    </div>
  );
};

export default Icons;
