import React from 'react'

function FetchAPI() {

    const getApi = () => {
        fetch('https://capstone-back-end.herokuapp.com/shoe/get')
        .then((response) => response.json())
        .then((data) => console.log(data));

    }

    return (
        <div>
            My API <br />

            <button onClick={getApi}>Get API</button>
        </div>
    )
}

export default FetchAPI