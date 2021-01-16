import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'
import Statistics from './components/Statistics'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const neutral = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  const reset = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={good}>good</button>
      <button onClick={neutral}>neutral</button>
      <button onClick={bad}>bad</button>
      <button onClick={reset}>reset stats</button>
      {/*<div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>*/}
      <h1>statistics</h1>
      <Statistics good={store.getState().good} neutral={store.getState().ok} bad={store.getState().bad} />
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
