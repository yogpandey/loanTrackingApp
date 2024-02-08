import React, { useState } from 'react';

function CostOfProject() {
  let [isAddItem, setIsAddItem] = useState(false);
  const [aboutProject, setAboutProject] = useState('');
  const [amountOfProject, setAmountOfProject] = useState(0.0);

  const [periodOfLoan, setPeriodOfLoan] = useState(0);
  const [noOfInstallments, setNoOfInstallments] = useState(0);

  const [marginMoneyPercent, setMarginMoneyPercent] = useState(0.0);
  const [loanPercentAmount, setLoanPercentAmount] = useState(0.0);
  const [marginMoney, setMarginMoney] = useState(0.0);
  const [loanAmount, setLoanAmount] = useState(0.0);
  const [interestRateByBank, setInterestRateByBank] = useState(0.0);

  const [projects, setProjects] = useState([]);
  const [totalCostOfProject, setTotalCostOfProject] = useState(0.0);

  const enterProduct = () => {
    setIsAddItem(true);
  };

//   const [projectLists, SetProjectList] = useState([]);

//   function showProjectList(){
//     return(
//         <>
//         {projectLists}
//         </>
//     );
//   }

  const addProduct = () => {
    const projectDetail = {
      aboutProject,
      AmountOfProject: parseFloat(amountOfProject),
    };

    setProjects((prevProjects) => [...prevProjects, projectDetail]);
    setTotalCostOfProject((prevTotalCost) => prevTotalCost + projectDetail.AmountOfProject);
    setAboutProject('');
    setAmountOfProject(0.0);

    // let projectList;
    // projectList = projects.map((product) => {return( <li key = {product.AmountOfProject}>{product.aboutProject} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{product.AmountOfProject}</li>)})

    // //  = projects.map((product) => {<li key = {product.AmountOfProject}>{product.aboutProject}</li>});

    // SetProjectList(projectList);

    

  };

//   function showProjectLists(){
//     let listStr = '';
//     for(let i = 0; i < projectLists.length; i++){
//         console.log(projectLists[i]);
//         listStr += projectLists[i];
//     }
//     return listStr;
//   }

  const sourceOfFund = (e) => {
    // const marginMoneyPerc = parseFloat(e.target.value);
    const marginMoney = parseFloat(e.target.value);
    const loanAmountMoney = totalCostOfProject - marginMoney;
    setMarginMoneyPercent(marginMoney/totalCostOfProject*100);
    setLoanPercentAmount(loanAmountMoney/totalCostOfProject*100);
    setLoanAmount(loanPercentAmount * totalCostOfProject / 100);
    setMarginMoney(marginMoneyPercent * totalCostOfProject / 100);
  };

  const handleSave = () => {
    // setIsAddItem(false);
    const costOfProjects = projects;
    const SourceOfFund = {
      MarginMoneyPercent: marginMoneyPercent,
      LoanAmountPercent: loanPercentAmount,
      ContributionAsMarginMoney: totalCostOfProject * (marginMoneyPercent / 100),
      ContributionAsLoanAmount: totalCostOfProject * (loanPercentAmount / 100),
    };

    const borrowerDetails = {
      costOfProject: costOfProjects,
      totalCostOfProject,
      SourceOfFund,
      InterestRateByBank: interestRateByBank,
      periodOfLoan,
      noOfInstallments,
    };

    console.log(borrowerDetails);
  };

  return (
    <div>
      <h4>DEFINE COST OF THE PROJECT</h4>
      <button
        style={{ backgroundColor: 'blue', width: '60px', height: '40px', color: 'white', borderRadius: '5px' }}
        onClick={enterProduct}
      >
        Enter Item
      </button>

      {isAddItem && (
        <div>
            <span>About the Project</span>
          <input
            style={{ width: '300px', height: '20px', borderRadius: '5px', padding: '2px', margin: '5px' }}
            value={aboutProject}
            onChange={(e) => setAboutProject(e.target.value)}
          />
          {/* <br /> */}

          <span>Amount Rs.</span>
          <input
            style={{ width: '150px', height: '20px', borderRadius: '5px', padding: '2px', margin: '5px' }}
            value={amountOfProject}
            type='number'
            step="0.01"
            onChange={(e) => setAmountOfProject(parseFloat(e.target.value))}
          />
          <button
            style={{ backgroundColor: 'blue', width: '60px', height: '40px', color: 'white', borderRadius: '5px' }}
            onClick={addProduct}
          >
            Add Item
          </button>

          <table>
            <thead>
                <tr>
                    <th>About Project</th>
                    <th>Amount (Rs.)</th>
                </tr>
            </thead>
            {/* <t key='About Project'>About Project&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount(Rs.)</li> */}
            <tbody>
            {
                // showProjectList()
                // projects.map((project) => (<li key={project.aboutProject}>{project.aboutProject}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{project.AmountOfProject}</li>))
                projects.map((project) => (
                    <tr key={project.aboutProject}>
                      <td>{project.aboutProject}</td>
                      <td>{project.AmountOfProject}</td>
                    </tr>
                  ))
            }
            <tr key='totalCost'>
            <td>Total Cost Of Project</td>
            <td>{totalCostOfProject}</td>
            </tr>
            </tbody>
            </table>

           {/* <span>Total Cost Of Project= </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{totalCostOfProject}            */}

          <h4>SOURCES OF FUND</h4>
          
          <br />
          <span>Contribution &nbsp; <input
            style={{ width: '80px', height: '10px', borderRadius: '5px', padding: '5px' }}
            value={marginMoney}
            type='number'
            onChange={sourceOfFund}
          /> as Margin Money @ {marginMoneyPercent} %</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <u>{marginMoney}</u>
          <br /> <br/>
          <span>Loan Amount @ {loanPercentAmount} %</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <u>{loanAmount}</u>
          <br/><br/>
          <div>Interest Rate Charged By the Bank 
          <input
            style={{ width: '300px', height: '20px', borderRadius: '5px', padding: '5px' }}
            value={interestRateByBank}
            step="0.01"
            type='number'
            onChange={(e) => setInterestRateByBank(parseFloat(e.target.value))}
          /> </div>
          <br/>
          <div>Period Of Loan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            style={{ width: '300px', height: '20px', borderRadius: '5px', padding: '5px' }}
            value={periodOfLoan}
            onChange={(e) => setPeriodOfLoan(parseInt(e.target.value))}
          /></div><br/>
          <div>No. Of Installments &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            style={{ width: '300px', height: '20px', borderRadius: '5px', padding: '5px' }}
            value={noOfInstallments}
            onChange={(e) => setNoOfInstallments(parseInt(e.target.value))}
          /> </div><br/>
          <br />
          <br />

          <button
            style={{ width: '100px', height: '45px', borderRadius: '5px', padding: '15px', textAlign: 'center' }}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default CostOfProject;
