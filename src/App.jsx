import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameLog from "./components/GameLog";
import GameOver from "./components/GameOver";

import { WINNING_COMBINATIONS } from "./winning_combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
  return gameTurns.length === 0 || gameTurns[0].player === "O" ? "X" : "O";
};

const App = () => {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);

  let activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((arry) => [...arry])];
  gameTurns.forEach((turn) => {
    gameBoard[turn.square.row][turn.square.col] = turn.player;
  });

  let winner = null;

  WINNING_COMBINATIONS.forEach((combination) => {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  });

  const hasDraw = gameTurns.length === 9 && !winner;

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

  const handlePlayAgain = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handlePlayAgain} />
        )}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
          gameBoard={gameBoard}
        />
      </div>
      <GameLog turns={gameTurns} />
    </main>
  );
};

export default App;
