import React from 'react'
import Input from '../elem/Input';
import Button from '../elem/Button';
import styled from "styled-components"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { __Login } from "../redex/modules/member";
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userId, setUserId] = useState();
    const [password, setPassword] = useState();

    const LoginData = {
        userId: userId,
        password: password
    }

    const Login = () => {
        if( userId === "" || password === "" ){
        window.alert("항목을 모두 입력하세요.");
        return;
    } 
        dispatch(__Login(LoginData));
        navigate("/");

    }

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            Login();
        }
    };

  return (
    <LoginBox>
    <StTitle>Login</StTitle>
    <IpBox>
    <Input 
    placeholder='아이디를 입력하세요'
    onKeyPress={handleKeyPress}
    onChange={(e) => setUserId(e.target.value)}></Input>
    <Input  
    placeholder='비밀번호를 입력하세요'
    type='password'
    onKeyPress={handleKeyPress}
    onChange={(e) => setPassword(e.target.value)}></Input>
    </IpBox>
    <Button onClick={Login}>로그인</Button>
    <Button bgColor="#758BFD" onClick={() => {navigate('/signup')}}>회원가입 페이지로 이동</Button>
    </LoginBox>
)};

export default FormLogin;

const StTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color: #231673;
`
const LoginBox = styled.div`
    background-color: #D0D5FA;
    width : 100%;
    height : 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const IpBox = styled.div`
    width : 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`