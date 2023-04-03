import React from "react";
import styled from "styled-components";

const Carddiv = styled.div`
    width: 100%;
    height: 25vh;
    max-height: 20vw;
    border: 6px solid rgb(245, 206, 66);

    background-color: rgb(245, 206, 66);
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
    h1{
        font-size: 2rem;
        font-weight: 500;
        color: #000;
    }
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        transform: scale(1.05);
    }
`;

const Card = ({usertype}) => {
    return ( 
        <Carddiv>
            <h1>{usertype}</h1>
        </Carddiv>

     );
}
 
export default Card;