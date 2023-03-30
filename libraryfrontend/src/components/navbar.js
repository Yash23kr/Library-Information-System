import styled from 'styled-components'

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
  font-size: 32px;
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
  font-size: 20px;
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
function Navbar() {
  return (
    <StyledNavbar>
      <LibName>library.io</LibName>
      <StyledButtonBar>
        <StyledButton
          variant="gradient"
          gradient={{ from: 'white', to: 'white' }}
        >Profile
        </StyledButton>
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
      </StyledButtonBar>
    </StyledNavbar>
  )
}
export default Navbar
