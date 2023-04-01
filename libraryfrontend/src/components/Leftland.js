import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Leftdiv = styled.div`
    width: 60%;
    line-height: 1;
`;
const InsideLeftdiv = styled.div`
    margin: auto;
    position: relative;
    margin-top: 10vw;
    padding-left: 4vw;
    padding-right: 8vw;
    h1{
        font-size: 5rem;
        font-weight: 700;
        color: #000;
        margin-bottom: 1vh;
    }
    p{
        margin-top: 1vh;
        margin-bottom: 2vh;
        padding-left: 4px;
        font-size: 2.5rem;
        font-weight: 200;
        color: #000;
    }
`;
const Buttoncontiner = styled.div`
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 8vh;
`
const LoginButton = styled.button`
    width: 32%;
    padding: 10px 0;
    background-color: #000;
    border: none;
    border-radius: 4vh;
    font-size: 1.8rem;
    font-weight: 500;
    color: white;
    cursor: pointer;
    &:hover{
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
    }
`;
const RegisterButton = styled.button`
    width: 32%;
    margin: auto;
    padding: 10px 0;
    background-color: #000;
    border: none;
    border-radius: 4vh;
    font-size: 1.8rem;
    font-weight: 500;
    color: white;
    cursor: pointer;
    &:hover{
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
    }
`;

const Leftland = () => {
    const navigate = useNavigate();
    const openregister = () => {
        navigate("/registration");
    }
    const openlogin = () => {
        navigate("/login");
    }
    return ( 
        <Leftdiv>
            <InsideLeftdiv>
                <h1>Library Information System</h1>
                <p>Discover and manage your library's resources seamlessly with our intuitive library information system.</p>
                <Buttoncontiner>
                <LoginButton onClick={openlogin}>Login</LoginButton>
                <RegisterButton onClick={openregister}>Register</RegisterButton>
                </Buttoncontiner>
            </InsideLeftdiv>
        </Leftdiv>
     );
}
 
export default Leftland;