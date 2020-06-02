import {
  SURVEY_LIST_REQUEST,
  SURVEY_LIST_SUCCESS,
  SURVEY_LIST_FAIL,
  ASSIGNED_REQUEST,
  ASSIGNED_SUCCESS,
  ASSIGNED_FAIL,
} from "../constants/surveyConstants";

function surveyListReducer(state = { survey: [] }, action) {
    switch (action.type) {
      case SURVEY_LIST_REQUEST:
        return { loading: true };
      case SURVEY_LIST_SUCCESS  :
        return { loading: false, survey: action.payload };
      case SURVEY_LIST_FAIL:
        return { loading: false, error:action.payload };
        default: return state;
    }
}
function assignedReducer(state = { assigned: [] }, action) {
  switch (action.type) {
    case ASSIGNED_REQUEST:
      return { loading: true };
    case ASSIGNED_SUCCESS:
      return { loading: false, assigned: action.payload };
    case ASSIGNED_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export { surveyListReducer }
export {assignedReducer}