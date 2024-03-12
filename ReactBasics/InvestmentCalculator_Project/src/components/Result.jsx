import {calculateInvestmentResults, formatter} from '../util/investment.js';

export default function Result({input}) {


let annualData = calculateInvestmentResults(input);
const inititalInvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment;


  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map(yearData => {
            const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year -inititalInvestment;
            const totalAmtInvested = yearData.valueEndOfYear - totalInterest;
            return <tr key = {yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmtInvested)}</td>
            </tr>
        })}
      </tbody>
    </table>
  );
}
