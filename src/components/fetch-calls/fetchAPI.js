import React, { useEffect, useState } from 'react'

function FetchAPI() {
    
    const [data, setdata] = useState([])

    const getApi = () => {
        fetch('https://capstone-back-end.herokuapp.com/shoe/get')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
        });

    };

    useEffect(() => {
        getApi();
    }, [])
 
    return (
        <div>
            <div>
                <button onClick={getApi}>Get API</button>
            </div>
            <div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>

        </div>
    )
}

export default FetchAPI




