import classes from "./minimumSteps.module.css";

const MovesNumber = (props) => {
  return (
    <div className={classes.container}>
      <p className={classes.text}>Number of moves: </p>
      <p className={classes.number}>{props.number}</p>
    </div>
  );
};

export default MovesNumber;
