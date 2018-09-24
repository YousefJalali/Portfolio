import React from 'react';

const loadingBar = props => (
    <div className="loading-bar">
        <div className="label flex sub-title">{props.label}</div>
        <div className="percent" style={{width: ((props.percent * 75) / 100) + "%"}}></div>
        <div className="percent-number flex text">{props.percent}%</div>
    </div>
);

export default loadingBar;