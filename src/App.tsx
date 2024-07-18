import { Home, NotepadTextDashed, Receipt, ScrollText, Warehouse } from 'lucide-react';
import React from 'react';

const App: React.FC = () => {
  return (
    <div id='main-frame' className='w-full bg-zinc-600 h-screen rounded-md shadow-2xl p-3 flex flex-row gap-2'>

      <div id='screen-content' className=' rounded-sm bg-zinc-500 w-full flex-grow p-3'>

        <div id='menu-open' className=' rounded-sm bg-zinc-500 w-full p-3 flex flex-row gap-2 justify-center items-center h-auto z-20 border float-left'>
          <button className=' border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><Home/> Inicio</button>
          <button className=' border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><Warehouse/> Estoque</button>
          <button className=' border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><Receipt/> Vendas</button>
          <button className=' border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><NotepadTextDashed/> Relatórios</button>
          <button className=' border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><ScrollText/> NF-e</button>
        </div>
        1 teste teste teste testes teste teste teste testes teste teste teste testes teste teste teste testes teste teste teste testes teste teste teste testes teste teste teste testes teste teste teste testes teste teste teste testes teste teste teste testes teste teste teste testes teste teste teste testes teste teste teste testes teste teste teste testes
      </div>
    </div>

);
};

export default App;
