import styled from "styled-components";

const Formpage = styled.div`
  width: 100%;
  height: 91vh;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
`;
const Profile = styled.div`
  width: 76vw;
  min-width: 400px;
  background-color: #f1f1f1;
  border-radius: 28px;
  padding-bottom: 2vh;
  padding-top: 1vh;
`;
const FormHeading = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  color: #000;
  text-align: center;
`;
const FormBody = styled.div`
  width: 80%;
  padding: 10px 20px 20px 0px;
`;
const Names = styled.div`
    display: flex;
    min-height: 10vh;
    justify-content: space-between;
`;
const Emailroll = styled.div`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
`;
const FormInput = styled.div`
  width: 40%;
  height: 28px;
  margin: 0px auto;
`;
const FormLabel = styled.label`
  font-size: 1.1rem;
  font-weight: 500;
  color: #000;
  display: block;
  padding-left: 12px;
`;

const FormInputField = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  border: 0.5px solid black;
  outline: none;
  font-size: 0.9rem;
  font-weight: 200;
  color: #000;
  padding: 2px 10px;
  margin: 6px 0 4px;
`;
const ButtonGroup = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    padding: 10px 0px;
`;
const Button = styled.button`
  width: 20%;
  min-width: 50px;
  height: 40px;
  margin: auto;
  border-radius: 25px;
  border: 0.5px solid black;
  outline: none;
  font-size: 1.1rem;
  font-weight: 500;
  background-color: #000;
  color: #f1f1f1;
  cursor: pointer;
  transition: 0.1s;
  display: block;
  &:hover {
    background-color: #000;
    color: #f1f1f1;
    border: 0.5px solid #f1f1f1;
    box-shadow: 0px 0px 3px 2px #bdbcb9;
  }
  
`;
const RegisterAs = styled.div`
    display: block;
    position: relative;
    width: 150px;
    height: 32px;
    margin: auto;
    margin-bottom: 7vh;
    margin-top: 0vh;
    text-align: center;
`;

const Content = styled.div`
    display: block;
    justify-content: center;
`
const Profilepage = () => {
  return (
    <Formpage>
        
      <Profile>
      <FormHeading>User Profile</FormHeading>
        <Content>
        <FormBody>
          <FormInput>
            <FormLabel>First Name: </FormLabel>
          </FormInput>
          <FormInput>
            <FormLabel>Last Name: </FormLabel>
          </FormInput>
          <FormInput>

            <FormLabel>Email: </FormLabel>
          </FormInput>
          <FormInput>
            <FormLabel>Username: </FormLabel>
          </FormInput>
        </FormBody>
        </Content>
        <ButtonGroup>
            <Button>Back</Button>
        </ButtonGroup>
      </Profile>
    </Formpage>
  );
};

export default Profilepage;
