import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Homepage from "./pages/Homepage"
import TripPage from "./pages/TripPage"
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="trips/:id" element={<TripPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
