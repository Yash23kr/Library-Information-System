import Card from "../components/LoginAsCard";
import styled from "styled-components";

const LoginAsDiv = styled.div`
    width: 100%;
    height: 100vh;

`;
const CardContainer = styled.div`
    width: 100%;
    display: flex;
    position: absolute;
    top: 35vh;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;
const Heading = styled.h1`
    font-size: 4rem;
    font-weight: 500;
    color: #000;
    text-align: center;
    width: 100%;
    height: 20vh;
    padding: 0px;
    margin-top: 0px;
    padding-top: 5vh;
`;
const Link= styled.a`
    text-decoration: none;
    color: #000;
`;

const LoginAs = () => {
    let users = [{user: 'Member', href: "/login"}, {user: 'Staff', href: "/login"}, {user: 'Librarian', href: "/login"}];
    return ( 
        <LoginAsDiv>
            <Heading>
                Login As
            </Heading>
            <CardContainer>
            {users.map((usertype) => (
                <Link href={usertype.href}>
                    <Card usertype={usertype.user}/>
                </Link>
            ))}
            </CardContainer>
        </LoginAsDiv>
     );
}
 
export default LoginAs;
<LoginAsDiv>

</LoginAsDiv>