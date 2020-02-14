import React from 'react';
import Classes from './classes';
import Hooks from './hooks';

function UseEffect() {
    return(
        <div>
            <h1>无需清除的effect, 随时在控制台输出state</h1>
            <Classes/>
            <Hooks/>
        </div>
    );
}

export default UseEffect;