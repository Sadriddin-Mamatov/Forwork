import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiCreditCard } from "react-icons/bi";
import { BsGrid, BsPeople } from "react-icons/bs";
import { CgCalculator } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import Logo from "../img/Group 2.png";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { StyledMenu, BottomPart, BottomSelect } from "./SideBar.style";
import {Link} from 'react-router-dom'

const SideBar = () => {
  const [value, setValue] = React.useState("motogp2022");
  const [index, setIndex] = React.useState(1);
  const handleChanges = (event) => {
    setValue(event.target.value);
  };
  const options = [
    {
      id: "1",
      value: "killiua",
      label: "Killiua",
      img: "https://picsum.photos/25",
    },
    {
      id: "2",
      value: "kill",
      label: "Mr.kill",
      img: "https://picsum.photos/30",
    },
    {
      id: "3",
      value: "killu",
      label: "Killuada",
      img: "https://picsum.photos/30",
    },
  ];
  function handleChange(event) {
    let a = event.target.value;
    IngIndex(a)
  }
  function IngIndex(value){
      for(let i=0; i<options.length; i++){
        if(options[i].label===value){
            setIndex(options[i].id);  
        }
        
      }
  }

  return (
    <>
      <StyledMenu>
        <div>
          <img src={Logo} alt="logo" />
          <h2>iffee</h2>
        </div>
        <h4>Menu</h4>
        <ul>
          <li>
            <Link to="/home">
              <span>
                <AiOutlineHome />
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link to="/garage">
              <span>
                <BsGrid />
              </span>
              Garage
            </Link>
          </li>
          <li>
            <Link to="/service">
              <span>
                <BiCreditCard />
              </span>
              Service Menu
            </Link>
          </li>
          <li>
            <Link to="/racers">
              <span>
                <BsPeople />
              </span>
              Racers
            </Link>
          </li>
          <li>
            <Link to="/calculators">
              <span>
                <CgCalculator />
              </span>
              Calculators
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <span>
                <FiSettings />
              </span>
              Settings
            </Link>
          </li>
        </ul>
      </StyledMenu>
      <BottomPart>
        <h4>Scheduled Races</h4>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChanges}
        >
          <FormControlLabel
            value="motogp2022"
            control={<Radio />}
            label="MotoGP 2022"
          />
          <FormControlLabel
            value="dynamics22"
            control={<Radio />}
            label="Dynamics 22"
          />
          <FormControlLabel
            value="olympics"
            control={<Radio />}
            label="Olympics"
          />
        </RadioGroup>
      </BottomPart>
      <BottomSelect>
        <span><img src={options[index-1].img} alt="jsfdvhd"/></span>
        <div>
          <select  onChange={handleChange}>
            {options.map((item) => (
              <option key={item.id}>{item.label}</option>
            ))}
          </select>
        </div>
      </BottomSelect>
      
    </>
  );
};

export default SideBar;
