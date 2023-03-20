import classes from "./disc.module.css";
import { useState } from "react";

const DISC_CONFIGURATIONS = {
  colorArray: [
    "#f03e3e",
    "#1c7ed6",
    "#f59f00",
    "#d6336c",
    "#0ca678",
    "#ae3ec9",
    "#ffff00",
  ],
};

const Disc = (props) => {
  const color = DISC_CONFIGURATIONS.colorArray[props.number - 1];
  return (
    <div
      onClick={() => props.onC(props.number)}
      draggable
      key={props.number}
      onDragStart={(e) => props.dragStart(e, props.number)}
      style={{
        backgroundColor: `${color}`,
        padding: `0.8rem ${props.number}rem`,
      }}
      className={classes.disc}
    ></div>
  );
};

export default Disc;
