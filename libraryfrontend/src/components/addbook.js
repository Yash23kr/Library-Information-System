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
  padding: 10px 20px 20px 0px;
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
  font-size: 1.1rem;
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
  font-size: 0.9rem;
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

const loginform = () => {
  return (
    <Formpage>
      <Form>
        <FormHeading>Add a Book</FormHeading>
        <FormBody>
          <Names>
          <FormInput>
            <FormLabel>Book Name</FormLabel>
            <FormInputField type="text" placeholder="Enter your First Name" />
          </FormInput>
          <FormInput>
            <FormLabel>Author</FormLabel>
            <FormInputField type="text" placeholder="Enter your Last Name" />
          </FormInput>
          </Names>
          <Emailroll>
          <FormInput>

            <FormLabel>Publisher</FormLabel>
            <FormInputField type="email" placeholder="Enter your Email ID" />
          </FormInput>
          <FormInput>
            <FormLabel>ISBN code</FormLabel>
            <FormInputField type="text" placeholder="Enter your Username" />
          </FormInput>
          </Emailroll>
        </FormBody>

        <ButtonGroup>
            <Button>Back</Button>
            <Button>Add Book</Button>
        </ButtonGroup>
      </Form>
    </Formpage>
  );
};

export default loginform;
