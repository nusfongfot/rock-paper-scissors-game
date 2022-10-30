import { Link } from "react-router-dom"
import styled from "styled-components"
import Triangle from "../images/bg-triangle.svg"
import imgP from "../images/icon-paper.svg"
import imgS from "../images/icon-scissors.svg"
import imgR from "../images/icon-rock.svg"

const StyleDiv = styled.div`
  .play {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 3rem;
  }
  .triangle {
    align-self: center;
    position: absolute;
    margin-top: 4.5rem;
    left: 620px;
  }
  .items {
    display: flex;
    justify-content: center;
  }
  .icon {
    height: 160px;
    width: 160px;
    border: 1rem solid;
    border-radius: 50%;
  }
  .icon-paper {
    background-color: #fff;
    background-image: url("${imgP}");
    background-position: center;
    background-repeat: no-repeat;
    border-color: hsl(230, 89%, 62%);
    transform: translateX(1.5rem);
  }
  .icon-paper:hover {
    transform: translateX(1.5rem) scale(1.1);
  }
  .icon-scissors {
    background-color: #fff;
    background-image: url("${imgS}");
    background-position: center;
    background-repeat: no-repeat;
    border-color: hsl(39, 89%, 49%);
    transform: translateX(8rem);
  }
  .icon-scissors:hover {
    transform: translateX(8rem) scale(1.1);
  }
  .icon-rock {
    background-color: #fff;
    background-image: url("${imgR}");
    background-position: center;
    background-repeat: no-repeat;
    border-color: hsl(349, 71%, 52%);
    transform: translateY(15rem) translateX(-12rem);
  }
  .icon-rock:hover {
    transform: translateY(15rem) translateX(-12rem) scale(1.1);
  }
`

function Play({ setMyChoice }) {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id)
  }

  return (
    <StyleDiv className="play">
      <img src={Triangle} alt="" className="triangle" />
      <div className="items">
        <Link to="/game">
          <div
            className="icon icon-paper"
            data-id="paper"
            onClick={setChoice}
          ></div>
        </Link>
        <Link to="/game">
          <div
            className="icon icon-scissors"
            data-id="scissors"
            onClick={setChoice}
          ></div>
        </Link>
        <Link to="/game">
          <div
            className="icon icon-rock"
            data-id="rock"
            onClick={setChoice}
          ></div>
        </Link>
      </div>
    </StyleDiv>
  )
}

export default Play
