import { useState, useEffect } from "react";
import windows from "../../assets/windows-0.png";
import network from "../../assets/telephony-0.png";
import battery from "../../assets/battery.png";
import classes from "./Footer.module.scss";

const Footer = ({ toggleMenu }) => {
  const [time, setTime] = useState("");

  const getTime = () => {
    const currentTime = new Date().toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    setTime(currentTime);
  };

  useEffect(() => {
    getTime();
    const intervalId = setInterval(getTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={classes.footer}>
      <div className={classes.start} onClick={toggleMenu}>
        <img src={windows} alt="Start" className={classes.icon} />
        <p className={classes.start__text}>Start</p>
      </div>
      <div className={classes.panel}>
        <img src={battery} alt="Battery" className={classes.icon} />
        <img src={network} alt="Network" className={classes.icon} />
        <p className={classes.time}>{time}</p>
      </div>
    </div>
  );
};
export default Footer;
