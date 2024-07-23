import { Menu } from "lucide-react";
import MainMenu from "../../components/mainMenu";
import React from "react";

export default function Stock() {
  return (
    <div id='main-frame' className='w-full bg-zinc-600 h-screen p-3 flex flex-col gap-1.5'>
        <MainMenu/>
      <div id='screen-content' className=' rounded-sm w-full flex-grow px-3 py-1 shadow-shape bg-pattern bg-no-repeat bg-center gap-3'>
      <div className="flex flex-col shrink-0 h-full w-full rounded-md p-2 bg-transparent gap-2">
        <div id="Header" className="bg-slate-500 w-full rounded-md px-5 py-2 flex justify-between items-center shadow-shape">
          <h1 className="text-lg font-bold text-zinc-200">Bem-vindo USER.</h1>
          <h2 className="text-lg font-bold text-zinc-200">Estoque</h2>

          <div className="w-36 flex flex-row justify-between items-center">
            <span className="text-sm text-zinc-50">Dia 01/07/2024</span>
          <span className="text-sm text-zinc-50 cursor-pointer"><Menu className="size-8"/></span>
          </div>
        </div>

        <div className="w-full bg-zinc-500 h-auto rounded-md shadow-shape border border-zinc-600 p-2 flex flex-col gap-2">
          <div className="flex flex-row justify-between items-center font-semibold uppercase bg-slate-500 px-3 py-1 rounded-md shadow-shape text-zinc-200">
            <span className="flex flex-row justify-center items-center px-2 w-52">
              Codigo
            </span>
            <div className="w-px bg-slate-900 h-full"></div>
            <span className="w-full grow flex flex-row justify-center items-center px-2">
              Produto
            </span>
            <div className="w-px bg-slate-900 h-full"></div>
            <span className="flex flex-row justify-center items-center px-2 w-28">
              Unid
            </span>
            <div className="w-px bg-slate-900 h-full"></div>
            <span className="flex flex-row justify-center items-center px-2 w-28">
              Quant
            </span>
            <div className="w-px bg-slate-900 h-full"></div>
            <span className="flex flex-row justify-center items-center px-2 w-48">
              Valor
            </span>
            <div className="w-px bg-slate-900 h-full"></div>
            <span className="flex flex-row justify-center items-center px-2 w-48">
              Total
            </span>
          </div>

          <div className="flex flex-row justify-between items-center font-semibold uppercase px-3 py-1 text-zinc-200">
          <span className="flex flex-row justify-center items-center px-2 w-52">
              789689958772
            </span>
            <div className="w-px bg-slate-900 h-full"></div>
            <span className="w-full grow flex flex-row items-center px-2">
              Skol Lata 350ml
            </span>
            <div className="w-px bg-slate-900 h-full"></div>
            <span className="flex flex-row justify-center items-center px-2 w-28">
              und
            </span>
            <div className="w-px bg-slate-900 h-full"></div>
            <span className="flex flex-row justify-center items-center px-2 w-28">
              24
            </span>
            <div className="w-px bg-slate-900 h-full"></div>
            <span className="flex flex-row justify-center items-center px-2 w-48">
              4,00
            </span>
            <div className="w-px bg-slate-900 h-full"></div>
            <span className="flex flex-row justify-center items-center px-2 w-48">
              96,00
            </span>
          </div>

          <div className="flex flex-row justify-between items-center font-semibold uppercase px-3 py-1 text-zinc-200">
          <span className="flex flex-row justify-center items-center px-2 w-52">
              789689958772
            </span>
            <div className="w-px bg-slate-900 h-full"></div>
            <span className="w-full grow flex flex-row items-center px-2">
              Skol Lata 350ml
            </span>
            <div className="w-px bg-slate-900 h-full"></div>
            <span className="flex flex-row justify-center items-center px-2 w-28">
              und
            </span>
            <div className="w-px bg-slate-900 h-full"></div>
            <span className="flex flex-row justify-center items-center px-2 w-28">
              24
            </span>
            <div className="w-px bg-slate-900 h-full"></div>
            <span className="flex flex-row justify-center items-center px-2 w-48">
              4,00
            </span>
            <div className="w-px bg-slate-900 h-full"></div>
            <span className="flex flex-row justify-center items-center px-2 w-48">
              96,00
            </span>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}