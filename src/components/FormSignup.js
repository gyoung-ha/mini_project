import React from "react";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { __SignUp } from "../redex/modules/member";
import { useNavigate } from 'react-router-dom';
import Input from "../elem/Input"
import Button from "../elem/Button"
import styled from "styled-components"


const FormSignup = () => {
 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [Sign, SetSign] = useState({
    //     userId: "",
    //     password: "",
    //     passwordConfirm: "",
    //   });
      
    const [userId, setUserId] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();

    const SignupData = {
        userId: userId,
        password: password,
        passwordConfirm: passwordConfirm,
    }

    const Signup = () => {
        if( userId === "" || password === "" || passwordConfirm === ""){
        window.alert("항목을 모두 입력하세요.");
        return;
    } 
        dispatch(__SignUp(SignupData));
        // SetSign({
        //     loginId: "",
        //     password: "",
        //     confirm: "",
        //   });
        // navigate("/login")
    }

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            Signup();
        }
    };

  return (
    <LoginBox>
        <StTitle>회원가입</StTitle>
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
        <Input  
        placeholder='비밀번호를 다시 한번 입력하세요'
        type='password'
        onKeyPress={handleKeyPress}
        onChange={(e) => setPasswordConfirm(e.target.value)}></Input>
        </IpBox>
        <Button onClick={Signup}>회원가입</Button>
        <Button bgColor="#758BFD" onClick={() => {navigate('/login')}}>로그인 페이지로 이동</Button>
    </LoginBox>
)};
   
export default FormSignup;

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