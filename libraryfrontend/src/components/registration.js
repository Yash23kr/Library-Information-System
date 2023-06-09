import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  background-color: rgb(245, 206, 66);
  margin-top: 0px;
  font-size: 1.8rem;
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
  height: 1.5rem;
  margin: 0px auto;
`;
const FormLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  color: #000;
  display: block;
  padding-left: 10px;
`;

const FormInputField = styled.input`

  width: 100%;
  height: 100%;
  border: none;
  border-bottom: 0.5px solid black;
  outline: none;
  font-size: 1.3rem;
  font-weight: 200;
  background-color: rgb(243 240 223);
  color: #000;
  padding: 2px 10px;
  margin: 0.2rem 0 0.1rem;
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
  height: 36px;
  margin: auto;
  border-radius: 25px;
  border: 0.5px solid black;
  outline: none;
  font-size: 1.2rem;
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

const Dropdown=styled.select`
    padding: 8px 6px;
    text-align: center;
    border: none;
    border-bottom: 1px solid black;
    background-color: rgb(243 240 223);
    margin-top: 2px;
    font-size: 1.3rem;
    margin-left: -2rem;
`;
const DropdownItem = styled.option`
    width: 100%;
    padding: 16px;

`;
const Passwordblock = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 72px;
`;

const Registrationform = () => {
  const navigate=useNavigate();
  const openpage = () => {
    navigate("/");
  };

  return (
    <Formpage>
      <Form>
        <FormHeading>Registration</FormHeading>
        <FormBody>
          <Names>
          <FormInput>
            <FormLabel>First Name</FormLabel>
            <FormInputField type="text" placeholder="Enter your First Name" />
          </FormInput>
          <FormInput>
            <FormLabel>Last Name</FormLabel>
            <FormInputField type="text" placeholder="Enter your Last Name" />
          </FormInput>
          </Names>
          <Emailroll>
          <FormInput>

            <FormLabel>Email</FormLabel>
            <FormInputField type="email" placeholder="Enter your Email ID" />
          </FormInput>
          <FormInput>
            <FormLabel>Username</FormLabel>
            <FormInputField type="text" placeholder="Enter your Username" />
          </FormInput>
          </Emailroll>
          <RegisterAs>
            <FormLabel>Register As</FormLabel>
            <Dropdown>
                <DropdownItem>Undergraduate Student</DropdownItem>
                <DropdownItem>Faculty</DropdownItem>
                <DropdownItem>Postgraduate Student</DropdownItem>
                <DropdownItem>Research Scholar</DropdownItem>
            </Dropdown>

          </RegisterAs>
          <Passwordblock>
          <FormInput>

            <FormLabel>Enter Password</FormLabel>
            <FormInputField type="password" placeholder="Enter your password" />
            </FormInput>
            <FormInput>
            <FormLabel>Confirm Password</FormLabel>
            <FormInputField type="password" placeholder="Re-enter your password" />
            </FormInput>
          </Passwordblock>
        </FormBody>

        <ButtonGroup>

            <Button onClick={openpage}>Back</Button>
            <Button>Register</Button>
        </ButtonGroup>
      </Form>
    </Formpage>
  );
};

export default Registrationform;
