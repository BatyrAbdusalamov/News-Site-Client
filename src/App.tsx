import { BrowserRouter } from "react-router-dom"
import { MainRoute } from "./route/components/MainRoute"
import { NavBar } from "./components/NavBar"

function App() {

  return (<>
    <BrowserRouter>
      <NavBar/>
      <MainRoute/>
    </BrowserRouter>
    </>
  )
}

export default App
