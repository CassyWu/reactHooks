import React, {useContext} from 'react';
import {ParentContext} from './hooksP';

function Child() {
    let count = useContext(ParentContext);

    return(
        <h2>parent component click {count} times</h2>
    )
}

export default Child;