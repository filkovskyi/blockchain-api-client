import {
  LOAD_BLOCK,
  LOAD_BLOCK_SUCCESS,
  LOAD_BLOCK_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  blockChain: {
    block: false,
  },
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BLOCK: {
      const newState = {
        ...state,
        loading: true,
        error: false,
        blockChain: {
          block: false,
          defaultHash: '0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103'
        },
      };

      return newState;
    }
    case LOAD_BLOCK_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        blockChain: {
          block: action.block,
        },
      };
      return newState;
    }

    case LOAD_BLOCK_ERROR: {
      return { ...state, error: action.error, loading: false };
    }
    default:
      return state;
  }
}

export default appReducer;
