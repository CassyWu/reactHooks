import React, {useRef} from 'react';

function UseRef() {
    let inputRef = useRef( null);
    const handleClick = () => {
        alert(`input value is ${inputRef.current.value}`);
    };
    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleClick}>Get Input Value</button>
        </div>
    )
}

export default UseRef;