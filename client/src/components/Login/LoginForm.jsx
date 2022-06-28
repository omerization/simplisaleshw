/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { signin } from 'actions/auth';


const RegisterForm = () => {

    const initialState = { firstName: '', lastName: '', email: '', phone: '', password: '' };
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

   

    const handleSubmit = (e) => {
        dispatch(signin(form, navigate));
    };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });



    return (
        <div className='login-form-container'>
            <div className='login-form-logo-container'>
                <img className='login-form-logo' src="/simpliicon.png" alt="" />
            </div>
            <div className='login-form-welcome' >
                Welcome
            </div>
            <div className='login-form-message' >
                Log in and order from best restaurants
            </div>
            <Form
                onFinish={handleSubmit}
                name="register"
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    
                    rules={[
                        {
                            type: 'email',
                            message: 'This is not a valid email.',
                        },
                        {
                            required: true,
                            message: 'Email is required.',
                        },
                    ]}
                >
                    <Input  className='login-form-input' name="email" placeholder='Email' onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    name="password" 
                    
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password className='login-form-input' name={"password"} placeholder='Password'  onChange={handleChange} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" className='login-form-button' htmlType="submit">
                        Let's go
                    </Button>
                </Form.Item>
            </Form>
        </div>

    )
};

export default RegisterForm;