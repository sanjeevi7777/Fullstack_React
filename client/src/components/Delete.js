import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Find from './Find';
function Delete() {
    const [roll, setRoll] = useState();
    const [error, setError] = useState('');
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8989/getAllStudent")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
            })
            // .catch((error) => setIsError(error.message));
    }, []);
    function del() {
        const length = Object.keys(myData).length;
        // event.preventDefault();
        let f = 0;
        for (let i = 0; i < length; i++) {
        // useEffect(() => {
            if (Number(roll) === myData[i].roll) {
                f = 1;
        axios
            .delete('http://localhost:8989/deleteStudent?roll=' + roll)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => setError(error.message));
        alert("User Deleted");
    }
    //  []);
    }
        if (f === 0) {
            alert('User Does Not Exists');
        }
}
    return (
        <>
            <h2>Delete User</h2>
            <div>
                <input type="number" placeholder='Enter Roll Number' className="form-control1" value={roll} onChange={(e) => setRoll(e.target.value)}>
                </input>
            </div>

            <button type="submit" class="btn btn-primary" onClick
                ={del}>Submit</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/'>
                <button type="submit" class="btn btn-primary"
                >Back</button>
            </Link>
            <h2>
                {error}
            </h2>
            <div className='Find'>
                <Find />
            </div>
        </>
    );
}

export default Delete;