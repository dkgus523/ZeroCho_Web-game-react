import React, { Component, memo } from 'react';

const Try = memo(({tryInfo}) => {
        return (
            <li>
                <div>{this.props.tryInfo.try}</div>
                <div>{this.props.tryInfo.result}</div>
            </li>
        );
});

export default Try; 

