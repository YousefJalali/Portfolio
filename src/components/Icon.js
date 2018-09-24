import React from 'react';

const icon = props => {
    const styles = {
        svg: {
            display: 'inline-block',
            verticalAlign: 'middle',
        },
        path: {
            fill: props.color,
        }
    };
    return (
        <svg
            style={styles.svg}
            width={`${props.size}px`}
            height={`${props.size}px`}
            viewBox="0 0 24 24"
        >
            <path style={styles.path} transform={props.transform} d={props.icon}></path>
        </svg>
    )
};

export default icon;