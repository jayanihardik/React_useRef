import React, { useState, useEffect, useRef } from 'react';
import TextField from '@material-ui/core/TextField';

const UseRefPage = () => {
    const [name, setName] = useState()
    const renderCount = useRef(1)
    const inputBox2 = useRef(null)
    const inputBox3 = useRef(null)

    const handleOnChange = (e) => {
        setName(e.target.value)
    }

    useEffect(() => {
        inputBox2.current.value = "111111111111111111";
        inputBox3.current.focus()
    }, [])

    useEffect(() => {
        renderCount.current ++
    })

    return (
        <>
            <div className="mb-5 ml-2">
                <div className="m-2 mb-2">
                    <input id="standard-basic" />
                </div>
                <div className="m-2 mb-2">
                    <input ref={inputBox2} id="standard-basic" />
                </div>
                <div className="m-2 mb-2">
                    <input ref={inputBox3} id="standard-basic" />
                </div>
                <div className="m-2 mb-2">
                    <TextField id="standard-basic" name="name" onChange={(e) => handleOnChange(e)} label="Standard" />
                </div>
                <div className="m-2 mb-2 mt-2">
                    {name}
                </div>
                <div className="m-2 mb-2 mt-2">
                    Page render {renderCount.current} time
                </div>
            </div>
        </>
    )
}

export default UseRefPage
