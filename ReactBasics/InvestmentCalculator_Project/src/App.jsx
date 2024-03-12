import { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";

const fieldArray = {
  initialInvestment : 10000,
  annualInvestment : 1200,
  expectedReturn : 6,
  duration : 10
}

function App() {

  const [initialResultSet, setResult] = useState(fieldArray);


  function handleValueChange(valueChangedLabel, valueinput)
  {
    setResult((previnput)=>{
      return {
        ...previnput,
        [valueChangedLabel] : +valueinput,
      }
    });
  }

  const isInputValid= initialResultSet.duration >=1;

  return (
    <>
      <div id="user-input">

        <ol className="input-group">
          <Form labelName = "InitialInvestment" valueChangedFor = "initialInvestment" setValue = {initialResultSet.initialInvestment} onValueChange = {handleValueChange}></Form>
          <Form labelName = "AnnualInvestment" valueChangedFor = "annualInvestment" setValue = {initialResultSet.annualInvestment} onValueChange = {handleValueChange}></Form>
        </ol>
        <ol className="input-group">
          <Form labelName = "ExpectedReturn" valueChangedFor = "expectedReturn" setValue = {initialResultSet.expectedReturn} onValueChange = {handleValueChange}></Form>
          <Form labelName = "Duration" valueChangedFor = "duration" setValue = {initialResultSet.duration} onValueChange = {handleValueChange}></Form>
        </ol>
      </div>
      {
        isInputValid &&
        <Result input = {initialResultSet}/>
      }
      {
        !isInputValid && <p className="center">Please Enter a duration greator then 0</p>
      }
    </>
  );
}

export default App;
