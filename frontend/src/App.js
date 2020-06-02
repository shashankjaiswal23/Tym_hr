import React,{useState} from 'react'
import "react-bootstrap"
import Employee from './components/Employee'
import AssignedSurvey from './components/AssignedSurvey'
import Survey from './components/Survey'
import Done from './components/Done'
import { BrowserRouter, Route, Link } from "react-router-dom";


export default function App() {
  const [surveylist, setSurveylist] = useState()
  const surveyFunction =(list)=>{
    setSurveylist(list)
  }

  return (
    <BrowserRouter>
      <div>
        <div className="container text-center">
          <h3>Select Employee</h3>
          <Route path="/" exact component={Employee} />
          <Route path="/about" component={AssignedSurvey} />

          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <h3>Survey list</h3>
                <Survey handleSurveylist={(list) => surveyFunction(list)} />
              </div>
              <div className="col-sm-6">
                <h3>Assigned survey</h3>
                <AssignedSurvey surveylist={surveylist} />
              </div>
            </div>
          </div>
          <Done />
        </div>
      </div>
    </BrowserRouter>
  );
}

