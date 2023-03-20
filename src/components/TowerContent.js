import classes from "./fullTower.module.css";

const TowerContent = (props) => {
  return (
    <div className={classes.towerContent}>
      <div className={classes.tower}></div>
      <div className={classes.discs}>
        {props.tower1Array.map((d) => d.comp)}
      </div>
    </div>
  );
};

export default TowerContent;
