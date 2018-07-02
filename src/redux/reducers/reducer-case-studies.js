import * as types from '../actions/types';

const initialState = {
  list: [],
  item: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CASE_STUDIES_SUCCESS:
      return {
        ...state,
        list: state.list.concat(action.payload)
      };
    case types.GET_CASE_STUDY:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
