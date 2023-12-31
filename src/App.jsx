import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

const App = () => {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = () => {
    setActivePlayer((curActivePlayer) => (curActivePlayer == "X" ? "O" : "X"));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      LOG OF PLAYS
    </main>
  );
};

export default App;
