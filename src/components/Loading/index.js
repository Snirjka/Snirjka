import React, { useState, useEffect } from 'react';
import './style.scss';

export default ({ onLoad }) => {
    const [intervalId, setIntervalId] = useState();
    const [counter, setCounter] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (!intervalId) {
            const interval = setInterval(() => {
                setCounter(counter => counter + 1);
                setWidth(width => width + 1);
            }, 50);
            setIntervalId(interval);
        }
        if (counter === 100) {
            clearInterval(intervalId);
            onLoad();
        }
    }, [intervalId, counter, onLoad]);

    return (
        <div className='loading-wrapper'>
            <div className='loading'>
                <div className='loading-letters'>
                    <div>G</div>
                    <div>N</div>
                    <div>I</div>
                    <div>D</div>
                    <div>A</div>
                    <div>O</div>
                    <div>L</div>
                </div>
                {/* <span>LOADING</span> */}
                <h1>{counter}%</h1>
                <hr style={{ width: width + '%' }} />
            </div>
        </div>
    );
}