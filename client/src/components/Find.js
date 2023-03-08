import { useState, useEffect } from "react";
import "../style/Main.css";
import axios from "axios";

const App = () => {
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
    return (
        <>
            {isError !== "" && <h2>{isError}</h2>}
              
            <div className="grid">
            <h1>All users</h1>
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
                            myData.map((data, index) => {
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