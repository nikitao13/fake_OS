import classes from "./Paint.module.scss";
import BrushIcon from "@mui/icons-material/Brush";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";

const Paint = ({ closeModal }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.header}>
        <div>
          <p>ms paint</p>
        </div>
        <div>
          <span className={classes.closeModal} onClick={() => closeModal()}>
            x
          </span>
        </div>
      </div>
      <section className={classes.container}>
        <div className={classes.sidebar}>
          <BrushIcon
            className={classes.icon}
            fontSize="small"
            color="primary"
          />
          <DeleteIcon
            className={classes.icon}
            fontSize="small"
          />
          <ClearIcon
            className={classes.icon}
            fontSize="small"
            color="secondary"
          />
        </div>
        <div className={classes.paint}></div>
      </section>
    </div>
  );
};

export default Paint;
