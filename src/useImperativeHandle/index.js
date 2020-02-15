import React, { forwardRef, useRef, useImperativeHandle } from 'react';

function Parent() {
    const inputRef= useRef();

    const handleChildRef = () => {
        console.log(inputRef.current); //这时取到的ref.current里面就只有focus属性了
        inputRef.current.focus();
    };

    return(
        <>
            <InputEle ref={inputRef} />
            <button onClick={handleChildRef}>click to focus input</button>
        </>
    )
}

const InputEle = forwardRef((props, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));

    return <input ref={inputRef} placeholder="put whatever you want"/>;
});

export default Parent;