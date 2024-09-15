export const AboutMe = () => {


    return (

        <>

            <div className="flex flex-row w-full h-full align-items-center">


                <div
                    className=""
                    style={{
                        display: "flex",
                        justifyContent: "end",
                        width: "50%",
                        color: "white",
                        paddingRight: "2rem",
                        fontSize: "0.8rem"
                    }}>


                    <div className="flex flex-column" style={{ fontFamily: "Roboto Mono"}}>

                        <h1>Frank Cruz</h1>
                        <p>Programador con experiencia en desarrollo web con .NET y React.</p>

                        <div className="flex flex-row">

                            <div style={{padding: "5px"}}>
                                <img src="/src/assets/linkedin.svg" alt="Linkedin" style={{width: "20px"}}/>
                            </div>

                            <div style={{padding: "5px"}}>
                                <img src="/src/assets/whatsapp.svg" alt="Whatsapp" style={{width: "20px"}}/>
                            </div>

                            <div style={{padding: "5px"}}>
                                <img src="/src/assets/github-dark.svg" alt="Github" style={{width: "20px"}}/>
                            </div>

                            
                        </div>

                    </div>



                </div>


                <div
                    className="flex justify-content-center"
                    style={{
                        backgroundColor: "blue",
                        width: "50%",
                        padding: "2rem"
                    }}>

                    <img src="/src/assets/react.svg" alt="" style={{ maxWidth: "100%", height: "auto" }} />

                </div>


            </div>





        </>


    )
}
