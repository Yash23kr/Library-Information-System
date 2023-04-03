import React from 'react';
import styled from 'styled-components';
import Leftland from '../components/Leftland';
import Rightland from '../components/Rightland';
const LandingDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(245, 206, 66);
    display: flex;
    
`;


const LandingPage = () => {
    return ( 
        <LandingDiv>
            <Leftland/>
            <Rightland/>
        </LandingDiv>
     );
}
 
export default LandingPage;