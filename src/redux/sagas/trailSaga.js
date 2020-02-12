import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { response } from 'express';

function* getTrails(action) {
  try {
    yield axios.get('/api/alltrails', action.payload);
    yield put({ 
        type: 'SET_TRAILS', payload: response.data
    })
  } catch (error) {
      console.log('Error wieth getTrails Saga:', error);
      
  }
}

function* trailSaga() {
  yield takeEvery('GET_TRAILS', getTrails);
}

export default trailSaga;