import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import "./GameOfLife.css";

const numRows = 30;
const numCols = 30;

const operation = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

function GameOfLife() {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });

  const [running, setRunning] = useState(false);
  const [generations, setGenerations] = useState(0);
  const populationRef = useRef(0);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) return;

    populationRef.current = 0;

    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numRows; j++) {
            let neighbors = 0;

            operation.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;

              // Loc must be in the board
              if (newI >= 0 && newJ >= 0 && newI < numRows && newJ < numCols) {
                neighbors += g[newI][newJ];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (g[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }

            if (gridCopy[i][j]) {
              populationRef.current++;
            }
          }
        }

        if (!populationRef.current) setRunning(false);
        else setGenerations((g) => g + 1);
      });
    });

    setTimeout(runSimulation, 100);
  }, []);

  return (
    <div className="game-of-life">
      <div style={{ margin: "0 25%" }}>
        World survive {generations} generations
      </div>
      <button
        style={{ margin: "2px 25%" }}
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            setGenerations(0);
            runSimulation();
          }
        }}
      >
        {running ? "stop" : "start"}
      </button>
      <div
        className="board"
        style={{
          gridTemplateColumns: `repeat(${numCols},2vh)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, j) => (
            <div
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][j] = grid[i][j] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              key={`${i}-${j}`}
              className="cube"
              style={{
                backgroundColor: grid[i][j] ? "pink" : undefined,
                // width: "2vh",
                // height: "2vh",
                // border: "solid 1px black",
              }}
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default GameOfLife;
