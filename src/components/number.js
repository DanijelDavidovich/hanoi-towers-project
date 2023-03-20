import classes from "./number.module.css";
import { useState } from "react";

const Number = (props) => {
  const [error, setError] = useState(false);
  let enteredNum;
  const onChangeHandler = (event) => {
    if (event.target.value.length === 0) setError(false);
    enteredNum = event.target.value;
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredNum < 2 || enteredNum > 7 || isNaN(enteredNum)) {
      setError(true);
      return;
    }

    setError(false);
    props.setNumberHandler(enteredNum);
    props.setIsOpenHandler(false);
    // addingDiscs();
  };

  const myStyle = error
    ? {
        backgroundColor: "#eeb3b3",
        padding: "0.7rem 1rem",
        marginBottom: "2rem",
      }
    : { backgroundColor: "#fff", padding: "0.7rem 1rem", marginBottom: "2rem" };

  // const numberHandler = (event) => {
  //   const enteredNum = event.target.value;
  // };

  return (
    <>
      <div className={classes.overlay} />
      <form className={classes.box} onSubmit={formSubmitHandler}>
        <h2 className={classes.heading}>Number of discs</h2>
        <p className={classes.text}>Enter a number between 2 and 7.</p>
        <input type="number" style={myStyle} onChange={onChangeHandler}></input>
        {error ? (
          <p className={classes.error}>
            You need to enter a number between 2 and 7
          </p>
        ) : null}
        <div className={classes.buttons}>
          <button className={classes.button}>Confirm</button>
          <button className={classes.button2} onClick={props.resume}>
            Resum game
          </button>
        </div>
      </form>
    </>
  );
};

export default Number;
