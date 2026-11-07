import { useState } from "react"
import axios from './../../node_modules/axios/lib/axios'

export const CreateStudent = () => {

  const [Name,setName] = useState("");
  const [Age,setAge] = useState("");

  const formHandle = (e)=>{
    e.preventDefault();
    const stdObj = {
      Name: Name,
      Age: Age
    }
    axios.post("http://localhost:3000/api/student",stdObj)
    .then((res)=>{
      console.log(res.data)
      window.alert('Student Added Successfully')
      setName("")
      setAge("")
    });
  }

  return (
    <>
        <div className="container my-5">
            <h2 className="text-center">Student Management</h2>
            <hr className="w-50 mx-auto" />
            <div className="w-50 mx-auto bg-dark text-light rounded p-5">
              <form onSubmit={formHandle}>
                <div className="mb-3">
                  <label>Student Name</label>
                  <input type="text" className="form-control" placeholder="Enter Your Name" value={Name} onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div className="mb-3">
                  <label>Student Age</label>
                  <input type="text" className="form-control" placeholder="Enter Your Age" value={Age} onChange={(e)=>{setAge(e.target.value)}} />
                </div>
                <div className="text-center">
                  <button className="btn btn-warning w-50">Submit</button>
                </div>
              </form>
            </div>
        </div>
    </>
  )
}

export default CreateStudent