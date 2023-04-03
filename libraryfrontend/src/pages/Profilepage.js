import React from 'react';
import styled from 'styled-components';
import ProfileLeft from '../components/Profileleft';
import ProfileRight from '../components/Profileright';
import Navbar from '../components/navbar';

const Profilebox = styled.div`
    height: 80vh;
    background-color: white;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
    margin: 5vh;
    display: flex;
    justify-content: space-between;

`;

const Profilepage = () => {
    return ( 
        <>
            <Navbar/>
            <Profilebox>
                <ProfileLeft></ProfileLeft>
                <ProfileRight></ProfileRight>
            </Profilebox>
        </>
     );
}
 
export default Profilepage;