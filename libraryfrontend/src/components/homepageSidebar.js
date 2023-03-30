import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
    background-color: #f1f1f1;
    width: 18vw;
    float: left;
    height: 100vh;
`
const Header = styled.h1`
    font-size: 1.4rem;
    font-weight: 700;
    color: #000;
    text-align: center;
`

const HomepageSidebar = () => {
    return (
        <Sidebar>
            <Header>library.io</Header>
        </Sidebar>
    );

}

export default HomepageSidebar;