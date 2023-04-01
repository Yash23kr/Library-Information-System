import styled from "styled-components";

const Formpage = styled.div`
  width: 100%;
  height: 91vh;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
`;
const Form = styled.div`
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
  width: 76vw;
  min-width: 400px;
  margin: auto;
  background-color: rgb(243 240 223);
  border-radius: 28px;
  padding-bottom: 2vh;
`;
const FormHeading = styled.h1`
  padding-top: 2vh;
  padding-bottom: 2vh;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  background-color: #f5ce42;
  margin-top: 0px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #000;
  text-align: center;
`;
const FormBody = styled.div`
  width: 80%;
  margin: auto;
  padding: 10px 20px 10px 0px;
`;
const Names = styled.div`
    display: flex;
    min-height: 72px;
    justify-content: space-between;
`;
const Emailroll = styled.div`
    min-height: 72px;
    display: flex;
    justify-content: space-between;
`;
const FormInput = styled.div`
  width: 40%;
  margin: 20px auto;
`;
const FormLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  display: block;
  padding-left: 10px;
`;

const FormInputField = styled.input`

  width: 100%;
  height: 120%;
  border: none;
  border-bottom: 0.5px solid black;
  outline: none;
  font-size: 1rem;
  font-weight: 200;
  background-color: rgb(243 240 223);
  color: #000;
  padding: 2px 10px;
  margin: 0.2rem 0 0.1rem;
  ::placeholder {
    color: #888;
  }
`;
const ButtonGroup = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    padding: 4vh 0px 1vh;
`;
const Button = styled.button`
  width: 20%;
  min-width: 50px;
  height: 42px;
  margin: auto;
  border-radius: 25px;
  border: 0.5px solid black;
  outline: none;
  font-size: 1.1rem;
  font-weight: 600;
  background-color:black;
  color: #f1f1f1;
  cursor: pointer;
  transition: 0.1s;
  display: block;
  &:hover {
    background-color: #f5ce42;
    color: black;
    font-weight: 700;
    border: 0.5px solid #f1f1f1;
    box-shadow: 0px 0px 3px 2px #bdbcb9;
  }
  
`;

const loginform = ({user}) => {
  return (
    <Formpage>
      <Form>
        <FormHeading>{user}Login</FormHeading>
        <FormBody>
          <FormInput>
            <FormLabel>Username</FormLabel>
            <FormInputField type="text" placeholder="Enter your Username" />
          </FormInput>
          <FormInput>

            <FormLabel>Password</FormLabel>
            <FormInputField type="password" placeholder="Enter your password" />
            </FormInput>
        </FormBody>

        <ButtonGroup>
            <Button>Back</Button>
            <Button>Login</Button>
        </ButtonGroup>
      </Form>
    </Formpage>
  );
};

export default loginform;
