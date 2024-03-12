import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  // manage state
  const [isEditing, setIsEditing] = useState(false);

  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    // not efficient => React is sceduling state updating fxn , its not performed instantly but to be perform in future not instantly
    // that behviour might lead to some errors as state is not immediately updated

    // setIsEditing(!isEditing);  ==> schedules a state update to true
    // console.log(isEditing); ==> true ==> then false
    // setIsEditing(!isEditing); ==> schedules a state update to true
    // console.log(isEditing); ==> true ==> then false

    // setIsEditing((editing)=> !editing); // true => get latest state value
    // setIsEditing((editing)=> !editing); // true => will also get the latest state value

    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName;
  if (!isEditing) {
    editablePlayerName = <span className="player-name">{playerName}</span>;
  } else {
    editablePlayerName = (
      <input
        type="text"
        placeholder="Player 1"
        required
        value={playerName}
        onInput={handleChange}
      ></input>
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}> {isEditing ? "Save" : "Edit"} </button>
    </li>
  );
}
