import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* addNewContribution(action) {
    console.log('action.payload', action.payload)

  try {
    const response = yield axios.post(`/api/contributions`, action.payload);
    yield put({ 
        type: 'ADD_NEW_CONTRIBUTION', 
        // payload: response.data
    })
    console.log(response.data)
  } catch (error) {
      console.log('Error with add contribution saga:', error);
      
  }
}

function* addNewContributionSaga() {
  yield takeEvery('POST_CONTRIBUTION', addNewContribution);
}

export default addNewContributionSaga;