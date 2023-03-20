import classes from "./minimumSteps.module.css";

const MinimumSteps = (props) => {
  let minSteps = 1;
  let degree = props.number;
  while (degree > 0) {
    minSteps *= 2;
    degree--;
  }
  const num = minSteps - 1;
  return (
    <div className={classes.container}>
      <p className={classes.text}>Minimum moves to win:</p>
      <p className={classes.number}>{num}</p>
    </div>
  );
};

export default MinimumSteps;
