import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(`You clicked ${count} times`);
    });

    return(
        <div>
            <h2>You clicked {count} times</h2>
            <button onClick={() => {setCount(count + 1)}}>Click me</button>
        </div>
    );
}

export default Example;