import React from 'react';
import {Cars} from "./Home.style"
import carImg from "../img/Car.png"
import {CardDiv, Pag} from "./Home.style"
import {FcPrevious, FcNext} from "react-icons/fc"




const Pagination = () => {
    const Cards=[
        {
            img:"cat icon.png",
            title:"Championships",
            num:72,
        },
        {
            img:"moon icon.png",
            title:"Skins",
            num:32
        },
        {
            img:"Vector.png",
            title:"Trophies Won",
            num:64
        },
    ]
    return (
        <Cars>
            <div>
                <Pag>
                    <h1>Infiniti Renault™</h1>
                    <div><span><FcPrevious/></span><span><FcNext/></span></div>
                   
                </Pag>
                <img src={carImg} alt="Infiniticar"/>
            </div>
            <div>
                {Cards.map((card, index)=>(
                    <CardDiv key={index}><span><img src={card.img} alt="champ"/></span>
                        <div>
                        <h3>{card.num}</h3>
                        <p>{card.title}</p>
                        </div>
                   </CardDiv>
                ))}
                
            </div>
            
        </Cars>
    );
}

export default Pagination;