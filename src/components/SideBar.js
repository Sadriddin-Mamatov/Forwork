import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {BiCreditCard} from 'react-icons/bi';
import {BsGrid,BsPeople} from 'react-icons/bs';
import {CgCalculator} from 'react-icons/cg';
import {FiSettings} from 'react-icons/fi'
import Logo from "../img/Group 2.png";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {StyledMenu,BottomPart} from "./SideBar.style";

const SideBar = () => {
    const [value, setValue] = React.useState('motogp2022');

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return (
        <>
            <StyledMenu>
                <div>
                    <img src={Logo} alt="logo"/><h2>iffee</h2>
                </div>
                <h4>Menu</h4>
                <ul>
                    <li><a href="#"><span><AiOutlineHome/></span>Home</a></li>
                    <li><a href="#"><span><BsGrid/></span>Garage</a></li>
                    <li><a href="#"><span><BiCreditCard/></span>Service Menu</a></li>
                    <li><a href="#"><span><BsPeople/></span>Racers</a></li>
                    <li><a href="#"><span><CgCalculator/></span>Calculators</a></li>
                    <li><a href="#"><span><FiSettings/></span>Settings</a></li>
                </ul>
            </StyledMenu>
            <BottomPart>
               <h4>Scheduled Races</h4>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="motogp2022" control={<Radio />} label="MotoGP 2022" />
                    <FormControlLabel value="dynamics22" control={<Radio />} label="Dynamics 22" />
                    <FormControlLabel value="olympics" control={<Radio />} label="Olympics" />
                </RadioGroup>
            </BottomPart>
        </>
    );
};

export default SideBar;