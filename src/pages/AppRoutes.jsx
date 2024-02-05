import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./mainPage/MainPage"
import CarCreateForm from "./CarCreateForm/CarCreateForm"
import CarUpdateForm from "./CarUpdateForm/CarUpdateForm"
import CarView from "./CarView/CarView"
import CarList from "./CarList/CarList"
export default function AppRoutes(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage></MainPage>}/>
            <Route path="/createcar" element={<CarCreateForm></CarCreateForm>}/>
            <Route path="/updatecar/:id" element={<CarUpdateForm/>}></Route>
            <Route path="/cars" element={<CarList/>}></Route>
            <Route path="/car/:id" element={<CarView/>}></Route>
        </Routes>
        </BrowserRouter>
        
        </>
    )
}