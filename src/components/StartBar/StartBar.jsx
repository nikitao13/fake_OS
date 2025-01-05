import classes from "./StartBar.module.scss";

const StartBar = ({ toggleMenu }) => {
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        <li className={classes.listItem} onClick={toggleMenu}>
          My PC
        </li>
        <li className={classes.listItem} onClick={toggleMenu}>
          Network Settings
        </li>
        <li className={classes.listItem} onClick={toggleMenu}>
          Recycle Bin
        </li>
        <li className={classes.listItem} onClick={toggleMenu}>
          Documents
        </li>
        <li className={classes.listItem} onClick={toggleMenu}>
          Terminal
        </li>
        <li className={classes.listItem} onClick={toggleMenu}>
          MS Paint
        </li>
      </ul>
    </div>
  );
};

export default StartBar;
