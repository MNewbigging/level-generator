import { Button } from "@blueprintjs/core";
import "./game-screen.scss";

import React from "react";
import { GameState } from "../../game/game-state";

interface GameScreenProps {
  gameState: GameState;
}

export const GameScreen: React.FC<GameScreenProps> = ({ gameState }) => {
  return (
    <div className="game-screen">
      <Button
        className="button"
        text="Generate level"
        onClick={gameState.generateLevel}
      />
    </div>
  );
};
