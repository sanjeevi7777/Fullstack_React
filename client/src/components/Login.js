import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import '../style/Main.css'
export default function SimpleContainer() {
    const[id,setId]=useState('');
    const[name,setName]=useState("");
    const[roll,setRoll]=useState();
    const[address,setAddress]=useState("");
    const[age,setAge]=useState();
    const[department,setDepartment]=useState();
    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8989/saveStudent",
                {

                    name: name,
                    roll:roll,
                    address: address,
                    age:age,
                    department:department

                });
            alert("Student Registation Successfully");
            setName("");
            setAddress("");
            setRoll();
            setAge();
            setDepartment("");


        }
        catch (err) {
            alert("User Registation Failed");
        }
    }
    
    return (
        <div>
          <h2>Registation Form</h2>
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
                
                <button type="submit" class="btn btn-primary" onClick={save}>Submit</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/Main'>
                    <button type="submit" class="btn btn-primary">Back</button></Link>
                            </form>

        </div>
    );
}
