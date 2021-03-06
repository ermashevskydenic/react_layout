import React from 'react';
const Icon = (props) => {
    let {name, size} = props;
    return (<i className="material-icons" style={{fontSize: size}}>{name}</i>);
};
export default Icon;