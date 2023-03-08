import { useState, useEffect } from "react";
import "../style/Main.css";
import axios from "axios";
import { Link } from 'react-router-dom'
const App = () => {
    const [roll, setRoll] = useState();
    const [data, setData] = useState([]);
    const [c, setC] = useState();
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    // const [SNO,setSNO]=useState("");
    function findall() {
        // useEffect(() => {
        axios
            .get("http://localhost:8989/getAllStudent")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
                // setSNO("S.NO");
            })
            .catch((error) => setIsError(error.message));
        }
     
            useEffect(() => {
                axios
                .get("http://localhost:8989/getStudent?roll=" + roll)
                .then((response) => {
                    setData(response.data)
                    setC(1);
              
            });

      
    })
    return (
        <>
            <h1>users</h1>
            {/* {isError !== "" && <h2>{isError}</h2>} */}
            <div>

                <input type="number" placeholder='Enter ID Number' className="form-control1" value={roll} onChange={(e) => setRoll(e.target.value)}>
           
                </input>
            </div>
            {/* <button type="submit" class="btn btn-primary" onClick
                ={fin}>Submit</button>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            <Link to='/Main'>
                <button type="submit" class="btn btn-primary"
                >Back</button></Link>
            <div className="body">
                        <div className="card">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Name</th>
                                    <th>RollNumber</th>
                                    <th>Age</th>
                                    <th>Department</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                { 
                                            <tr key={data.roll}>
                                                <td>{c}</td>
                                                <td>{data.name}</td>
                                                <td>{data.roll}</td>
                                                <td>{data.age}</td>
                                                <td>{data.department}</td>
                                                <td>{data.address}</td>

                                            </tr>   
                                }
                            </tbody>
                        </table>
                        </div>

</div>
            <div className='div'>
                <button type="submit" class="btn btn-primary" onClick
                    ={findall}>FindAll</button>
            </div>
            {isError !== "" && <h2>{isError}</h2>}

            <div className="grid">
               
                {/* {async function fun(){ */}
                
                <table className="table">
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Name</th>
                            <th>RollNumber</th>
                            <th>Age</th>
                            <th>Department</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myData.map((data,index) => {
                                return (
                                    <tr key={data.roll}>
                                        <td>{index + 1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.roll}</td>
                                        <td>{data.age}</td>
                                        <td>{data.department}</td>
                                        <td>{data.address}</td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                

            </div>
        </>
    );
};

export default App;