import axios from 'axios/unsafe/axios.js';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const UpdateStudent = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");

    useEffect(() => {
        const FetchStudents = async () => {
            const stds = await axios.get(`http://localhost:3000/api/student/${id}`)
                .then((res) => {
                    // console.log(res.data)
                    setName(res.data.Name);
                    setAge(res.data.Age);
                })
        }
        FetchStudents();
    }, [])

    const UpdateOperation = async (e)=>{
        e.preventDefault();
        const Uptstd = {
            Name: Name,
            Age: Age
        }
        await axios.put(`http://localhost:3000/api/student/${id}`,Uptstd)
        .then((res)=>{
            window.alert("Student Updated Successfully")
            navigate("/")
        })
    }


    return (
        <>
            <div className="container my-5">
                <h2 className="text-center">Student Update Profile</h2>
                <hr className="w-50 mx-auto" />
                <div className="w-50 mx-auto bg-primary text-light rounded p-5">
                    <form onSubmit={UpdateOperation}>
                        <div className="mb-3">
                            <label>Student Name</label>
                            <input type="text" className="form-control" placeholder="Enter Your Name" value={Name} onChange={(e)=>{setName(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label>Student Age</label>
                            <input type="text" className="form-control" placeholder="Enter Your Age" value={Age} onChange={(e)=>{setAge(e.target.value)}} />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-success w-50">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateStudent
