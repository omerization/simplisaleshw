
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './GlobalHeader.css'
import { useDispatch } from 'react-redux';
import { signout } from 'actions/auth';



export default (props) => {



    const { Header } = Layout;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const menu = (
        <Menu mode="horizontal" style={{ backgroundColor: "#eee", marginLeft: 20 }} >
            <Menu.Item onClick={() => { navigate('/my-account') }}>My account</Menu.Item>
            <Menu.Item onClick={() => { dispatch(signout(navigate)) }}>Log out</Menu.Item>
        </Menu>

    );





    return (
        <Header className="header" style={{ backgroundColor: 'white', display: 'flex' }}>
            <div>
                <div onClick={() => { navigate('/') }} style={{cursor:'pointer'}}>
                    <img src="/simplilogo.png" />
                </div>
            </div>
            <div style={{ marginLeft: 'auto' }}>
                <div className="header-avatar-container">
                    <Dropdown overlay={menu} placement="topRight" arrow>
                        <Avatar className='header-avatar-icon' icon={<UserOutlined />} />
                    </Dropdown>
                </div>
            </div>
        </Header>
    )
};