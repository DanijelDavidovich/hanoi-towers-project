import { useState, useEffect, useRef } from "react";
import classes from "./hanoi.module.css";
import Disc from "./disc";
import Number from "./components/number";
import FullTowwer from "./components/FullTower";
import Buttons from "./components/Buttons";
import Towers from "./components/Towers";
import MinimumSteps from "./components/MinimumSteps";
import MovesNumber from "./components/MovesNumber";
import WinPopup from "./components/WinPopup";

const Hanoi = () => {
  const [num, setNum] = useState(-1);
  const [isOpen, setIsOpen] = useState(true);
  const [movesNumber, setMovesNumber] = useState(0);
  const [restart, setRestart] = useState(false);
  const [winChecker, setWinChecker] = useState(false);

  // First tower
  const numberOfDiscs = num;
  const tower = [];

  const dragStart = (event, num) => {
    event.dataTransfer.setData("disc", num);
  };

  const dn = (num) => {
    console.log(num);
  };

  for (var i = 0; i < numberOfDiscs; i++) {
    tower.push({
      discNumber: i + 1,
      towerNumber: 1,
      // dragState: false,
      comp: (
        <Disc
          onC={dn}
          dragStart={dragStart}
          number={i + 1}
          // discObjectHandler={setDiscObject}
          // draggableState={dragStart}
        />
      ),
    });
  }

  const startNewGameHandler = () => {
    setWinChecker(false);
    setIsOpen(true);
  };

  console.log(winChecker);

  const resumeGame = () => {
    setIsOpen(false);
  };

  const movesNumberHandler = () => {
    setMovesNumber((prev) => ++prev);
  };

  const restartMovesHandler = () => {
    setMovesNumber(0);
  };

  const restartHandler = () => {
    setRestart(true);
  };

  const restartBackHandler = () => {
    setRestart(false);
  };

  const winCheckerHandler = () => {
    setWinChecker(true);
  };

  return (
    <div className={classes.background}>
      <h1 className={classes.heading}>Hanoi Towers</h1>

      {isOpen && (
        <Number
          resume={resumeGame}
          setNumberHandler={setNum}
          setIsOpenHandler={setIsOpen}
          restartHandler={restartHandler}
        />
      )}
      {winChecker && (
        <WinPopup
          newGameHandler={startNewGameHandler}
          // restartHandler={restartHandler}
        />
      )}
      <div className={classes.structure}>
        <Towers
          initialTower={tower}
          numberOfDiscs={numberOfDiscs}
          movesNumberHandler={movesNumberHandler}
          movesNumberRestart={restartMovesHandler}
          restartHandler={restartHandler}
          restartBackHandler={restartBackHandler}
          restart={restart}
          winCheckerHandler={winCheckerHandler}
          winCheck={winChecker}
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
      <Buttons
        newGameHandler={startNewGameHandler}
        restartHandler={restartHandler}
      />
    </div>
  );
};

export default Hanoi;
