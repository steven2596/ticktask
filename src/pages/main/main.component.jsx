import React, { useState } from 'react';

import Center from '../../components/center/center.component';
import NavHeader from '../../components/nav-header/nav-header.component';

import Navbar from '../../components/navbar/navbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';



import './main.styles.scss';

const Main = () => {
    const [showComplete, setShowComplete] = useState(true);
    const [showIncomplete, setShowIncomplete] = useState(true);

    return (

        <div className='main-page' >
            <NavHeader />
            <Navbar
                showComplete={showComplete}
                showIncomplete={showIncomplete}
                setShowComplete={setShowComplete}
                setShowIncomplete={setShowIncomplete}
            />

            <Center
                showComplete={showComplete}
                showIncomplete={showIncomplete}
            />

            <Sidebar
            />

        </div>

    )
};

export default Main;