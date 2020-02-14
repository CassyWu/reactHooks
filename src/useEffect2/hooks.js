import React, { useState, useEffect } from 'react';

function Example() {
    const [windowSize, setWindowSize] = useState({innerWidth: 0, innerHeight: 0});

    useEffect(()=>{
        window.addEventListener('resize', handleWindowSizeChange);
        return () => window.removeEventListener('resize', handleWindowSizeChange);
    }, []); //空数组作为第二个参数，表明执行只运行一次的effect。等同于告诉React我的effect不依赖于props或state中的任何值（仅在组件挂载和卸载时执行）

    function handleWindowSizeChange() {
        setWindowSize(
            {
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            }
        )
    }

    return(
        <div>
            <h2>
                window innerWidth: {windowSize.innerWidth}<br/>
                window innerHeight: {windowSize.innerHeight}
            </h2>
        </div>
    );
}

export default Example;