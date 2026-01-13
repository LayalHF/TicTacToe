import { useState } from "react";
import { SquarePen } from "lucide-react";

export default function Player({ intialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(intialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let buttonCaption = 'Edit';
  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} className="w-full"></input>
    // let buttonCaption = 'Save';
  }
  return (
    <li className={`flex w-full flex-col gap-2 pb-3 md:pb-4 ${isActive ? 'active' : undefined}`}>
      <span className="Player flex flex-row pb-2 md:justify-between text-sm">
        <span className="">
          {editablePlayerName}
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : (<SquarePen className="inline-block" size={16} />)}</button>
      </span>
      <span className="player-symbol text-center font-bold text-lg">{symbol}</span>
    </li>
  );
}
