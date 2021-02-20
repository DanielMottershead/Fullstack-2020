import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Statistics = (props) => {
 return(
    <table>
      <tbody>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.all} />
      <StatisticLine text="average" value ={props.avg} />
      <StatisticLine text="positive" value ={props.pos} symb=" %" />
      </tbody>
    </table>
  )
 }

 const StatisticLine = (props) => <tr><td>{props.text}</td><td>{props.value}{props.symb}</td></tr>

const Display  = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const all = good + neutral + bad
  const avg = Math.round(((good - bad) / all)*10)/10
  const pos = Math.round((good/all)*1000)/10
  
  if(all < 1 ){
    return(
      <p>No feedback given</p>
    )
  }else{
  return (
  <div>
    
    <Statistics good ={good} neutral={neutral} bad={bad} all={all} avg={avg} pos={pos}></Statistics>
  </div>
  )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addReview = (type) => {
    if(type == "Good") setGood(good +1)
    else if(type == "Neutral") setNeutral(neutral +1)
    else setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => addReview("Good")}></Button>
      <Button text="neutral" handleClick={() => addReview("Neutral")}></Button>
      <Button text="bad" handleClick={() => addReview("Bad")}></Button>
      <h1>statistics</h1>
      <Display good={good} neutral={neutral} bad={bad}></Display>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)