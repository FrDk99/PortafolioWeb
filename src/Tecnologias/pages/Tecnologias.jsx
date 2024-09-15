import { CardTechnology } from "../components/CardTechnology"

export const Tecnologias = () => {

    const tecnologias = [

        { titulo: "Csharp", imagen: "/src/assets/csharp.svg" },
        { titulo: "Java", imagen: "/src/assets/java.svg" },
        { titulo: "Python", imagen: "/src/assets/python.svg" },
        { titulo: "Angular", imagen: "/src/assets/angular.svg" },
        { titulo: "React", imagen: "/src/assets/react.svg" },
        { titulo: "JavaScript", imagen: "/src/assets/javascript.svg" },
        { titulo: "TypeScript", imagen: "/src/assets/typescript.svg" },
        { titulo: "HTML", imagen: "/src/assets/html5.svg" },
        { titulo: "CSS", imagen: "/src/assets/css.svg"},
        { titulo: "SpringBoot", imagen: "/src/assets/spring.svg"},
        { titulo: "JQuery", imagen: "/src/assets/jquery.svg"},
        { titulo: "MySQL", imagen: "/src/assets/mysql.svg"},
        { titulo: "Postgres", imagen: "/src/assets/postgresql.svg"},
        { titulo: "SQL Server", imagen: "/src/assets/sql-server.svg"},

    ]



    return (

        <>

            <div className="w-full h-full flex flex-wrap justify-content-center" style={{overflowY: "auto"}}>


                {

                    tecnologias.map(t => (

                        <CardTechnology key={t.titulo} tecnologia={t.titulo} imagen={t.imagen} />

                    ))


                }




            </div>



        </>

    )
}
