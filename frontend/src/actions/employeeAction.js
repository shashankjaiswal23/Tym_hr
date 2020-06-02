import {
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,
  EMPLOYEE_LIST_FAIL,
  SELECT_EMPLOYEE,
} from "../constants/employeeConstants";
import Axios from "axios";

const listEmployee = () => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_LIST_REQUEST });
    const { data } = await Axios.get("/api/employee");
    dispatch({ type: EMPLOYEE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: EMPLOYEE_LIST_FAIL, payload: error.message });
  }
};

const changeName = (name) => {
  return( {
    type: SELECT_EMPLOYEE,
    payload: name
  })
}
export {changeName}
export {listEmployee};
