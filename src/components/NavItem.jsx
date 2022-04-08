import React from 'react';

const NavItem = props => {
    return (
        <a href={props.link}>{props.text}</a>
    );
};

NavItem.propTypes = {
    link: String,
    text: String,
    onClick: Function
};

export default NavItem;