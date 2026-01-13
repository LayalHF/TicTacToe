export default function GameOver({ winner, onRestart }) {

    return (<div id="game-over">
        {winner && <h2>{winner} won!</h2>}
        {!winner && <h2>It's a Draw!</h2>}
        <p>
            <button className="mt-15" onClick={onRestart}>Rematch!</button>
        </p>
    </div>);

}