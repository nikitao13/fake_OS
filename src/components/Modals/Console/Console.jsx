import classes from "./Console.module.scss";

const Console = ({ closeModal }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.header}>
        <div>
          <p>console</p>
        </div>
        <div>
          <span className={classes.closeModal} onClick={() => closeModal()}>
            x
          </span>
        </div>
      </div>
      <section className={classes.terminal}>
        <p>~/desktop </p>
      </section>
    </div>
  );
};
export default Console;
