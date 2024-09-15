import { useState } from "react"


export const CardTechnology = ({tecnologia, imagen}) => {


    return (

        <>
        
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid white",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "20px",
                    width: "200px",
                    height: "180px",
                    paddingTop: "20px",
                    margin: "20px"    
                }}>


                <img src={imagen} alt={tecnologia} 
                    style={{
                            maxWidth: "100%", 
                            maxHeight: "60%", 
                            filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))"
                            }}/>

                <h3 style={{color: "white", textAlign: "center"}}>{tecnologia}</h3>



            </div>

        
        
        </>


    )

}
