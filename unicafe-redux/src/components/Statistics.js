import React from 'react'
import Statistic from './Statistic'

const Statistics = ({good, neutral, bad}) => {
  // calcs
  const all = good + neutral + bad
  const average = (all)? (good - bad) / all : 0
  const positive = (all)? good * 100 / all : 0
  // I know I could avoid that if statements above
  // But I think this way is more readable than declaring consts inside the if statement below

  if(all){
    return (
      <table>
        <tbody>
          <Statistic text="good" value={good} unit="" />
          <Statistic text="neutral" value={neutral} unit="" />
          <Statistic text="bad" value={bad} unit="" />
          <Statistic text="all" value={all} unit="" />
          <Statistic text="average" value={average} unit="" />
          <Statistic text="positive" value={positive} unit="%" />
        </tbody>
      </table>
    )
  }

  return <div>No feedback given</div>
}

export default Statistics
