import React from 'react';
import styled from 'styled-components';

const Rightdiv = styled.div`
    width: 40%;
`;
const InsideRightdiv = styled.div`
    width: 90%;
    float: left;
    position: relative;
    margin-top: 10vw;
`
const RightImage = styled.img`
    margin-top: 5vh;
    width: 90%;
    border-radius: 25px;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
`;
const Rightland = () => {
    return ( 
        <Rightdiv>
            <InsideRightdiv>
                <RightImage src="https://www.indiafilings.com/learn/wp-content/uploads/2019/05/Digital-Library-of-India.jpg"></RightImage>
            </InsideRightdiv>
        </Rightdiv>
     );
}
 
export default Rightland;