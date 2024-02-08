import {React, useState} from 'react';

function GetBorrowerDetails({borrowerDetails}){

    let [PurposeOfLoan, SetPurposeOfLoan] = useState('');
 // const [costOfProject ,SetCostOfProject] = useState('');
  let [BorrowerName ,SetBorrowerName] = useState('');
  let [RegisteredAddress ,SetRegisteredAddress] = useState('');
  let [Pan ,SetPan] = useState('');
  let [aboutProject ,SetAboutProject] = useState('');
  let [NameOfProject ,SetNameOfProject] = useState('');
  let [AmountOfProject ,SetAmountOfProject] = useState(0.00);

  let [periodOfLoan, SetPeriodOfLoan] = useState(0);
  let [noOfInstallments, SetNoOfInstallments] = useState(0);

  /** Source Of Fund*/
  let [marginMoneyPercent, SetMarginMoneyPercent] = useState(0.00);
  let [loanPercentAmount, SetLoanPercentAmount] = useState(0.00);
  
  let [marginMoney, SetMarginMoney] =  useState(0.00);
  let [loanAmount, SetLoanAmount] = useState(0.00);
  
  let [interestRateByBank, SetInterestRateByBank] = useState(0.0);

   /* */let projects = new Array(0);
   let totalCostOfProject = 0.00;
   let projectDetails = {
     aboutProject: "",
     NameOfProject: "",
     AmountOfProject:0.00
   };

  async function addProduct(){
    let projectDetail = Object.create(projectDetails);
    projectDetail.aboutProject = aboutProject;
    projectDetail.NameOfProject = NameOfProject;
    projectDetail.AmountOfProject = parseFloat(AmountOfProject);
    await projects.push(projectDetail);
    alert(projects);                       
    console.log(projects);
    totalCostOfProject += projectDetail.AmountOfProject;
    console.log(totalCostOfProject);
    // AmountOfProject = 1;
}

async function sourceOfFund(e) {

    let marginMoneyPerc = parseFloat(e.target.value);
        
    await SetMarginMoneyPercent(marginMoneyPerc)
     SetLoanPercentAmount(parseFloat(100.00 - marginMoneyPerc));
    let loanAmount = 0.00;
    loanAmount = loanPercentAmount*totalCostOfProject/100;
    await SetLoanAmount(loanAmount);
    console.log(loanAmount);
    let marginAmount = 0.00;
    marginAmount = marginMoneyPercent*totalCostOfProject/100;
    console.log(marginAmount);
    await SetMarginMoney(marginAmount);

    console.log(marginMoneyPercent);
}

function handleSave(){

    borrowerDetails.BorrowersName = BorrowerName;
    borrowerDetails.RegisteredAddress = RegisteredAddress;
    borrowerDetails.Pan = Pan;
    borrowerDetails.PurposeOfLoan = PurposeOfLoan;
    let costOfProjects = projects;
    borrowerDetails.costOfProject = costOfProjects;
    borrowerDetails.totalCostOfProject = totalCostOfProject;
    let SourceOfFund = {};
    SourceOfFund.MarginMoneyPercent = marginMoneyPercent;
    SourceOfFund.LoanAmountPercent = loanPercentAmount;
    SourceOfFund.ContributionAsMarginMoney = totalCostOfProject*marginMoneyPercent/100;
    SourceOfFund.ContributionAsLoanAmount = totalCostOfProject*loanPercentAmount/100;
    borrowerDetails.SourceOfFund = SourceOfFund;
    borrowerDetails.InterestRateByBank = interestRateByBank;
    borrowerDetails.periodOfLoan = periodOfLoan;
    borrowerDetails.noOfInstallments = noOfInstallments;
    // let element = document.getElementsByClassName("AppForm");


}


    return(
    <div className='AppForm'>
    {/* <div style = {{display: displayValue}}> */}
    <h4>Borrower's Name</h4>
      <input style = {{width : "700px",height: "30px", borderRadius:'5px', padding: '5px'}} value = {BorrowerName} onChange={e => SetBorrowerName(e.target.value)} ></input>
    <h4>Registered Address</h4>
      <input style = {{width : "700px",height: "30px", borderRadius:'5px', padding: '5px'}} value = {RegisteredAddress} onChange={e => SetRegisteredAddress(e.target.value)} ></input>
    <h4>Pan</h4>
      <input style = {{width : "700px",height: "30px", borderRadius:'5px', padding: '5px'}} value = {Pan} onChange={e => SetPan(e.target.value)} ></input>
      <h4>About the Project / Purpose of Loan</h4>
      <input style = {{width : "700px",height: "30px", borderRadius:'5px', padding: '5px'}} value = {PurposeOfLoan} onChange={e => SetPurposeOfLoan(e.target.value)} ></input>
      <h4>DEFINE COST OF THE PROJECT</h4>
      {/*<input style = {{width : "700px",height: "30px", borderRadius:'5px', padding: '5px'}} value = {costOfProject} onChange={e => SetCostOfProject(e.target.value)} ></input>*/}
      {/*<span>About Project</span>*/}
      <input style = {{width : "500px",height: "20px", borderRadius:'5px', padding: '2px', margin: '5px'}} value = {aboutProject} onChange={e => SetAboutProject(e.target.value)}></input>
      <br/>
      {/*<span>Name Of Project</span>*/}
      <input style = {{width : "500px",height: "20px", borderRadius:'5px', padding: '2px', margin: '5px'}} value = {NameOfProject} onChange={e => SetNameOfProject(e.target.value)}></input>
      <br/>
      <span>Amount Rs.</span>
      <input style = {{width : "150px",height: "20px", borderRadius:'5px', padding: '2px', margin: '5px'}} value = {AmountOfProject} onChange={e => SetAmountOfProject(parseFloat(e.target.value))}></input>
      <button style = {{backgroundColor:"blue", width: "60px", height: "40px", color:"white", borderRadius:"5px"}}onClick={addProduct}>Add Item</button>
      
      <h4>SOURCES OF FUND</h4>
      <input style = {{width : "700px",height: "20px", borderRadius:'5px', padding: '5px'}} value = {marginMoneyPercent} onChange={sourceOfFund }></input>
        <br/>
      <span>Contribution as Margin Money @ {marginMoneyPercent} %</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <u>{marginMoney}</u> 
      <br/>
      <span>Loan Amount @ {loanPercentAmount} %</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <u>{loanAmount}</u>
      <div>Interest Rate Charged By the Bank </div>
      <input style = {{width : "700px",height: "20px", borderRadius:'5px', padding: '5px'}} value = {interestRateByBank} onChange={(e) => { SetInterestRateByBank(parseFloat(e.target.value))} }></input>
      <div>Period Of Loan </div>
      <input style = {{width : "700px",height: "20px", borderRadius:'5px', padding: '5px'}} value = {periodOfLoan} onChange={(e) => { SetPeriodOfLoan(parseInt(e.target.value))} }></input>
      <div>No. Of Installments </div>
      <input style = {{width : "700px",height: "20px", borderRadius:'5px', padding: '5px'}} value = {noOfInstallments} onChange={(e) => { SetNoOfInstallments(parseInt(e.target.value))} }></input>
      <br/>
      <br/>

      <button style = {{width : "100px",height: "45px", borderRadius:'5px', padding: '15px', textAlign: "center"}} onClick={handleSave}>Save</button>


      </div>
    );
}

export default GetBorrowerDetails;