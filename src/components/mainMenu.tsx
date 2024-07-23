import { Home, NotepadTextDashed, Package, Receipt, ScrollText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function MainMenu() {
  const navigate = useNavigate()

  return (
    <div id='menu-open' className='flex flex-row justify-between  items-center w-full bg-zinc-500 px-5 py-2 shadow-md '>
          <button onClick={() => navigate(`/`)} className='border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><Home/> Inicio</button>

          <button onClick={() => navigate(`/stock`)} className='border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><Package/> Estoque</button>

          <button onClick={() => navigate(`/salles`)} className='border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><Receipt/> Vendas</button>

          <button onClick={() => navigate(`/reports`)} className='border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><NotepadTextDashed/> Relatórios</button>

          <button onClick={() => navigate(`/fiscals`)} className='border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><ScrollText/> NF-e</button>
        </div>
  )
}