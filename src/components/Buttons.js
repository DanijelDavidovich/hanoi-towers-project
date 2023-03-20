import classes from "./buttons.module.css";
import { useState } from "react";

const Buttons = (props) => {
  return (
    <div className={classes.buttons}>
      <button className={classes.button} onClick={props.newGameHandler}>
        Start new game!
      </button>
      <button className={classes.button}>Restart game</button>
      <button className={classes.button}>Step back</button>
    </div>
  );
};

export default Buttons;
