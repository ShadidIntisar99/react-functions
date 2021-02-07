import axios from 'axios';
import React, { useState } from 'react';

const Form = () => {
    let [name, setName] = useState('');
    let [age, setAge] = useState('');

    const submitHadler = (e) => {
        const userData = {
            name: name,
            age: age
        }
        e.preventDefault()
        console.log({ name, age })
        axios.post('https://react-app-d542a-default-rtdb.firebaseio.com/user.json', userData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

       
    }


    return (
        <form>
            <h1>Hello {name} {age}</h1>
            <p>Enter your name:</p>
            <input
                type='text'
                name={name}
                onChange={e => setName(e.target.value)}
            />
            <p>Enter your age:</p>
            <input
                type='text'
                name={age}
                onChange={e => setAge(e.target.value)}
            />
            <br /> <br />
            <input onClick={submitHadler} type="submit" value="Submit" />
        </form>
    );

}

export default Form
