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
   font-family:"Google Sans", sans-serif;
   font-size:13px;
  
  div{
    width:80px;
    padding-top:5px;
    text-align:center;
    box-shadow: 0px 20px 45px -15px #7947F7; 
    border-radius: 10px;
  }
`
export const Cars=styled.div`

     display:flex;
     justify-content:space-around;
     align-items:center;
     padding-top:50px;
     h1{
      font-family:"Gilroy-Light",sans-serif, serif;
      font-weight:500 !important;
    }
     img{
         height:250px;
         width:70%px;
     }
`
export const Rightchart= styled.div`
      box-shadow: 0px 20px 45px -15px #7947F7;
      width:45%;
      height:220px;
      font-family:"Gilroy-Light",sans-serif, serif;
      padding:15px;
   
   as{
     display:flex;
     margin-top:10px;
       color:#f56;
   }
   div{
    display:flex;
    justify-content:space-between;
    padding:10px;
   }
   select{
     border:none;

   }
`
export const LeftChart= styled.div`
      box-shadow: 0px 20px 45px -15px #7947F7;
      width:45%;
      height:220px;
      padding:10px;
      font-family:"Gilroy-Light",sans-serif, serif;
    select{
      border:none;
    }
   div{
    display:flex;
    justify-content:space-between;
    padding:10px;
   }
`
export const Box= styled.div`
    //  display:flex;
     justify-content:center;
`
export const Rate=styled.p`
   display:flex;
   color:green;
   margin-top:10px;
`
export const Part=styled.span`
    margin-top:70px;
    display:block; 
`
export const Bottom=styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;

`
export const Mis=styled.span`
    display:block; 
  h4{
    margin-top:90px !important;
  }
`
export const CardDiv=styled.div`
width:30%;
display:flex;
justify-content:space-between;
align-items:center;
// margin-bottom:20px;
font-family:"Google Sans", sans-serif;
font-size:14px;
span{
  text-align:center;
  border-radius:50%;
  padding:12px;
  // padding-top:18px;
  background-color:#ccc;
  margin-right:30px;
}
   img{
    width:20px !important;
    height:20px !important;
    
   }
`
export const Pag=styled.div`
     display:flex;
     justify-content:space-between;
     align-items:center;
    span{
      margin-right:10px;
      padding:10px;
      width:20px;
      height:25px;
      box-shadow: 0px 20px 45px -5px #7947F7;
      border-radius:5px;
      cursor:pointer;
    }
`