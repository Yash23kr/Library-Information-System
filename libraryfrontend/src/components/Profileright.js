import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const StyledProfileright = styled.div`
    width: 40%;
    height: 100%;
    background-color: white;
`
const Imagediv = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    display: block;
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
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
    transition-duration: 0.2s;
    &:hover{
        transform: scale(1.05);
    }
`
const Addimage = styled.input`
    
    margin-top:15%;
    top: 220px;
    right: 20%;
    height: 20px;
    border-radius: 5px;
    border: 1px inset rgb(245, 206, 66);

    background-color: white;
    opacity: 1;
    cursor: pointer;
`



const ProfileRight = () => {
    const [file, setFile] = useState("https://www.w3schools.com/howto/img_avatar.png");
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return ( 
        <StyledProfileright>
            <Imagediv>
            <Profileimage src={file}>
                
            </Profileimage>
            {/* <Addimage type="file" onChange={handleChange} /> */}
            </Imagediv>
        </StyledProfileright>
     );
}
 
export default ProfileRight;