import axios from 'axios';
import React from 'react';

const FetchData = () => {


    const fetchHadler = (e) => {

        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    return (
        <div>
            <button onClick={fetchHadler}>Fetch Data</button>
        </div>
    )
}

export default FetchData
