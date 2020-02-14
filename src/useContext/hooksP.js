import React, {useState, createContext} from 'react';
import Child from "./hooksC";

export const ParentContext = createContext();

function Parent() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <h2>You click {count} times</h2>
            <button onClick={() => {setCount(count + 1)}}>Click me</button>
            <ParentContext.Provider value={count}>
                <Child/>
            </ParentContext.Provider>
        </div>
    );
}

export default Parent;