import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../style/Main.css'
export default function SimpleContainer() {
    const [id, setId] = useState('');
    const [name, setName] = useState("");
    const [roll, setRoll] = useState();
    const [address, setAddress] = useState("");
    const [age, setAge] = useState();
    const [department, setDepartment] = useState();
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    useEffect(() => {
        axios
            .get("http://localhost:8989/getAllStudent")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
            })
            .catch((error) => setIsError(error.message));
    }, []);
    
    async function save(event) {
        const length = Object.keys(myData).length;
        event.preventDefault();
        let f=0;
        for (let i = 0; i < length; i++) {
            // console.log(myData[i].roll);
            
            if(Number(roll)===myData[i].roll){
                f=1;
                try {
                    await axios.put("http://localhost:8989/updateStudent",
                        {

                            name: name,
                            roll: roll,
                            address: address,
                            age: age,
                            department: department

                        });
                    alert("Student Updation Successfully");
                    setName();
                    setAddress();
                    setRoll();
                    setAge();
                    setDepartment();


                }
                catch (err) {
                    alert("User Registation Failed");
                }
            }
            }
            if(f===0){
                alert('User Does Not Exists');
            }
        } 
    //     else{
        
    // }
    return (
        <div>
            <h2>Update Profile</h2>
            <form id="login-form">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required value={name} onChange={(event) => {
                    setName(event.target.value);
                }} />
                <label for="password">Rollnumber:</label>
                <input type="text" id="password" name="password" required value={roll} onChange={(event) => {
                    setRoll(event.target.value);
                }} />
                <label for="username">Department:</label>
                <input type="text" id="username" name="username" required value={department} onChange={(event) => {
                    setDepartment(event.target.value);
                }} />
                <label for="username">Age:</label>
                <input type="text" id="username" name="username" required value={age} onChange={(event) => {
                    setAge(event.target.value);
                }} />
                <label for="password">Address:</label>
                <input type="text" id="password" name="password" required value={address} onChange={(event) => {
                    setAddress(event.target.value);
                }} />

                <button type="submit" class="btn btn-primary" onClick={save}>Update</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/Main'>
                    <button type="submit" class="btn btn-primary">Back</button></Link>
            </form>

        </div>
    );
}
