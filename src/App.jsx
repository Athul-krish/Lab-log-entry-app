import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddStudent from "./components/AddStudent"
import ViewStudent from "./components/ViewStudent"

function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddStudent/>}/>
    <Route path="/add" element={<AddStudent/>}/>
    <Route path="/view" element={<ViewStudent/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
