import "./App.css"
import Game from "./components/Game"
import Header from "./components/Header"
import Play from "./components/Play"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  const [myChoice, setMyChoice] = useState("")
  const [score, setScore] = useState(0)

  return (
    <>
      <Container className="container">
        <BrowserRouter>
          <Header score={score} />
          <Routes>
            <Route path="/" element={<Play setMyChoice={setMyChoice} />} />
            <Route
              path="game"
              element={
                <Game myChoice={myChoice} score={score} setScore={setScore} />
              }
            />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App
