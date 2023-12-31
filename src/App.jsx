import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
// import Log from "./components/Log";

const App = () => {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((curActivePlayer) => (curActivePlayer == "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      // Check last player logged value.. so we DONT use other state value here
      let currentPlayer =
        prevTurns.length === 0 || prevTurns[0].player === "O" ? "X" : "O";

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      console.log(updatedTurns);
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
      {/* <Log /> */}
    </main>
  );
};

export default App;
