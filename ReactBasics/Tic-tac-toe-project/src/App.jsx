import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { Wiining_Combination } from "./Winning_Combinations";
import GameOver from "./components/GameOver";

const Initial_Game_Board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function derivedWinner(gameBoard, player)
{
  let winner = undefined;
  for(const combinations of Wiining_Combination)
  {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column];

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol)
    {
      winner = player[firstSquareSymbol];
    }
  }
  return winner;
}

function derivedGameBoard(gameTurns)
{
  let gameBoard = [...Initial_Game_Board.map(array => [...array])];

  for(const turn of gameTurns)
  {
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {
  const [player, setPlayer]= useState(PLAYERS);

  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedActivePlayer(gameTurns);

  const gameBoard = derivedGameBoard(gameTurns);

  const winner = derivedWinner(gameBoard, player);

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {

    setGameTurns((prevTurns) => {
      let currentPlayer = derivedActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handlePlayerNameChange(symbol, newName)
  {
    setPlayer((prevPlayers) => {
      return{
        ...prevPlayers,
        // overriding player name based on symbol
        [symbol]: newName 
      }
    });
  }

  function handleRestart ()
  {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            onChangeName = {handlePlayerNameChange}
            isActive={activePlayer === "X"}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            onChangeName = {handlePlayerNameChange}
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner = {winner} onRestart={handleRestart} /> }
        <GameBoard onSelectSquare={handleSelectSquare} 
          // turns={gameTurns} 
          board = {gameBoard}
          />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
