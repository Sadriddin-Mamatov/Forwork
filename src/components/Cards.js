import React from 'react';
import {Card} from "./Home.style";
const Cards = () => {
    const cards =[
        {
          img:"./img/Group (3).png",
          name:"Start"
        },
        {
          img:"./img/Vector (2).png",
          name:"Drive"
        },
        {
          img:"./img/Vector.png",
          name:"Maintinance"
        },
        {
          img:"./img/Group (2).png",
          name:"Battery"
        },
        {
          img:"./img/Group1.png",
          name:"Tires"
        },
        {
          img:"./img/Group.png",
          name:"Lock"
        },
      ]
    return (
        <Card>
            {cards.map((card, index)=>(
                <div key={index}><img src={card.img}/><p>{card.name}</p></div>
            ))}
            
        </Card>
    );
};

export default Cards;