import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = (props) => {
  return(
    <div>
      {props.anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => {
            props.vote(anecdote)
          }
          }
        />
      )}
    </div>
  )
}

const order = (anecdotes) => {
    const orderedAnecdotes = [ ...anecdotes ]
    return orderedAnecdotes.sort((a,b) => {
      if (a.votes < b.votes) {
        return 1
      }
      if (a.votes > b.votes) {
        return -1
      }
      return 0
    })
}

const mapStateToProps = (state) => {
  let anecdotes = state.anecdotes
  if ( state.filter ) {
    anecdotes = state.anecdotes.filter(
      a => a.content.toLowerCase().includes(state.filter.toLowerCase())
    )
  }
  return { anecdotes: order(anecdotes) }
}

const mapDispatchToProps = {
  vote
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
