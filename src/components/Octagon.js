import React from 'react';

import Icon from './Icon';

const octagon = props => {
    return (
        <div className="octagon flex">
            <Icon icon={props.icon} size={props.size} color={props.color} />
        </div>
    );
}

export default octagon;