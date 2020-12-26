
const initialState = ''

const reducer = (state =initialState, action) => {
    switch(action.type) {
        
        case 'SHOW_NOTIFICATION' :
                return action.message

        case 'CLEAR_NOTIFICATION' :
                return ''
        default: return state
    }
  }

  var timeoutID='';
  export const setNotification = (content,duration) => {
    return async dispatch => {
        if(timeoutID!==''){
            clearTimeout(timeoutID)
        }
        timeoutID = setTimeout(() => {
            dispatch(clearNotification())
          }, duration)

          dispatch({
            type: 'SHOW_NOTIFICATION',
            message:content
          })
      }
   
  }

  export const clearNotification = () => {
    return {
        type: 'CLEAR_NOTIFICATION',
      }
  }


  export default reducer