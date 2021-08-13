import React from 'react';
import {Cars} from "./Home.style"
import carImg from "../img/Car.png"



const Pagination = () => {
    return (
        <Cars>
            <div>
                <h1>Infiniti Renault™</h1>
                <img src={carImg} alt="Infiniticar"/>
            </div>
            
        </Cars>
    );
};

export default Pagination;