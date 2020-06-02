import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listAssigned } from "../actions/surveyAction";
import { changeName } from "../actions/employeeAction";
//import selectEmployeeReducer from '../reducers/employeeReducer'
function AssignedSurvey(props) {

  const assignedList = useSelector(state => state.assignedList);
  const { assigned, loading, error } = assignedList;
  const selectEmployee = useSelector(state => state.selectEmployee);
  const { name } = selectEmployee;
   console.log("Myname", name);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeName())
    return () => {
      
    }
  }, [])
  useEffect(() => {
    dispatch(listAssigned());
    return () => {};
  }, []); 
  
    return loading ? (
      <div>loading........</div>
    ) : error ? (
      <div>error</div>
    ) : (
      <div>
        <table className="table table-condensed">
          <thead>
            <tr>
              <th>
                <form action="/">
                  <input type="text" placeholder="Search.." name="search" />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              assigned.filter(x=>x.assignedTo === name).map(y =>
              <tr key={y.surveyName}>
                <td>{y.surveyName}</td>
                <td><button className="btn btn-success">Remove</button></td>
              </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
}


export default AssignedSurvey