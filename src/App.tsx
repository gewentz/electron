import { Home, Package, Receipt, NotepadTextDashed, ScrollText } from "lucide-react";
import StockPage from '../pages/page-stock/pageStock';
import CheckoutPage from '../pages/page-checkout/pageCheckout';
import ReceiptPage from '../pages/page-receipt/pageReceipt';
import ReportPage from '../pages/page-report/pageReport';

import React, { useState } from 'react';
import PageHome from "../pages/page-home/pageHome";

const App: React.FC = () => {

  const [activePage, setActivePage] = useState<string>('home');
  const renderPage = () => {
    switch (activePage) {
      case 'checkout':
        return <CheckoutPage />;
      case 'stock':
        return <StockPage />;
      case 'receipt':
        return <ReceiptPage />;
      case 'report':
        return <ReportPage />;
      case 'home':
      default:
        return <PageHome />;
    }
  };

  return (
    <div id='main-frame' className='w-full bg-zinc-600 h-screen p-3 flex flex-col gap-1.5'>
        <div id='menu-open' className='flex flex-row justify-between  items-center w-full bg-zinc-500 px-5 py-2 shadow-md '>
          <button onClick={() => setActivePage('home')} className='border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><Home/> Inicio</button>

          <button onClick={() => setActivePage('stock')} className='border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><Package/> Estoque</button>

          <button onClick={() => setActivePage('checkout')} className='border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><Receipt/> Vendas</button>

          <button onClick={() => setActivePage('report')} className='border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><NotepadTextDashed/> Relatórios</button>

          <button onClick={() => setActivePage('receipt')} className='border border-blue-400 bg-slate-600 text-zinc-100 rounded-md w-52 hover:bg-slate-800 hover:text-blue-400 h-9 flex flex-nowrap gap-4 justify-center items-center'><ScrollText/> NF-e</button>
        </div>
      <div id='screen-content' className=' rounded-sm w-full flex-grow px-3 py-1 shadow-shape bg-pattern bg-no-repeat bg-center gap-3'>

      {renderPage()}
      </div>
    </div>

);
};

export default App;
