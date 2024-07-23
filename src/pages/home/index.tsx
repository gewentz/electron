import MainMenu from "../../components/mainMenu";
import React from "react";

export default function Home() {
  return (
    <div id='main-frame' className='w-full bg-zinc-600 h-screen p-3 flex flex-col gap-1.5'>
        <MainMenu />
      <div id='screen-content' className=' rounded-sm w-full flex-grow px-3 py-1 shadow-shape bg-pattern bg-no-repeat bg-center gap-3'>
      <div className="flex flex-col shrink-0 h-full w-full rounded-md p-2 bg-transparent gap-2">
              <div id="Header" className="bg-slate-500 w-full rounded-md px-5 py-2 flex justify-between items-center shadow-shape">
                <h1 className="text-lg font-bold text-zinc-200">Bem-vindo USER.</h1>
                <h2 className="text-lg font-bold text-zinc-200">Status</h2>
                <span className="text-sm text-zinc-50">Dia 01/07/2024</span>
              </div>
      
              <div className="w-full rounded-md px-1 py-2 flex flex-row gap-2 justify-between">
              <div className="w-full bg-zinc-500 h-32 rounded-md shadow-shape border border-zinc-600 p-2 flex flex-col gap-5">
                <span className="text-zinc-200 font-bold shadow-sm w-full h-10 p-2 bg-slate-500 text-center rounded-md">Vendas total</span>
      
                <span className="flex items-center justify-end text-zinc-200 font-bold shadow-sm border-2 border-green-600 w-full h-12 p-2 bg-green-500 rounded-md">
                  R$ 0.000,00
                </span>
                </div>
      
                <div className="w-full bg-zinc-500 h-32 rounded-md shadow-shape border border-zinc-600 p-2 flex flex-col gap-5">
                <span className="text-zinc-200 font-bold shadow-sm w-full h-10 p-2 bg-slate-500 text-center rounded-md">Vendas no dinheiro</span>
      
                <span className="flex items-center justify-end text-zinc-200 font-bold shadow-sm border-2 border-green-600 w-full h-12 p-2 bg-green-500 rounded-md">
                  R$ 0.000,00
                </span>
                </div>
      
                <div className="w-full bg-zinc-500 h-32 rounded-md shadow-shape border border-zinc-600 p-2 flex flex-col gap-5">
                <span className="text-zinc-200 font-bold shadow-sm w-full h-10 p-2 bg-slate-500 text-center rounded-md">Vendas no cartão / pix</span>
      
                <span className="flex items-center justify-end text-zinc-200 font-bold shadow-sm border-2 border-green-600 w-full h-12 p-2 bg-green-500 rounded-md">
                  R$ 0.000,00
                </span>
                </div>
      
              </div>
      
              <div className="w-full rounded-md px-1 py-2 flex flex-row gap-2 justify-between">
                <div className="w-full bg-zinc-500 h-32 rounded-md shadow-shape border border-zinc-600 p-2 flex flex-col gap-5">
                  <span className="text-zinc-200 font-bold shadow-sm w-full h-10 p-2 bg-slate-500 text-center rounded-md">Itens com baixo estoque</span>
                  renderizar itens com menos de 50 und aqui
                </div>
      
                <div className="bg-zinc-500 h-32 rounded-md shadow-shape border border-zinc-600 p-2 flex flex-col gap-5 w-1/3">
                  <span className="text-zinc-200 font-bold shadow-sm w-full h-10 p-2 bg-slate-500 text-center rounded-md">Top vendas</span>
                  renderizar itens com maior media de vendas aqui
                </div>
              </div>
            </div>        
      </div>
    </div>

);
}