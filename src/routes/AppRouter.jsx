import { Navigate, Route, Routes } from "react-router"
import App from "../App"
import { AboutMe } from "../Inicio/pages/AboutMe";
import { Tecnologias } from "../Tecnologias/pages/Tecnologias";

export const AppRouter = () => {



    return (

        <>
        
            <Routes>
                <Route path="/index" element={ <AboutMe /> }></Route>
                <Route path="/proyecto" element={ <AboutMe /> }></Route>
                <Route path="/tecnologias" element={ <Tecnologias /> }></Route>
                <Route path="*" element={<Navigate to="/index"/>}></Route>
            </Routes>
        
        </>


  )



}
