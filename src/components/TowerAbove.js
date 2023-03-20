import classes from "./fullTower.module.css";

const TowerAbove = (props) => {
  return (
    <div
      droppable={true}
      id={props.id}
      onDrop={(e) => props.dropHandler(e)}
      onDragOverCapture={props.dragOverHandler}
      className={classes.towerAbove}
    ></div>
  );
};

export default TowerAbove;
