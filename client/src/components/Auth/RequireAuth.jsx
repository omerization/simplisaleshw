/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




const RequireAuth = ({ children }) => {

    const authData = useSelector((state) => state.auth);

    const location = useLocation();

    if (!authData) {
        return <Navigate to="/login" state={{ from: location, loginMessage: 'You have to be logged in!' }} />;
    }

    return children;
};


export default RequireAuth;