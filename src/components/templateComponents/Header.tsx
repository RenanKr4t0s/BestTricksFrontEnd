import { BooleanState } from "../../interfaces/generalInterfaces"
import { IconCodeCircle2Filled } from "@tabler/icons-react"
import { Link } from "react-router-dom"


export default function Header({state, setState}:BooleanState){
  function toggleDark(){
    setState(!state)
  }
  return (
    <div className="dark:text-emerald-100 text-emerald-900 bg-white dark:bg-zinc-900  px-4 py-1 justify-between flex">
      <div className="flex gap-6 items-center">
        <Link to={"/"}><IconCodeCircle2Filled size={40}/></Link>
        
        <div>
          <h1 className="text-2xl">Tutoriais de Programação</h1>
          <p className="text-sm mt-1">Tudo para trabalharmos com códigos.</p>
        </div> 
      </div>
      <button className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-black dark:text-white rounded-full"
        onClick={toggleDark}
        >
          {state?"WHT":"DRK"}
        </button>
    </div>

  )
}


