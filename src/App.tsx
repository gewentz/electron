import MainMenu from '../modules/main-menu'
import HomePage from '../pages/page-home/pageHome'

import React, { useState } from 'react';

const App: React.FC = () => {

  const [IsHomePageActive, SetIsHomePageActive] = useState (false)
  const [IsCheckoutPageActive, SetIsCheckoutPageActive] = useState (false)
  const [IsStockPageActive, SetIsStockPageActive] = useState (false)
  const [IsReceiptPageActive, SetIsReceiptPageActive] = useState (false)
  const [IsHomeReportActive, SetIsReportPageActive] = useState (false)

  function CloseCheckOutPage( => () {
    SetIsCheckoutPageActive(false)
  });

  function CloseStockPage( => () {
    SetIsStockPageActive(false)
  });

  function CloseReceiptPage( => () {
    SetIsReceiptPageActive(false)
  }),

  function CloseReportPage( => () {
    SetIsReportPageActive(false)
  }),

  return (
    <div id='main-frame' className='w-full bg-zinc-600 h-screen rounded-md shadow-2xl p-3 flex flex-col gap-1.5'>
        <MainMenu />
      <div id='screen-content' className=' rounded-sm bg-zinc-500 w-full flex-grow p-3'>
        <HomePage />


      </div>
    </div>

);
};

export default App;
