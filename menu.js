import React from "react";
import { Route , RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import GetBorrowerDetails from "./GetBorrowerDetails";
import ShowBorrowerDetails from "./ShowBorrowerDetails";
import CostOfProject from "./CostOfTheProject";
import RepaymentSchedule from "./RepaymentSchedule";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path = '/' element = {<GetBorrowerDetails/>}>
                </Route>
            <Route path = 'showBorrowerDetails' element = {<ShowBorrowerDetails/>}/>
            <Route path = 'costOfTheProject' element = {<CostOfProject/>}/>
            <Route path = 'repaymentSchedule' element = {<RepaymentSchedule />} />
        </Route>
    ))


function Menu(){
    return(
        <>
        <ul>
            <li>
                {/* <Link to='/'>GetBorrowerDetails</Link> */}
                <a href="/">GetBorrowerDetails</a>
            </li>
            <li>
                {/* <Link to='showBorrowerDetails'>ShowBorrowerDetails</Link> */}
                <a href="showBorrowerDetails">ShowBorrowerDetails</a>
            </li>
            <li>
                <a href="costOfTheProject">
                    CostOfTheProject
                </a>
            </li>
            <li>
                <a href="repaymentSchedule">
                    RepaymentSchedule
                </a>
            </li>
        </ul>
        <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default Menu;