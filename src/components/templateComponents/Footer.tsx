
export default function Footer(){
  const data: string = new Date().getFullYear().toString()
  return (
    <div className="dark:text-emerald-100 text-zinc-900 bg-white dark:bg-zinc-900 text-end px-7 py-2">
      <p>Desenvolvido por Renan Silva</p>
      <p>Copyright {data}</p>
    </div>
  )
}