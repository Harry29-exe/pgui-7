import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {MockAuth} from "../logic/MockAuth";
import {vStack} from "./style";
import VStack from "./atomic/VStack";
import HStack from "./atomic/HStack";

const Login = () => {
    let [username, setUsername] = useState<string>("");
    let [password, setPassword] = useState<string>("");
    let [error, setError] = useState<string | undefined>();

    let navigate = useNavigate();
    let location = useLocation();
    // @ts-ignore
    let from = location.state?.from?.pathname || "/";



    const onAuthAttempt = () => {
        MockAuth.authenticate(username, password)
        if(MockAuth.isAuthenticated) {
            navigate(from, {replace: true});
        } else {
            setError("username or password are incorrect");
        }
    }

    return (
        <VStack style={{width: '300px', marginLeft: 'auto', marginRight: 'auto', paddingTop: '20px'}}>
            <span>To login enter:</span>
            <span>Username: bob</span>
            <span>Password: 123</span>

            <div style={{margin: "20px 0px 20px 0px"}}/>

            <HStack>
                <span style={{flexGrow: 5, textAlign: 'left'}}>Username:</span>
                <input onChange={e => setUsername(e.target.value)} placeholder='username'/>
            </HStack>

            <HStack>
                <span style={{flexGrow: 5, textAlign: 'left'}}>Password:</span>
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder='password'/>
            </HStack>
            <button onClick={e => onAuthAttempt()}>Login</button>
        </VStack>
    );
};

export default Login;