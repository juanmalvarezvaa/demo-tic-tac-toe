const GameOver = ({ winner }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} Wins!</p>}
      {!winner && <p>It's a draw...</p>}
      <p>
        <button>Play again</button>
      </p>
    </div>
  );
};

export default GameOver;
