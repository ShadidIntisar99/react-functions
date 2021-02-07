import React, { useState } from 'react';

const App = () => {

    const [isShow, setIsShow] = useState(false)

    return (
        <>
            <button onClick={() => setIsShow(!isShow)}>{isShow ? 'Hide' : 'Show'}</button>
            {
                isShow && <h1>I am here!</h1>
            }
        </>
    )
}


export default App;
