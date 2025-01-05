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
        <p>Microsoft Windows 98 &copy; &#91;Version 4.10.2.1085.242&#93;</p>
        <p>1998 Microsoft Corporation. All rights reserved.</p>
        <p>~/desktop </p>
        <textarea autoFocus className={classes.input}></textarea>
      </section>
    </div>
  );
};
export default Console;
