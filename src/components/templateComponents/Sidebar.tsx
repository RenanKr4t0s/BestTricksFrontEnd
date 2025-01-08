import { Link } from "react-router-dom"
import { presentationList } from "../../objects/presentations"

export default function Sidebar(){
  return (
    <aside className="dark:text-emerald-100 text-zinc-900 bg-white dark:bg-zinc-900
       border-y-2 border-emerald-50 dark:border-zinc-800
       w-52 pt-5 px-2 top">
      <div className="my-3">
        <h1 className="text-2xl text-emerald-700 
        border-b-2 border-emerald-100 dark:border-zinc-800">Atividades</h1>
        <Link to="/" className="hover:text-zinc-300">Home</Link>
      </div>  
      <div className="my-3">
        <h2 className="text-xl text-emerald-700 
      border-b-2 border-emerald-100 dark:border-zinc-800">Tutoriais</h2>
        {presentationList.map((presentation)=>{
          return(
            <Link to={presentation.path} className="hover:text-zinc-300 inline-block my-2">{presentation.title}</Link>
          )
        })}
      </div>
    </aside>
  )
}

