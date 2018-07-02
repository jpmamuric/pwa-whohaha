import * as types from './types';
import axios from 'axios';

export const getCaseStudies = () => async dispatch => {
  dispatch({ type:types.GET_START });
  try {
    let res = await axios.get('http://whohaha.test/wp-json/wp/v2/case-studies?_embed');
    dispatch({ type: types.GET_CASE_STUDIES_SUCCESS, payload: res.data });

  } catch (err) {
    dispatch({ type: types.GET_CASE_STUDIES_FAIL, payload: err });
  }

}

export const getCaseStudy = data => ({ type: types.GET_CASE_STUDY, payload: data });
