import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const TagName = ({ tabs = 0, children, br }) => {
    return (
        <>
            <span className='tag-name' style={{ marginLeft: tabs * 10 + 'px' }}>&lt;{children}&gt;</span>
            {
                br &&
                <br />
            }
        </>
    );
}

TagName.propTypes = {
    tabs: PropTypes.number,
    children: PropTypes.node.isRequired,
    br: PropTypes.bool
}

export const TagText = ({ children, tabs = 0 }) => {
    return (
        <div style={{ marginLeft: tabs * 10 + 'px' }}>
            {children}
        </div>
    );
}

TagText.propTypes = {
    tabs: PropTypes.number,
    children: PropTypes.node.isRequired,
}