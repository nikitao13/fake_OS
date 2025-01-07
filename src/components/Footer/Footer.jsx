import { useState } from "react";
import windows from "../../assets/windows-0.png";
import network from "../../assets/telephony-0.png";
import battery from "../../assets/battery.png";
import classes from "./Footer.module.scss";

const Footer = ({ toggleMenu }) => {
  const [time, setTime] = useState(new Date());
  const [intervalId, setIntervalId] = useState(null);

  if (!intervalId) {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    setIntervalId(id);
  }

  const formattedTime = time.toLocaleTimeString([], { hour12: true });

  return (
    <div className={classes.footer}>
      <div className={classes.start} onClick={toggleMenu}>
        <img src={windows} alt="Start" className={classes.icon} />
        <p className={classes.start__text}>Start</p>
      </div>
      <div className={classes.panel}>
        <img src={battery} alt="Battery" className={classes.icon} />
        <img src={network} alt="Network" className={classes.icon} />
        <p className={classes.time}>{formattedTime}</p>
      </div>
    </div>
  );
};

export default Footer;
