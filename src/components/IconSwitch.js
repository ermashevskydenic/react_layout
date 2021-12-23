import React from 'react';
import Icon from './Icon';
const IconSwitch = (props) => {
    let {icon, onSwitch} = props;
    return (
        <div className="switch-view" onClick={onSwitch}>
            <Icon size={32} name={icon}/>
        </div>);
};
export default IconSwitch;