const contributionReducer = (state = [], action ) => {
    if ( action.type === 'SET_CONTRIBUTIONS') {
        return action.payload
    }
    return state
}
  
  // user will be on the redux state at:
  // state.user
export default contributionReducer;