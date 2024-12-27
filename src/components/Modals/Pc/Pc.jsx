import classes from "./Pc.module.scss";
import myPc from "../../../assets/my-computer.png";

const Pc = () => {
  return (
    <div className={classes.modal}>
      <div className={classes.container}>
        <img src={myPc} className={classes.bgImg} />
      </div>
    </div>
  );
};
export default Pc;
