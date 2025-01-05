import { useState, useEffect } from "react";
import classes from "./Paint.module.scss";
import getData from "../../../api/api.js";

const Artwork = () => {
  const [imgUrl, setImgUrl] = useState("");

  const fetchImg = async () => {
    const url = await getData();
    setImgUrl(url);
  };

  useEffect(() => {
    fetchImg();
  }, []);

  return (
    <div className={classes.paint}>
      <div
        className={classes.canvas}
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export default Artwork;
