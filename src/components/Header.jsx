import styled from 'styled-components';

const StyleDiv = styled.div`
  display: flex;
  border: 3px solid hsl(217, 16%, 45%);
  max-width: 43.75rem;
  width: 100%;
  margin-top: 1.8rem;
  border-radius: 1rem;
  padding: 1.5rem;
  justify-content: space-between;
    .text{
      font-size: 2.5rem;
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      line-height: 2rem;
    }
    .score-box{
      padding: 0.75rem 2.5rem;
      background-color: #fff;
      color: hsl(229, 64%, 46%);
      border-radius: 5px;    
    }
    .score-box__score{
      color: black;
      font-size: 3.5rem;
      font-weight: 700;
    }
`

function Header({ score }) {
  return (
    <StyleDiv className="header">
     <div className="text">
      <span>Rock</span>
      <span>Paper</span>
      <span>Scissors</span>
     </div>
     <div className="score-box">
      <span>Score</span>
      <div className="score-box__score">{score}</div>
     </div>
    </StyleDiv>
  )
}

export default Header