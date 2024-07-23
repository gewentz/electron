import MainMenu from "../../components/mainMenu";
import React, { useState } from "react";

export default function Salles() {

  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  function openCheckout(){
    setCheckoutOpen(true);
  };
  function closeCheckout(){
    setCheckoutOpen(false);
  };

  return (
    <div id='main-frame' className='w-full bg-zinc-600 h-screen p-3 flex flex-col gap-1.5'>
        <MainMenu/>
      <div id='screen-content' className=' rounded-sm w-full flex-grow px-3 py-1 shadow-shape bg-pattern bg-no-repeat bg-center gap-3'>
      <div className=" flex w-full flex-col gap-2 p-2">
        <div id="Header" className="bg-slate-500 w-full rounded-md px-5 py-1 flex justify-between items-center shadow-shape">
          <h1 className="text-lg font-bold text-zinc-200">Bem-vindo USER.</h1>
          <h2 className="text-lg font-bold text-zinc-200">CAIXA</h2>
          <span className="text-sm text-zinc-50">Dia 01/07/2024</span>
        </div>

        <div id="Header" className="bg-slate-500 w-full rounded-md px-5 py-1 flex flex-row justify-between items-center shadow-shape">
          <div className="flex flex-row gap-1 text-zinc-100 border rounded p-1 uppercase font-semibold">
            <h2>Caixa:</h2>
            {isCheckoutOpen ? <span className="text-lime-500">Aberto</span> :
            <span className="text-red-500">Fechado</span>}
            
          </div>
          {isCheckoutOpen ? (<div className="flex flex-row gap-1 text-zinc-100 border rounded p-1 uppercase font-semibold">
            <h2>Abertura:</h2>
            <span className="text-zinc-200">06:00</span>
          </div>): <div className="flex flex-row gap-6 text-zinc-100 border rounded p-1 uppercase font-semibold">
            <div className="flex "><h2>Abertura:</h2>
            <span className="text-zinc-200">06:00</span></div>
            <div className="flex "><h2>Fechamento:</h2>
            <span className="text-zinc-200">14:00</span></div>
          </div>}
          <div className="flex flex-row gap-1 text-zinc-100 border rounded p-1 uppercase font-semibold">
            <h2>Numero do caixa:</h2>
            <span className="text-zinc-200">#15680</span>
          </div>
          <div className="flex flex-row gap-1 text-zinc-100 border rounded p-1 uppercase font-semibold">
            {isCheckoutOpen ? <span className="text-red-700 cursor-pointer" onClick={closeCheckout}>Fechar</span> :
            <span className="text-lime-700 cursor-pointer" onClick={openCheckout}>Abrir</span>}
          </div>
        </div>

        <form id="Header" className="w-full rounded-md px-1 py-2 flex justify-between items-center shadow-shape gap-2 text-zinc-200">

          <input type="search" placeholder="Buscar produto" className="w-full bg-slate-500 rounded-md p-2 placeholder:text-zinc-50 outline-blue-400" />

          <input type="tel" placeholder="Quantidade" className="w-64 bg-slate-500 rounded-md p-2 placeholder:text-zinc-50 outline-blue-400" />

          <button className="w-32 bg-slate-700 rounded-md p-2 shadow-shape font-bold hover:text-green-500 hover:bg-slate-800">Inserir</button>

        </form>

        <div id="Header" className="w-full rounded-md px-1 py-2 flex justify-between shadow-shape gap-1 text-zinc-200">

          <div className="w-full bg-slate-500 rounded-md p-2">

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
              Und.
            </span>
            <div className="w-px bg-slate-900 h-full"></div>
            <span className="flex flex-row justify-center items-center px-2 w-28">
              Qtd.
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

          <div className="flex flex-row justify-between items-center font-semibold uppercase px-3 text-zinc-200">
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

          <div className="flex flex-row justify-between items-center font-semibold uppercase px-3 text-zinc-200">
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

          <div className="flex flex-row justify-between items-center font-semibold uppercase px-3 text-zinc-200">
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

          <div className="flex flex-row justify-between items-center font-semibold uppercase px-3 text-zinc-200">
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

          <div className="flex flex-row justify-between items-center font-semibold uppercase px-3 text-zinc-200">
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

          <div className="flex flex-row justify-between items-center font-semibold uppercase px-3 text-zinc-200">
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

          <div className="flex flex-row justify-between items-center font-semibold uppercase px-3 text-zinc-200">
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

          <div className="flex flex-row justify-between items-center font-semibold uppercase px-3 text-zinc-200">
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

          <div className="flex flex-row justify-between items-center font-semibold uppercase px-3 text-zinc-200">
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

          <div className="flex flex-row justify-between items-center font-semibold uppercase px-3 text-zinc-200">
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

          <div className="flex flex-row justify-between items-center font-semibold uppercase px-3 text-zinc-200">
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
          <div className="flex flex-col gap-2 w-1/3 bg-slate-500 rounded-md p-2 h-40">
          <div className="flex flex-col  bg-slate-500 rounded-md p-2 h-24 gap-2">
            <h1 className="text-3xl font-black text-zinc-50 uppercase">total</h1>
            <h1 className="flex text-3xl font-black text-zinc-50 uppercase gap-1">R$<span>1056,00</span></h1>
          </div>

          <div className="flex flex-row justify-between items-center">
          <button className="w-auto bg-slate-700 rounded-md p-1 shadow-shape font-bold hover:text-green-500 hover:bg-slate-800">Dinheiro</button>

          <button className="w-auto bg-slate-700 rounded-md p-1 shadow-shape font-bold hover:text-green-500 hover:bg-slate-800">Pix/Cartão</button>

          <button className="w-auto bg-red-600 rounded-md p-1 shadow-shape font-bold text-zinc-200 hover:text-red-500 hover:bg-slate-800">Cancelar Venda</button>
          </div>
          </div>

        </div>

        </div>
      </div>
    </div>
  )
}