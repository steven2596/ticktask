import React from 'react';

import Center from '../../components/center/center.component';
import Navbar from '../../components/navbar/navbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';

import './main.styles.scss';

const Main = () => (
    <div className='main-page' >
        <Navbar />
        <Center />
        <Sidebar />
    </div>
);

export default Main;