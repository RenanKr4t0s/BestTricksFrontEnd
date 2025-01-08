import { useState } from "react"

//react router dom
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { presentationList } from "./objects/presentations"


//template components
import Footer from "./components/templateComponents/Footer"
import Header from "./components/templateComponents/Header"
import Sidebar from "./components/templateComponents/Sidebar"

//pages
import Hello from "./pages/Hello"
import Presentation from "./components/Presentation"

function App() {
  const [dark, setDark] = useState(false)


  return (
    <BrowserRouter>
      <div className={`${dark&&"dark"} flex flex-col h-screen 1`} >
        <Header state={dark} setState={setDark} />
        <div className="flex-1 flex">
          <Sidebar />
          <div className="flex-1 bg-white dark:bg-zinc-800">
          <Routes>
            <Route path="/" element={<Hello />} />
            {presentationList.map((item)=>{
              return(
                <Route path={item.path} element={
                  <Presentation
                   presentation = {item}
                  />
                }/>
              )
            })}
          </Routes>
            </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
