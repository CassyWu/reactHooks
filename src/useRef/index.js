import React from 'react';
import RefCallBack from './refCallBack';
import CreateRef from './createRef';
import Hooks from './hooks';

function UseRef() {
    return(
        <div>
            <p>UseRef</p>
            <Hooks/>
            <p>createRef (React 16.3 以上)</p>
            <CreateRef/>
            <p>ref call back (React 16.3 以下)</p>
            <RefCallBack/>
        </div>
    );
}

export default UseRef;