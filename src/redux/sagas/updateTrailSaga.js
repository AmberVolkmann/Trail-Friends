import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* updateCurrentTrail(action) {
    console.log('action.payload', action.payload)

  try {
    const response = yield axios.put(`/api/alltrails/${action.payload}`, action.payload);
    yield put({ 
        type: 'SET_CURRENT_TRAIL', 
        // payload: response.data
    })
    console.log(response.data)
  } catch (error) {
      console.log('Error wieth update current trail Saga:', error);
      
  }
}

function* updateCurrentTrailSaga() {
  yield takeEvery('UPDATE_CURRENT_TRAIL', updateCurrentTrail);
}

export default updateCurrentTrailSaga;