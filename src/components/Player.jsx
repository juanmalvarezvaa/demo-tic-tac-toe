import { useState } from "react";

export default Player = ({ name, symbol }) => {
//   const [isEditing, setIsEditing] = useState();

  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
};
