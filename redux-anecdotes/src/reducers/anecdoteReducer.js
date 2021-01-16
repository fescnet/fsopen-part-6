import anecdoteService from '../services/anecdotes'
import { setNotification } from './notificationReducer'

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'UPDATE_ANECDOTE':
      const id = action.data.id
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : action.data
      )
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
    dispatch(setNotification(`anecdote '${content}' created!`, 5))
  }
}

export const vote = anecdote => {
  return async dispatch => {
    const changedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const updatedAnecdote = await anecdoteService.update(changedAnecdote.id, changedAnecdote)
    dispatch({
      type: 'UPDATE_ANECDOTE',
      data: updatedAnecdote
    })
    dispatch(setNotification(`you voted '${updatedAnecdote.content}'`, 5))
  }
}

export default reducer
