import axios from 'axios/unsafe/axios.js';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const GetStudents = () => {
    const [students,setStudent] = useState([]);
    useEffect(()=>{
        const FetchStudents = async ()=>{
            const stds = await axios.get("http://localhost:3000/api/student")
            .then((res)=>{
                setStudent(res.data)
            }) 
        }
        FetchStudents();
    },[])
  return (
    <>
        <div className="container my-5">

            <div className="text-end">
                <Link to="/create">
                    <button className='btn btn-dark'>Create Student</button>
                </Link>
            </div>

            <h2 className="text-center">List of Students</h2>
            <hr className="w-50 mx-auto" />
            <table className="table table-dark bg-dark table-hover">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((items,index) => (
                        <tr key={items._id}>
                            <td>{index+1}</td>
                            <td>{items.Name}</td>
                            <td>{items.Age}</td>
                            <td>
                                <div className="d-flex justify-content-evenly">
                                    <a href="" className="text-primary">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </a>
                                    <a href="" className="text-danger">
                                        <i className="fa-solid fa-trash"></i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default GetStudents
