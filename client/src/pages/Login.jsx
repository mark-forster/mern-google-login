import React from 'react'
import {Button,Container} from '@chakra-ui/react'
import { FaGoogle } from "react-icons/fa";
const Login = () => {
    const loginWithGoogle = ()=>{
        window.open("http://localhost:8000/api/v1/login-with-google","_self")
    }
  return (
    <>
    <Container maxW='md' bg='blue.600' color='white' m={5} p={5} >

    <h1>Login with Google</h1>
    <Button colorScheme='blue' onClick={loginWithGoogle}>
        <FaGoogle/>
        Login with Google</Button>
    </Container>
    </>
  )
}

export default Login