const updateTrailReducer = (state = {}, action ) => {
    if ( action.type === 'SET_CURRENT_TRAIL') {
        return action.payload
    }
    return state
}
  
  // user will be on the redux state at:
  // state.user
export default updateTrailReducer;