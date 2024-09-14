import { Route, Routes } from "react-router"
import App from "../App"


export const AppRouter = () => {



    return (

        <>
        
            <Routes>
                <Route path="/index" element={ <App /> }></Route>
            </Routes>
        
        </>


  )



}
