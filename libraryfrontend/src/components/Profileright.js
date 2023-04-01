import React from 'react';
import styled from 'styled-components';

const StyledProfileright = styled.div`
    width: 40%;
    height: 100%;
    background-color: white;
`
const Profileimage = styled.img`
    
    float: right;
    margin-top: 15%;
    margin-right: 20%;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    border: 4px inset rgb(245, 206, 66);
    background-color: white;
`



const ProfileRight = () => {
    return ( 
        <StyledProfileright>
            <Profileimage src="">

            </Profileimage>
        </StyledProfileright>
     );
}
 
export default ProfileRight;