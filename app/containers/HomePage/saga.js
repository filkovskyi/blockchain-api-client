import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_BLOCK, LOAD_BLOCK_HASH } from './constants';
import { blockLoaded, blockLoadingError } from './actions';

import request from '../../utils/request';

export function* getBlock() {
  const requestURL =
    'https://blockchain.info/rawblock/0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103?cors=true';

  try {
    const block = yield call(request, requestURL);
    yield put(blockLoaded(block));
  } catch (err) {
    yield put(blockLoadingError(err));
  }
}

export function* getBlockHash(actionData) {
  console.log(actionData)
  const requestURL = `https://blockchain.info/rawblock/${actionData.hash}?cors=true`;

  try {
    const block = yield call(request, requestURL);
    yield put(blockLoaded(block));
  } catch (err) {
    yield put(blockLoadingError(err));
  }
}

export default function* githubData() {
  yield takeLatest(LOAD_BLOCK, getBlock);
  yield takeLatest(LOAD_BLOCK_HASH, getBlockHash);
}
