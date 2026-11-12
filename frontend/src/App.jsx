
import {Route, BrowserRouter, Routes} from "react-router-dom"
import GetStudents from "./components/GetStudents"
import CreateStudent from "./components/CreateStudent"
import UpdateStudent from "./components/UpdateStudent"

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GetStudents />} />
            <Route path="/create" element={<CreateStudent />} />
            <Route path="/update/:id" element={<UpdateStudent />} />
          </Routes>
        </BrowserRouter> 
    </>
  )
}

export default App