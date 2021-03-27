import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, others }) => {
    return (
        <div className="button" {...others} >
            {children}
        </div>
    )
};

export default CustomButton;