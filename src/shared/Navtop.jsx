import { NavLink } from "react-router-dom"

export const Navtop = () => {

    return (


        <>

            <nav className="w-full h-full navBar">


                <div>
                    <img src="/src/assets/logo.png" alt="" style={{width: "40px", height: "40px", filter: "drop-shadow(0 0 10px rgba(252, 109, 38, 0.8))"}}/>
                </div>

                <div>
                    <NavLink to="/index" className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Inicio</NavLink>

                    <NavLink to="/proyecto" className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Proyecto</NavLink>

                    <NavLink to="/tecnologias" className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Tecnologias</NavLink>

                </div>


            </nav>

        </>




    )
}
