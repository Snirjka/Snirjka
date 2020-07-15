import React, { useState } from 'react';
import './style.scss';

const StretchingChild = ({ children }) => {
    const [stretch, isStretching] = useState(false);
    return (
        <span className={`stretching-child ${stretch ? 'stretching' : ''}`} onMouseEnter={() => {
            if (stretch) return;
            isStretching(true);
            setTimeout(() => isStretching(false), 1000)
        }}>
            {children}
        </span>
    );
}

export default StretchingChild;