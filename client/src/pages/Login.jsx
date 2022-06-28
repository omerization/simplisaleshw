/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, message } from 'antd';
import "antd/dist/antd.css";
import './Login.css'
import LoginForm from 'components/Login/LoginForm';




const Login = (props) => {

    const location = useLocation();
   

    const { Header, Content, Footer, Sider } = Layout;


    if(location.state) {
        message.error(location.state.loginMessage);
    }

    return (
        <Layout style={{ height: '100vh', backgroundColor: 'white' }} >
            <Sider className='login-sider' width={'40%'} breakpoint='xs' collapsedWidth={0} zeroWidthTriggerStyle={{ display: 'none' }}>
                <div className='login-logo'>
                    <img className='login-logo-icon' src="./simplilogo.png" alt="" />
                </div>

            </Sider>
            <Layout className="login-layout">
                <LoginForm />
            </Layout>

        </Layout>
    )
};

export default Login;