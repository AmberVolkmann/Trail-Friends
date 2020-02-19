import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* deleteContribution(action) {
    console.log('action.payload', action.payload)

  try {
    const response = yield axios.delete(`/api/contributions/${action.payload}`,  );
    yield put({ 
        type: 'FETCH_CONTRIBUTIONS', 
        // payload: response.data
    })
    console.log(response.data)
  } catch (error) {
      console.log('Error delete contribution Saga:', error);
      
  }
}

function* deleteContributionSaga() {
  yield takeEvery('DELETE_CONTRIBUTION', deleteContribution);
}

export default deleteContributionSaga;