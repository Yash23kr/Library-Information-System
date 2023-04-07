import styled from 'styled-components'
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

import React from 'react'


const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 4vw 0 2vw;
  height: 9vh;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  width: 94vw;
  position: sticky;
  top: 0;
  z-index: 100;
`
const LibName = styled.h1`
  vertical-align: middle;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-size: 4.8vh;
  color: black;
  float: left;
  margin: auto 0;
`
const StyledButtonBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
  min-width: 600px;
  padding: 0 1vw 0 1vw;
`

const StyledButton = styled.button`
  border-width: 0rem;
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-size: 3.6vh;
  font-weight: 500;
  background-color: white;
  padding: 0px;
  &:hover {
    cursor: pointer;
    background: white;
    transform: scale(1.1);
    transition-duration: 0.25s;
  }
  &:focus {
    background-color: white;
  }
`
const ProfileIcon = styled.img`
  position: relative;
  float: right;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  margin-left: 1vw;
  background-color: white;
  &:hover {
    cursor: pointer;
    background: white;
    transform: scale(1.1);
    transition-duration: 0.25s;
  }
  &:focus {
    background-color: white;
  }
`


const Navbar = () => {
  const style = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  
  return (
    <StyledNavbar>
      <LibName>library.io</LibName>
      <StyledButtonBar>
        <a href="/profile">
          <StyledButton
            variant="gradient"
            gradient={{ from: 'white', to: 'white' }}
          >Profile
          </StyledButton>
        </a>
        <StyledButton
          variant="gradient"
          gradient={{ from: 'white', to: 'white' }}
        >Books
        </StyledButton>
        <StyledButton
          variant="gradient"
          gradient={{ from: 'white', to: 'white' }}
        >View Reminders
        </StyledButton>
        <a href="/login">
        <StyledButton
          variant="gradient"
          gradient={{ from: 'white', to: 'white' }}
        >Login
        </StyledButton>
        
        </a>
        <ProfileIcon src="https://www.w3schools.com/howto/img_avatar.png"></ProfileIcon>
      </StyledButtonBar>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}
    </StyledNavbar>
  )
}
export default Navbar
