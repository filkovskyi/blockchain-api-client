import {
  LOAD_BLOCK,
  LOAD_BLOCK_HASH,
  LOAD_BLOCK_SUCCESS,
  LOAD_BLOCK_ERROR,
} from './constants';

export function loadBlock() {
  return {
    type: LOAD_BLOCK,
  };
}

export function loadBlockHash(hash) {
  console.log(hash)
  return {
    type: LOAD_BLOCK_HASH,
    hash,
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
