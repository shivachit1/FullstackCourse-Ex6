import anecdoteService from '../services/anecdotes'

const sortAnecdotes = (anecdotesToBeSorted) => {
  // sort by value descending order (higher votes to lowest)
    const sortedAnecdotes = anecdotesToBeSorted.sort( (a, b) => {
      return b.votes - a.votes
    })
    return sortedAnecdotes
}


const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return sortAnecdotes(action.payload)

    case 'VOTE':
      const voteAnecdote = action.payload
      const newState = state.map(anecdote => anecdote.id===voteAnecdote.id ? voteAnecdote : anecdote)
      return sortAnecdotes(newState)
    case 'NEW_ANECDOTE':
      return [...state,action.payload]
    
    default: return state
  }
}


export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      payload:anecdotes
    })
  }
}

export const createAnecdote = (content) => {
   return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
    payload:newAnecdote
    })
  }
}
export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    anecdote.votes +=1
    const updatedAnecdote = await anecdoteService.update(anecdote.id, anecdote)
    dispatch({
      type: 'VOTE',
      payload: updatedAnecdote
    })
  }
}

export default reducer