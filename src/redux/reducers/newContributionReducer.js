const newContributionReducer = (state = {}, action ) => {
    if ( action.type === 'ADD_NEW_CONTRIBUTION') {
        return action.payload
    }
    return state
}
  
export default newContributionReducer;