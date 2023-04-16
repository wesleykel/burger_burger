import { useUser } from "@auth0/nextjs-auth0/client";
import styled from "styled-components";


const Wrapper = styled.div`

outline: 1px solid blue;


`


const Login = () => {
  const { user, error, isLoading } = useUser();


  return (
    <Wrapper>
      {!user ? (
        <a href="/api/auth/login">Login</a>
      ) : (
        <a href="/api/auth/logout">Logout</a>
      )}
    </Wrapper>
  );
};

export default Login;
