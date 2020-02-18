import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
// import { response } from 'express';

function* getContributionSaga() {
  try {
    const response = yield axios.get('/api/contributions');
    yield put({ 
        type: 'SET_CONTRIBUTIONS', payload: response.data
    })
    console.log(response.data)
  } catch (error) {
      console.log('Error with getContribution Saga', error);
      
  }
}

function* contributionSaga() {
  yield takeEvery('FETCH_CONTRIBUTIONS', getContributionSaga);
}

export default contributionSaga;