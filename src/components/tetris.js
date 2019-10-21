import React from "react";
import { createStage } from "../gameHelpers";
import Stage from "./stage";
import StartButton from "./startButton";
import Display from "./display";

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Level" />
          <Display text="Rows" />
        </div>
        <StartButton />
      </aside>
    </div>
  );
};

export default Tetris;
