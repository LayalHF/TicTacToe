
export default function GameBoard({ onSelectSquare, board }) {

    return (
        <ol id='game-board' className="grid m-auto gap-2 ">
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol className="flex flex-row gap-2 justify-center">
                    {row.map((playerSymbol, colIndex) =>
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null} className="
                    grid place-items-center
                    size-16 sm:size-18 md:size-24
                    rounded-md
                    text-2xl md:text-4xl
                    font-bold
                  ">
                                {playerSymbol}
                            </button>
                        </li>)}
                </ol>
            </li >)
            }
        </ol >);
}