import { Home, Package, Receipt, NotepadTextDashed, ScrollText } from "lucide-react";



export default function MainMenu() {
  return (
    <div id='menu-open' className=' rounded-sm bg-zinc-500 w-full p-3 flex flex-row gap-2 justify-center items-center h-auto z-20 border border-zinc-400 float-left shadow-md'>
          <button className=' border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><Home/> Inicio</button>
          <button className=' border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><Package/> Estoque</button>
          <button className=' border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><Receipt/> Vendas</button>
          <button className=' border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><NotepadTextDashed/> Relatórios</button>
          <button className=' border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><ScrollText/> NF-e</button>
        </div>
  )
}