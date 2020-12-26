const initialState = ''

const reducer = (state =initialState, action) => {
    switch(action.type) {
        case 'FILTER':
            return action.filter
    
        default: return state
    }
  }

export const filterAnecdotes = (content) => {
    return {
        type:'FILTER',
        filter:content
      }
  }

export default reducer