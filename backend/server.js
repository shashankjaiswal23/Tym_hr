const http = require("http");
const data = require('./SurveyData')
const empData = require('./Employeedata')

const server = http.createServer((req, res) => {
  if (req.url === "/api/employee") {
    res.write(
      JSON.stringify(empData.empData.Employee)
    );
    res.end();
  }
  if (req.url === "/api/survey") {
      res.write(
        JSON.stringify(data.data.Survey)
      );
    res.end();
  }
  if (req.url === "/api/assignedSurvey") {
    const aSurvey = data.data.Survey;
    const asSurvey = aSurvey.filter((d) => d.isAssigned === true);
    res.write(JSON.stringify(asSurvey))
    
    res.end();
  }
  if (req.url === "/api/survey/unAssigned") {
    const aSurvey = data.data.Survey;
    const asSurvey = aSurvey.filter((d) => d.isAssigned === false);
    res.write(JSON.stringify(asSurvey));

    res.end();
  }
});

server.listen(5000, console.log("server is working on port 5000"));
