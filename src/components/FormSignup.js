import React from "react";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { __SignUp } from "../redex/modules/member";
import Input from "../elem/Input"
import Button from "../elem/Button"


const FormSignup = () => {
 
    const dispatch = useDispatch();

    const [userId, setUserId] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();

    const SignupData = {
        id: 1,
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
    }

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            Signup();
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
    <Input  
    placeholder='비밀번호를 다시 한번 입력하세요'
    type='password'
    onKeyPress={handleKeyPress}
    onChange={(e) => setPasswordConfirm(e.target.value)}></Input>
    <Button onClick={Signup}>회원가입</Button>
    </>
)};
   
export default FormSignup;