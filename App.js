//import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

/*const user = {
  name : "Baidyanath Kumar Pandey",
  pan : "AWJWM8287B",
  RegisteredAddress: "Village Jari, P.O. Purio, P.S. Ratu, District Ranchi, Jharkhand"
}*/

function LoanDetail(borrowersDetail) {
  return (
    <div >
      <h4 style = {{textAlign:"center"}}>{borrowersDetail.BorrowersName}</h4>
      <h4 style = {{textAlign:"center"}}>{borrowersDetail.RegisteredAddress}</h4>
      <h4 style = {{textAlign:"center"}}>{borrowersDetail.Pan}</h4>
    </div>
  );
}

// export default MyFunctionalComponent;

function App() {

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

  let borrowerDetails = {};

  let displayValue = 'block';

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

function handleRender(){

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
      let element = document.getElementsByClassName("AppForm");

      // console.log(element.style);
      // console.log(element.AppForm.display)
      // borrowerDetailDisplay = element.style.display;
      console.log(element.style);
      if(displayValue === 'none'){
        displayValue = 'block';
      }else if(displayValue === 'block'){
        displayValue = 'none';
      }
      console.log(displayValue)

      console.log(borrowerDetails);
}

function getBorrowerDetail(){

}

  return (
    <>
    
    <div className="App">

    

      <LoanDetail borrowersDetail= {borrowerDetails}/>

      <button style={{color:"white", backgroundColor:"black"}} onClick={getBorrowerDetail}>Back</button>
      <ul>
          {projects.map((project, index) => (
            <li key={index}>
              {project.aboutProject}, {project.NameOfProject},  {project.AmountOfProject}
            </li>
          ))}
        </ul>
      
    
    </div>
    
    </>
    );
}

export default App;
