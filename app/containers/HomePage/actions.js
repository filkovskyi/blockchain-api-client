import { LOAD_BLOCK, LOAD_BLOCK_SUCCESS, LOAD_BLOCK_ERROR } from './constants';

export function loadBlock() {
  return {
    type: LOAD_BLOCK,
  };
}

export function blockLoaded(block) {
  return {
    type: LOAD_BLOCK_SUCCESS,
    block,
  };
}

export function blockLoadingError(error) {
  return {
    type: LOAD_BLOCK_ERROR,
    error,
  };
}
