import projectImage from "../assets/basicScatch.excalidraw.svg"

export default function Hello(){
    return(
        <div className="align-center justify-items-center py-7">
            <h1 className="text-6xl font-black underline text-emerald-700 dark:text-emerald-200">
                Olá mundo dos Tutoriais
            </h1>
            <div className="dark:text-emerald-100 text-emerald-900 bg-white dark:bg-zinc-900
              max-w-4xl flex flex-col justify-center m-5 rounded-md shadow-lg p-5">
                <p className="text-lg">Esse é o Tutoriais de Programação</p>
                <p className="text-lg">Aqui nós iremos escrever os nossos tutoriais de como fazer as coisas dentro das ferramentas que mais utilizamos</p>
            </div>
            <div className="dark:text-emerald-100 text-emerald-700 bg-white dark:bg-zinc-900
                min-w-96 flex flex-col justify-center m-5 rounded-md shadow-lg p-5">
                <h2 className="text-3xl font-black underline mb-3">Vai ser algo mais ou menos assim:</h2>
                <img src={projectImage} alt="imagem do projeto" />
            </div>
        </div>
    )
}