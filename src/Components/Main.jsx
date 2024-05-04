import React from 'react';
import { Outlet } from 'react-router-dom';
import Phones from './Phones';
import Header from './Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;