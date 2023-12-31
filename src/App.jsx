import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameLog from "./components/GameLog";

const deriveActivePlayer = (gameTurns) => {
  return gameTurns.length === 0 || gameTurns[0].player === "O" ? "X" : "O";
};

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);

  let activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: deriveActivePlayer(prevTurns),
        },
        ...prevTurns,
      ];
      
      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <GameLog turns={gameTurns} />
    </main>
  );
};

export default App;
