import React from 'react';

const App: React.FC = () => {
  return (
  <div className='w-full bg-zinc-900 h-full text-zinc-100 flex items-center justify-center p-2'>
    <div id='main-frame' className='w-full bg-zinc-600 h-screen rounded-md shadow-2xl p-3 flex flex-row gap-2'>
      
      <div id='menu-open' className=' rounded-sm bg-zinc-500 w-52 p-3 flex flex-col gap-4 items-center h-auto z-20'>
        <button className='border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-full hover:bg-slate-800 hover:text-blue-400 h-9'>Inicio</button>
        <button className='border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-full hover:bg-slate-800 hover:text-blue-400 h-9'>Estoque</button>
        <button className='border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-full hover:bg-slate-800 hover:text-blue-400 h-9'>Vendas</button>
        <button className='border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-full hover:bg-slate-800 hover:text-blue-400 h-9'>Relatórios</button>
        <button className='border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-full hover:bg-slate-800 hover:text-blue-400 h-9'>NF-e</button>
      </div>

      <div id='screen-content' className=' rounded-sm bg-zinc-500 w-full flex-grow p-3'>conteudo</div>
    </div>
  </div>
);
};

export default App;
