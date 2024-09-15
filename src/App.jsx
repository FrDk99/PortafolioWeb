import { useState } from 'react'
import { Navtop } from './shared/Navtop'
import { AppRouter } from './routes/AppRouter'

function App() {


  return (

    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>


      <div style={{ height: "15vh", display: "flex", alignItems: "center" }}>

        <Navtop />

      </div>

      <div style={{ height: "85vh" }}>

        <AppRouter />

      </div>


    </div>
  )

}

export default App
