import axios from 'axios';
import React, { useState } from 'react';
import Post from './Post';

const FetchData = () => {

    const [data, setData] = useState([])


    const fetchHadler = (e) => {

        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(function (response) {
                setData(...data, response.data) //set array in the state
                // handle success
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                console.log(data)
                // always executed
            });
    }

    return (
        <div>
            <button onClick={fetchHadler}>Fetch Data</button>
            {
                data.map(m => <Post post={m} />)
            }
        </div>
    )
}

export default FetchData
