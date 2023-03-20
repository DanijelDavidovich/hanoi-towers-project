import { useState, useEffect, useRef } from "react";
import classes from "./hanoi.module.css";
import Disc from "./disc";
import Number from "./components/number";
import FullTowwer from "./components/FullTower";
import Buttons from "./components/Buttons";
import Towers from "./components/Towers";
import MinimumSteps from "./components/MinimumSteps";
import MovesNumber from "./components/MovesNumber";

const Hanoi = () => {
  const [num, setNum] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [discObject, setDiscObject] = useState("");
  const [movesNumber, setMovesNumber] = useState(0);

  // First tower
  const numberOfDiscs = num;
  const tower = [];

  const dragStart = (event, num) => {
    event.dataTransfer.setData("disc", num);
    console.log(num);
  };

  const dn = (num) => {
    console.log(num);
  };

  for (var i = 0; i < numberOfDiscs; i++) {
    tower.push({
      discNumber: i + 1,
      towerNumber: 1,
      comp: (
        <Disc
          onC={dn}
          dragStart={dragStart}
          number={i + 1}
          discObjectHandler={setDiscObject}
        />
      ),
    });
  }

  const startNewGameHandler = () => {
    setIsOpen(true);
  };

  const resumeGame = () => {
    setIsOpen(false);
  };

  const movesNumberHandler = () => {
    setMovesNumber((prev) => ++prev);
  };

  const restartHandler = () => {
    setMovesNumber(0);
  };

  return (
    <div className={classes.background}>
      <h1 className={classes.heading}>Hanoi Towers</h1>

      {isOpen && (
        <Number
          resume={resumeGame}
          setNumberHandler={setNum}
          setIsOpenHandler={setIsOpen}
        />
      )}
      <div className={classes.structure}>
        <Towers
          initialTower={tower}
          numberOfDiscs={numberOfDiscs}
          movesNumberHandler={movesNumberHandler}
          movesNumberRestart={restartHandler}
        />
        {/* <div className={classes.towers}>
          <FullTowwer
            dragOverHandler={dragOverHandler}
            tower1Array={tower1}
            dropHandler={drop}
          />
          <FullTowwer
            dragOverHandler={dragOverHandler}
            tower1Array={tower2}
            dropHandler={drop}
          />
          <FullTowwer
            dragOverHandler={dragOverHandler}
            tower1Array={tower3}
            dropHandler={drop}
          />
        </div> */}
        <div className={classes.stand}></div>
      </div>
      <div className={classes.moves}>
        <MinimumSteps number={num} />
        <MovesNumber number={movesNumber} />
      </div>
      <Buttons newGameHandler={startNewGameHandler} />
    </div>
  );
};

export default Hanoi;
