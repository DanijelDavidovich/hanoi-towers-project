import classes from "./fullTower.module.css";
import TowerAbove from "./TowerAbove";
import TowerContent from "./TowerContent";

const FullTower3 = (props) => {
  return (
    <div className={classes.fullTower}>
      <TowerAbove
        id="3"
        dragOverHandler={props.dragOverHandler}
        dropHandler={props.dropHandler}
      />
      <TowerContent tower1Array={props.tower1Array} />
    </div>
  );
};

export default FullTower3;
