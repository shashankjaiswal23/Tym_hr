import { SURVEY_LIST_REQUEST, SURVEY_LIST_SUCCESS, SURVEY_LIST_FAIL, ASSIGNED_REQUEST, ASSIGNED_SUCCESS, ASSIGNED_FAIL } from "../constants/surveyConstants";
import Axios from "axios";

const listSurvey = () => async (dispatch) => {
    try {
        dispatch({ type: SURVEY_LIST_REQUEST });
        const { data } = await Axios.get("/api/survey/unAssigned");
        dispatch({
          type: SURVEY_LIST_SUCCESS,
          payload: data,
        });
    } catch (error) {
        dispatch({ type: SURVEY_LIST_FAIL, payload: error.message });
    }
    
}

const listAssigned = () => async (dispatch) => {
  try {
    dispatch({ type: ASSIGNED_REQUEST });
    const { data } = await Axios.get("/api/survey");
    dispatch({
      type: ASSIGNED_SUCCESS,
      payload: data.filter((x) => x.isAssigned === true ),
    });
  } catch (error) {
    dispatch({ type: ASSIGNED_FAIL, payload: error.message });
  }
};


export{listAssigned}
export {listSurvey}