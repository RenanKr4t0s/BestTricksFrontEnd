import { BooleanState } from "../../interfaces/generalInterfaces"


export default function Header({state, setState}:BooleanState){
  function toggleDark(){
    setState(!state)
  }
  return (
    <div className="dark:text-emerald-100 text-emerald-900 bg-white dark:bg-zinc-900  px-4 py-1 justify-between flex">
      <div>
        <h1 className="text-2xl">Tutoriais de Programação</h1>
        <p className="text-sm mt-2">Tudo para trabalharmos com códigos.</p>
      </div>
      <button className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-black dark:text-white rounded-full"
        onClick={toggleDark}
        >
          {state?"WHT":"DRK"}
        </button>
    </div>

  )
}


