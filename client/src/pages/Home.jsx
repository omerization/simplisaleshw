/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, Button } from 'antd';
import "antd/dist/antd.css";
import './Login.css'
import LoginForm from 'components/Login/LoginForm';
import GlobalHeader from 'components/GlobalHeader';

const Home = (props) => {

    const location = useLocation();
    const navigate = useNavigate();


    const {  Content } = Layout;



    return (
        <Layout className="layout" style={{ height: '100vh' }}>
            <GlobalHeader />
            <Content
                style={{
                    margin: '20px',
                    padding: '50px',
                    backgroundColor: 'white',
                }}
            >
                <div style={{ margin: 'auto', textAlign: 'center' }}>

                    <Button  onClick={() => {navigate('/restaurants')}} type="primary"  style={{ height: '20vh', minWidth: '60%', margin: 10, fontSize: '1.5em', borderRadius: 10, backgroundColor: 'rgb(19, 19, 211)' }}>
                        Restaurants
                    </Button>

                    <Button onClick={() => {navigate('/past-orders')}} type="primary" style={{ height: '20vh', minWidth: '60%', margin: 10, fontSize: '1.5em', borderRadius: 10, backgroundColor: 'rgb(19, 19, 211)' }}>
                        Past Orders
                    </Button>
                    <Button onClick={() => {navigate('/my-account')}} type="primary" style={{ height: '20vh', minWidth: '60%', margin: 10, fontSize: '1.5em', borderRadius: 10, backgroundColor: 'rgb(19, 19, 211)' }}>
                        My Account
                    </Button>
                </div>


            </Content>

        </Layout>
    )
};

export default Home;