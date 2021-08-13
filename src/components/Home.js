import React,{useState} from 'react';
import {BiSearch} from "react-icons/bi";
import {AiOutlineBell} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import profileImg from "../img/Ellipse 3.png"
import {TopBar} from "./Home.style"
import {Link} from "react-router-dom"
import Cards from "./Cards"
import Pagination from "./Pagination";
import Charts from "./BarCharts"
import ColumnChart from "./ColumnChart"
import {Bottom} from "./Home.style";
const Home = () => {
     
    const [state, setState]=useState("");
    const options = [
        
        {
          label: "lamborgini",
          value: "lamborgini",
        },
        {
          label: "Ferrari",
          value: "ferrari",
        },
        {
          label: "RangeRover",
          value: "rangerover",
        },
        {
          label: "KIA",
          value: "kia",
        },
      ];


    const handleChange=(e)=>{
         let a=e.target.value
         setState(a);
      }
    return (
        <div>
            <TopBar>
                <input type="search" placeholder={"Search for a race, car or racer"}/>
                    <select value={state} onChange={handleChange}>
                        {options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </select>

                    <Link to="./"> <AiOutlineBell/></Link>
                    <Link to="./"><BsPerson/></Link>
                    <Link to="./"> <img src={profileImg} alt="profile"/></Link>
            </TopBar>
            <Cards/>
            <Pagination/>
            <Bottom>
              <ColumnChart/>
              <Charts/>
            </Bottom>
           
           
            
            
        </div>
    );
};

export default Home;