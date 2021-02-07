import axios from 'axios';
import React from 'react';

const FetchData = () => {

    const fetchHadler = (e) => {

        axios.get('https://react-app-d542a-default-rtdb.firebaseio.com/user.json')
            .then(function (response) {
                // handle success
                console.log(typeof response.data);
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
