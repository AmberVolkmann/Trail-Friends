const trailReducer = (state = [], action ) => {
    if ( action.type === 'GET_TRAILS') {
        return action.payload
    }
    return state
}
  
  // user will be on the redux state at:
  // state.user
export default trailReducer;