import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import imgP from "../images/icon-paper.svg"
import imgS from "../images/icon-scissors.svg"
import imgR from "../images/icon-rock.svg"

const StyleDiv = styled.div`
  .game {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  .game__you,
  .game__house {
    display: flex;
    flex-direction: column;
  }
  .game__play {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 2rem;
  }
  .game__play > .text {
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .play-again {
    background-color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 0.8rem;
  }
  .play-again:hover {
    color: red;
  }
  .text {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 2.5rem;
  }
  .icon {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    border-color: transparent;
    border: 25px solid;
    background-size: 50%;
  }
  .icon--paper {
    background-color: #fff;
    background-image: url("${imgP}");
    background-position: center;
    background-repeat: no-repeat;
    border-color: hsl(230, 89%, 62%);
  }
  .icon--scissors {
    background-color: #fff;
    background-image: url("${imgS}");
    background-position: center;
    background-repeat: no-repeat;
    border-color: hsl(39, 89%, 49%);
  }
  .icon--rock {
    background-color: #fff;
    background-image: url("${imgR}");
    background-position: center;
    background-repeat: no-repeat;
    border-color: hsl(349, 71%, 52%);
  }
  .container {
    display: flex;
    margin-top: 50px;
  }
`

function Game({ myChoice, score, setScore }) {
  const [house, setHouse] = useState("")
  const [playerWin, setPlayerWin] = useState("")

  const newHousePick = () => {
    const choice = ["rock", "paper", "scissors"]
    setHouse(choice[Math.floor(Math.random() * 3)])
  }

  const resultScore = () => {  
    if (myChoice === "rock" && house === "scissors") {
      setPlayerWin("win")
      setScore(score + 1)
    } else if (myChoice === "scissors" && house === "rock") {
      setPlayerWin("lose")
      setScore(score - 1)
    } else if (myChoice === "paper" && house === "rock") {
      setPlayerWin("win")
      setScore(score + 1)
    } else if (myChoice === "rock" && house === "paper") {
      setPlayerWin("lose")
      setScore(score - 1)
    } else if (myChoice === "scissors" && house === "paper") {
      setPlayerWin("win")
      setScore(score + 1)
    } else if (myChoice === "paper" && house === "scissors") {
      setPlayerWin("lose")
      setScore(score - 1)
    } else {
      setPlayerWin("draw")
    }
  }

  useEffect(() => {
    resultScore()
  }, [house])

  useEffect(() => {
    newHousePick()
  }, [])

  return (
    <StyleDiv className="game">
      <div className="container">
        <div className="game__you">
          <span className="text">You Picked</span>
          <div className={`icon icon--${myChoice}`}></div>
        </div>

        {playerWin === "win" && (
          <div className="game__play">
            <span className="text" style={{ color: "green" }}>
              You Win
            </span>
            <Link to="/" className="play-again" onClick={newHousePick}>
              Play Again
            </Link>
          </div>
        )}
        {playerWin === "lose" && (
          <div className="game__play">
            <span className="text" style={{ color: "red" }}>
              You Lose
            </span>
            <Link to="/" className="play-again" onClick={newHousePick}>
              Play Again
            </Link>
          </div>
        )}
        {playerWin === "draw" && (
          <div className="game__play">
            <span className="text">Draw</span>
            <Link to="/" className="play-again" onClick={newHousePick}>
              Play Again
            </Link>
          </div>
        )}

        <div className="game__house">
          <span className="text">The House Picked</span>
          <div className={`icon icon--${house}`}></div>
        </div>
      </div>
    </StyleDiv>
  )
}

export default Game
