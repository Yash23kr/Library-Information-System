import React from 'react';
import styled from 'styled-components';

const Profileleft = styled.div`
    width: 60%;
    height: 100%;
    background-color: white;
    position: relative;
`
const Name= styled.h1`
    font-size: 5rem;
    font-weight: 500;
    color: #000;
    margin: 8% 0 0 10%;
    background: -webkit-linear-gradient(rgb(245, 206, 66), #676D20);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const StudentType= styled.h2`
    font-size: 2.5rem;
    font-weight: 200;
    color: #000;
    margin: 0 0 0 10%;
`
const Email= styled.h3`
    font-size: 1.5rem;
    font-weight: 200;
    color: #000;
    margin: 2% 0 3% 10%;
`
const Username= styled.h3`
    font-size: 1.5rem;
    font-weight: 200;
    color: #000;
    margin: 3% 0 2% 10%;
`
const Stats = styled.div`
    position: absolute;

    display: flex;
    justify-content: space-between;
    margin: 0% 0 24px 10%;
    bottom: 0;
`
const Stat = styled.div`

    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
const StatName = styled.h3`
    font-size: 1.2rem;
    font-weight: 200;
    color: #000;
    margin-top: 2%;
`  
const StatValue = styled.h3`
    font-size: 4rem;
    font-weight: 500;
    color: #000;
    margin-top: 0;
    margin-bottom: 0;
    background: -webkit-linear-gradient(rgb(245, 206, 66), #676D20);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`


const ProfileLeft = () => {
    return ( 
        <Profileleft>
            <Name>John Doe</Name>
            <StudentType>Undergraduate Student</StudentType>
            <Username>Dummy Name</Username>
            <Email>Email ID: dummyid@gmail.com</Email>
            
            <Stats>
                <Stat>
                <StatValue>5</StatValue>
                    <StatName>Number of Books Issued in Past</StatName>
                    
                </Stat>
                <Stat>
                <StatValue>2</StatValue>
                    <StatName>Number of Books Presently Issued</StatName>    
                </Stat>
            </Stats>
        </Profileleft>
     );
}
 
export default ProfileLeft;