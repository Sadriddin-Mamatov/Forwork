import styled from "styled-components";

export const StyledMenu = styled.nav`
    width:100%;
    padding-left:12%;
    font-size:16px;
    font-family:"Product Sans", sans-serif;
div{
    display:flex;
    align-items:center;
}
ul{
    padding:0;
}
img{
    width:35px; 
    height:35px;
}
h2{
    margin-left:15px;
}
h4{
    color:#3629B7;
    margin-bottom:30px;
}
li {
    list-style-type:none;
    line-height:45px;
}
a{
    text-decoration:none;
    color:#838383;
    display:flex;
    align-items:center;
}
span{
    font-size:30px;
    margin-right:15px;
}

`
export const BottomPart = styled.div`
width:100%;
padding-left:12%;
font-family:"Product Sans", sans-serif;
h4{
    color:#3629B7;
}
`
export const BottomSelect=styled.div`
   
    border-radius:10px;
    display:flex;
    margin-top:20px;
    justify-content:center;
    img{
        border-radius:50%;
        width:35px;
        height:35px;
    }
select{
        padding:10px;
        width:100%;
        border:none;
        outline:none;
    }
 option{
        padding:10px;
        height:100px;
    }
`
