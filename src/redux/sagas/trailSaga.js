import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
// import { response } from 'express';

function* getTrailSaga() {
  try {
    const response = yield axios.get('/api/alltrails');
    yield put({ 
        type: 'SET_TRAILS', payload: response.data
    })
    console.log(response.data)
  } catch (error) {
      console.log('Error wieth getTrails Saga:', error);
      
  }
}

function* trailSaga() {
  yield takeEvery('FETCH_TRAILS', getTrailSaga);
}

export default trailSaga;