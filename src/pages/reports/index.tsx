import MainMenu from "../../components/mainMenu";
import React from "react";

export default function Reports() {
  return(
    <div id='main-frame' className='w-full bg-zinc-600 h-screen p-3 flex flex-col gap-1.5'>
        <MainMenu/>
      <div id='screen-content' className=' rounded-sm w-full flex-grow px-3 py-1 shadow-shape bg-pattern bg-no-repeat bg-center gap-3'>

      <p>hi reports</p>
      </div>
    </div>
  )
}