import React from 'react'
import Input from '../elem/Input';
import Button from '../elem/Button';
import { useState } from "react"
import { useDispatch } from "react-redux";
import { __Login } from "../redex/modules/member";

const FormLogin = () => {

    const dispatch = useDispatch();

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
    }

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            Login();
        }
    };

  return (
    <>
    <Input 
    placeholder='아이디를 입력하세요'
    onKeyPress={handleKeyPress}
    onChange={(e) => setUserId(e.target.value)}></Input>
    <Input  
    placeholder='비밀번호를 입력하세요'
    type='password'
    onKeyPress={handleKeyPress}
    onChange={(e) => setPassword(e.target.value)}></Input>
    <Button onClick={Login}>로그인</Button>
    </>
)};

export default FormLogin;