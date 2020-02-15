import React from 'react';

const CountButton = React.memo(function CountButton({onClick, count}) {
    return <button onClick={onClick}>{count}</button>
});// 因为被count1 ,count2重用。如果不用memo, 每次点击都会导致CountButton re-render

function DualCounter() {
    const [count1, setCount1] = React.useState(0);
    const increment1 = React.useCallback(() => setCount1(c => c + 1), []);
    const [count2, setCount2] = React.useState(0);
    const increment2 = React.useCallback(() => setCount2(c => c + 1), []);
    return (
        <>
            <CountButton count={count1} onClick={increment1} />
            <CountButton count={count2} onClick={increment2} />
        </>
    )
}

export default DualCounter;