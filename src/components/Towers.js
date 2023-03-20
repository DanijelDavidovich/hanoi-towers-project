import classes from "./towers.module.css";
import { useState, useEffect } from "react";
import FullTowwer from "./FullTower";
import FullTower2 from "./FullTower2";
import FullTower3 from "./FullTower3";

const Towers = (props) => {
  const [tower1, setTower1] = useState([]);
  const [tower2, setTower2] = useState([]);
  const [tower3, setTower3] = useState([]);
  const [towerInfo, setTowerInfo] = useState([]);

  useEffect(() => {
    setTower1(props.initialTower);
    setTower2([]);
    setTower3([]);
    props.movesNumberRestart();
  }, [props.numberOfDiscs]);

  const drop = (event) => {
    setTower2([tower1[0], ...tower2]);
    setTower1((prev) => prev.slice(1));
  };

  const moveHandler = (event) => {
    const disc = event.dataTransfer.getData("disc");
    const tower = event.target.id;
    const tow1 = tower1.filter((tow) => tow.discNumber === Number(disc));
    const tow2 = tower2.filter((tow) => tow.discNumber === Number(disc));
    const tow3 = tower3.filter((tow) => tow.discNumber === Number(disc));
    if (tow1.length === 1 && tower == 2) {
      if (
        tower2.length === 0 ||
        tower1[0]["discNumber"] < tower2[0]["discNumber"]
      ) {
        props.movesNumberHandler();
        setTower2([tower1[0], ...tower2]);
        setTower1((prev) => prev.slice(1));
      }
    } else if (tow1.length === 1 && tower == 3) {
      if (
        tower3.length === 0 ||
        tower1[0]["discNumber"] < tower3[0]["discNumber"]
      ) {
        props.movesNumberHandler();
        setTower3([tower1[0], ...tower3]);
        setTower1((prev) => prev.slice(1));
      }
    } else if (tow2.length === 1 && tower == 1) {
      if (
        tower1.length === 0 ||
        tower2[0]["discNumber"] < tower1[0]["discNumber"]
      ) {
        props.movesNumberHandler();
        console.log("aaa");
        setTower1([tower2[0], ...tower1]);
        setTower2((prev) => prev.slice(1));
      }
    } else if (tow2.length === 1 && tower == 3) {
      if (
        tower3.length === 0 ||
        tower2[0]["discNumber"] < tower3[0]["discNumber"]
      ) {
        props.movesNumberHandler();
        setTower3([tower2[0], ...tower3]);
        setTower2((prev) => prev.slice(1));
      }
    } else if (tow3.length === 1 && tower == 1) {
      if (
        tower1.length === 0 ||
        tower3[0]["discNumber"] < tower1[0]["discNumber"]
      ) {
        props.movesNumberHandler();
        setTower1([tower3[0], ...tower1]);
        setTower3((prev) => prev.slice(1));
      }
    } else if (tow3.length === 1 && tower == 2) {
      if (
        tower2.length === 0 ||
        tower3[0]["discNumber"] < tower2[0]["discNumber"]
      ) {
        props.movesNumberHandler();
        setTower2([tower3[0], ...tower2]);
        setTower3((prev) => prev.slice(1));
      }
    }
  };

  // const dropOn1 = (event) => {
  //   const disc = event.dataTransfer.getData("disc");
  //   const tower = event.target.id;
  //   console.log("Disk:" + disc);
  //   console.log("Fot tower:" + tower);
  // };
  // const dropOn2 = (event) => {
  //   const disc = event.dataTransfer.getData("disc");
  //   const tower = event.target.id;
  //   console.log("Disk:" + disc);
  //   console.log("Fot tower:" + tower);
  // };

  // const dropOn3 = (event) => {
  //   const disc = event.dataTransfer.getData("disc");
  //   const tower = event.target.id;
  //   console.log("Disk:" + disc);
  //   console.log("Fot tower:" + tower);
  // };

  const dragOverHandler = (event) => {
    event.preventDefault();
    console.log("Drag over");
  };

  return (
    <div className={classes.towers}>
      <FullTowwer
        dragOverHandler={dragOverHandler}
        tower1Array={tower1}
        dropHandler={moveHandler}
      />
      <FullTower2
        dragOverHandler={dragOverHandler}
        tower1Array={tower2}
        dropHandler={moveHandler}
      />
      <FullTower3
        dragOverHandler={dragOverHandler}
        tower1Array={tower3}
        dropHandler={moveHandler}
      />
    </div>
  );
};

export default Towers;
