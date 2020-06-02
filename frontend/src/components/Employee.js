
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listEmployee, changeName } from "../actions/employeeAction";

export default function Employee() {
  const [name, setName] = useState('s')

  console.log("Name :" ,name)
  const employeeList = useSelector((state) => state.employeeList);
  const { employee, loading, error } = employeeList;
  const dispatch = useDispatch();
  dispatch(changeName(name));
  //console.log(dispatch(changeName(name, "abc")));
  
  useEffect(() => {
    dispatch(listEmployee());

    return () => {};
  }, []);

  //handleChange
  const handleChange = (e) => {
    setName(e.target.value)
    
  };


  return loading ? (
    <div>loading........</div>
  ) : error ? (
    <div>error</div>
  ) : (
    <div>
      <div className="container text-center">
        <label>Select Employee:</label>
        <select
          onChange={handleChange}
          id="Employee"
          name="Employee"
          className="Employee"
        >
          <option value="">Select</option>
          {employee.map((Employee) => (
            <option key={Employee} value={Employee}>
              {Employee}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

            
        