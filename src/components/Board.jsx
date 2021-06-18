import React, {useState} from "react"
import Square from "./Squares";
  
  
  const Board = () => {
  
    const initialSquares = Array(9).fill(null)
    const [squares, setSquares] = useState(initialSquares);
    const [xIsNext, setXIsNest] = useState(true);
  
    const restart = () => {
      setSquares(initialSquares)
  }
  
    const handleClickEvent = (i) => {
      let copy = [...squares];
  
      const winnerDeclared = Boolean(calculateWinner(copy))
      const squareFilled = Boolean(copy[i])
      
      if(winnerDeclared || squareFilled)  {
        return;
      };
  
      copy[i] = xIsNext ? 'X' : 'O';
      setSquares(copy)
      setXIsNest(!xIsNext)
    }
  
    const renderSquare = (i) => {
      return (
        <>
        <Square 
        value={squares[i]}
        onClickEvent={() => handleClickEvent(i)}
        />
        </>
      )
    }
    
    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;
  
    return (
      <div>
        <div className="status"><p>{status}</p> <button onClick={restart} className="icon"><i class="fa fa-refresh" aria-hidden="true"></i></button></div>
        <div className="board-row">
          {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
        </div>
      </div>
    )
  }

  function calculateWinner (squares) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
      [0, 4, 8], [2, 4, 6], [6, 4, 2], [8, 4, 0] //diagonals
    ]
  
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];  //'X' or 'O'
    }
  }
  return null;
  }


export default Board;