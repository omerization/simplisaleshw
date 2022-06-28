/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




const AlreadyLoginned = ({ children }) => {

    const authData = useSelector((state) => state.auth);

    const location = useLocation();

    if (authData) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
};


export default AlreadyLoginned;