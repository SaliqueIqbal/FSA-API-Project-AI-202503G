
import {Route, BrowserRouter, Routes} from "react-router-dom"
import GetStudents from "./components/GetStudents"
import CreateStudent from "./components/CreateStudent"

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GetStudents />} />
            <Route path="/create" element={<CreateStudent />} />
          </Routes>
        </BrowserRouter> 
    </>
  )
}

export default App