export default function GameOver({ winner, onRestart }) {

    return (<div id="game-over" className="absolute z-50 top-0 left-0 w-full h-full flex flex-col gap-5 md:gap-10 justify-center align-middle animate-[pop-in_0.5s_cubic-bezier(0.68,-0.55,0.65,0.52)_forwards] text-center text-2xl md:text-4xl">
        {winner && <h2>{winner} won!</h2>}
        {!winner && <h2>It's a Draw!</h2>}
        <button className="pt-16" onClick={onRestart}>Rematch!</button>
    </div >);

} 