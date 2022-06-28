/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Layout, Table, Descriptions, Badge } from 'antd';
import "antd/dist/antd.css";
import './Login.css'
import { getPastOrders } from 'actions/pastOrders';
import GlobalHeader from 'components/GlobalHeader';
import { getUserInfo } from 'actions/auth';



const Account = (props) => {

    const { Content } = Layout;

    const location = useLocation();
    const dispatch = useDispatch();


    const authData = useSelector((state) => state.auth);
    const userInfo = useSelector((state) => state.userInfo);

    useEffect(() => {
        dispatch(getUserInfo(authData.token));
    }, [dispatch]);




    if (userInfo === null) {
        return <div> Loading </div>
    }

    return (
        <Layout className="layout" style={{ height: '100vh' }}>
            <GlobalHeader />
            <Content
                style={{
                    margin: '20px',
                    marginBottom: 0,
                    padding: '30px',
                    paddingBottom: 0,
                    backgroundColor: 'white',
                }}
            >
                <div style={{ fontSize: '2em', fontWeight: 600, color: 'rgb(19, 19, 211)', marginLeft: 10 }}>
                    My Account
                </div>
                <Descriptions bordered>
                    <Descriptions.Item label="Name">{userInfo.firstName}</Descriptions.Item>
                    <Descriptions.Item label="Last Name">{userInfo.lastName}</Descriptions.Item>
                    <Descriptions.Item label="Email" span={2}>{userInfo.email}</Descriptions.Item>
                    <Descriptions.Item label="Mobile Phone" span={2} >
                        {userInfo.mobileNumber}
                    </Descriptions.Item>
                    <Descriptions.Item label="Membership Date" span={2}>
                        {userInfo.createdAt}
                    </Descriptions.Item>
                    <Descriptions.Item label="Email Verification">{userInfo.emailVerified ? 'Verified' : 'Not Verified'}</Descriptions.Item>
                    <Descriptions.Item label="SMS Verification">{userInfo.smsVerified ? 'Verified' : 'Not Verified'}</Descriptions.Item>
                    {userInfo.addresses.map((address) => (

                        <Descriptions.Item label="Address" key={address.id}>
                            {address.addressLine1}
                            <br />
                            {address.addressLine2}
                            <br />
                            {address.flatNumber}
                            <br />
                            {address.postalCode}
                            <br />
                       
                        </Descriptions.Item>

                    ))}

                </Descriptions>
            </Content>
        </Layout>
    )
};

export default Account;