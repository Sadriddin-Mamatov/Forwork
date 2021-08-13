import React from 'react';
import SideBar from './components/SideBar';
import Home from './components/Home';
import {MainStyle, Body} from "./styles";
import {HomeMenu} from "./components/Home.style";
import {GlobalStyles} from "./global"
function App() {
  return (
    <Body>   
    <GlobalStyles/>
      <MainStyle>
          <SideBar/>
      </MainStyle>
      <HomeMenu>
         <Home/>
      </HomeMenu>
         
      </Body>
  );
}

export default App;
