import styled from "styled-components";


export const HomeMenu =styled.div`
  width:80%;

`
export const TopBar=styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;
  margin-top:10px;
 input{
     width:517px;
     padding:10px 0px 10px 25px;
     border-radius: 5px;
     border: 1px solid #E7E7E7;
 }
 select{
     display:flex;
     justify-content:space-between;
    width: 310px;
     padding:10px;
     border-radius: 5px;
     border: 1px solid #E7E7E7;
 }
`
export const Card=styled.div`
 
   display:flex;
   margin-top:20px;
   justify-content:space-around;
   align-items:center;
  
  div{
    width:80px;
    text-align:center;
    box-shadow: 0px 20px 45px -15px #7947F7; 
    border-radius: 10px;
  }
`
export const Cars=styled.div`
     img{
         height:250px;
         width:550px;
     }
`
export const Rightchart= styled.div`
      box-shadow: 0px 20px 45px -15px #7947F7;
      width:45%;
      height:200px;
      
   as{
       color:#f56;
   }
   div{
    display:flex;
    justify-content:space-between;
    padding:10px;
   }
`
export const LeftChart= styled.div`
      box-shadow: 0px 20px 45px -15px #7947F7;
      width:45%;
      height:200px;
   div{
    display:flex;
    justify-content:space-between;
    padding:10px;
   }
`
export const Bottom=styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;

`