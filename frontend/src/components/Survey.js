import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { listSurvey } from "../actions/surveyAction";


export default function Survey() {
  const selectEmployee = useSelector(state => state.selectEmployee) 
  const         {name} =selectEmployee 
  console.log(name, "emp")
  const surveyList = useSelector(state => state.surveyList);
  const {survey,loading,error} = surveyList
  const dispatch = useDispatch();
  const handleClick = (e) => {
    //console.log("Survey", e.target.value)
    console.log(name,e.target.value)
  }
  useEffect(() => {
    dispatch(listSurvey())
    
     return () => {
     };
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
          {survey.map((survey) => (
            <tr key={survey.surveyName}>
              <td>{survey.surveyName}</td>
              <td>
                <button value={survey.surveyName} onClick={e=>handleClick(e)} className="btn btn-success">Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
                                 }

