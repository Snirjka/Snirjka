import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const TagName = ({ tabs = 0, children, br }) => {
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

const TagText = ({ children, tabs = 0 }) => {
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

export const TagGroup = ({ tag, attr, tabs = 0, children }) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        document.querySelectorAll('.tag-group.hover').forEach(node => {
            node.classList.remove('hover');
        });
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }
    return (
        <div className={`tag-group ${isHover ? 'hover' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <TagName tabs={tabs} br>{tag}{attr && ` ${attr}`}</TagName>
            <TagText tabs={tabs + 2}>{children}</TagText>
            <TagName tabs={tabs}>/{tag}</TagName>
        </div>
    );
}

TagGroup.propTypes = {
    tag: PropTypes.string,
    attr: PropTypes.string,
    tabs: PropTypes.number,
    children: PropTypes.node.isRequired,
}