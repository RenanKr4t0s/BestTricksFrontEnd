import { PresentationProps } from "../interfaces/generalInterfaces"

const Presentation:React.FC<{presentation: PresentationProps}> = ({presentation}) => {
  return (
    <div className="align-center justify-items-center py-4 text-emerald-800 dark:text-emerald-200">
    <h1 className="text-6xl font-black underline ">
        {presentation.title}
    </h1>
    <h2 className="text-2xl font-bold mt-2">{presentation.subtitle}</h2>
    <div className="bg-emerald-50 dark:bg-zinc-900 flex flex-col justify-center m-5 rounded-md shadow-lg p-5">
      <iframe
        width={950}
        height={600}
          src={presentation.pdfFile}
      />
    </div>
</div>
  )
}

export default Presentation
