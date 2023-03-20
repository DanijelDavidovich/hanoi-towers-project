import classes from "./fullTower.module.css";
import TowerAbove from "./TowerAbove";
import TowerContent from "./TowerContent";

const FullTowwer = (props) => {
  return (
    <div onClick={props.onClick} className={classes.fullTower}>
      <TowerAbove
        id="1"
        dragOverHandler={props.dragOverHandler}
        dropHandler={props.dropHandler}
      />
      <TowerContent tower1Array={props.tower1Array} />
    </div>
  );
};

export default FullTowwer;
