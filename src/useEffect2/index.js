import React from 'react';
import Classes from './classes';
import Hooks from './hooks';

function UseEffect() {
    return(
        <div>
            <h1>需清除的effect, 随时获取window resize的宽高</h1>
            <Classes/>
            <Hooks/>
        </div>
    );
}

export default UseEffect;