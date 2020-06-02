import {
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,
  EMPLOYEE_LIST_FAIL,
  SELECT_EMPLOYEE,
} from "../constants/employeeConstants";

function employeeListReducer(state = { employee: [] }, action) {
  switch (action.type) {
    case EMPLOYEE_LIST_REQUEST:
      return { loading: true };
    case EMPLOYEE_LIST_SUCCESS:
      return { loading: false, employee: action.payload };
    case EMPLOYEE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

// selectEmployee Reducer
const iState = {
  name : ""
}
function selectEmployeeReducer(state = iState, action) {
      switch (action.type) {
        case SELECT_EMPLOYEE:
          return {
            name: action.payload
          }

        default:
          return state

      }
}
export { employeeListReducer };
export { selectEmployeeReducer };
