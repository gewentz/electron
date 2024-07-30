import { Plus, Trash, X } from "lucide-react";
import MainMenu from "../../components/mainMenu";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FormAddItem from "../../components/formAddItem";
import FormDeleteItem from "../../components/formDeleteItem";

export default function Stock() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    try {
      const response = await axios.get('http://localhost:3000/items');
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const [isAddItemOpen, setIsAddItemOpen] = useState(false);
  const [isDeleteItemOpen, setIsDeleteItemOpen] = useState(false);

  function openDeleteItemMenu() {
    setIsDeleteItemOpen(true);
  }

  function closeDeleteItemMenu() {
    setIsDeleteItemOpen(false);
  }

  function openAddItemMenu() {
    setIsAddItemOpen(true);
  }

  function closeAddItemMenu() {
    setIsAddItemOpen(false);
  }

  function handleAddItem(newItem) {
    setItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.code === newItem.code);

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      } else {
        return [...prevItems, newItem];
      }
    });
  }

  function handleDeleteItem(delItemCode) {
    setItems(prevItems => prevItems.filter(item => item.code !== delItemCode));
  }

  return (
    <div id='main-frame' className='w-full bg-zinc-600 min-h-svh p-3 flex flex-col gap-1.5'>
      <MainMenu/>
      <div id='screen-content' className='rounded-sm w-full flex-grow px-3 py-1 shadow-shape bg-pattern bg-no-repeat bg-center gap-3'>

        {isAddItemOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[940px] rounded-xl py-5 px-6 shadow-shape bg-zinc-600 space-y-5">
              <div className="space-y-2">
                <div className="shadow-shape flex justify-between text-zinc-50 bg-slate-500 rounded-md items-center px-3">
                  <h2 className="font-bold">Adicionar novo item</h2>
                  <X className="cursor-pointer font-extrabold text-red-900 size-8" onClick={closeAddItemMenu}/>
                </div>
              </div>

              <div className="bg-slate-500 rounded-md flex flex-col w-full p-4">
                <FormAddItem addItem={handleAddItem} />
              </div>
            </div>
          </div>
        )}

        {isDeleteItemOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[940px] rounded-xl py-5 px-6 shadow-shape bg-zinc-600 space-y-5">
              <div className="space-y-2">
                <div className="shadow-shape flex justify-between text-zinc-50 bg-slate-500 rounded-md items-center px-3">
                  <h2 className="font-bold">Excluir item</h2>
                  <X className="cursor-pointer font-extrabold text-red-900 size-8" onClick={closeDeleteItemMenu}/>
                </div>
              </div>

              <div className="bg-slate-500 rounded-md flex flex-col w-full p-4">
                <FormDeleteItem items={items} removeItem={handleDeleteItem} />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col shrink-0 h-full w-full rounded-md p-2 bg-transparent gap-2">
          <div id="Header" className="bg-slate-500 w-full rounded-md px-5 py-2 flex justify-between items-center shadow-shape">
            <h1 className="text-lg font-bold text-zinc-200">Bem-vindo USER.</h1>
            <h2 className="text-lg font-bold text-zinc-200">Estoque</h2>
            <div className="w-36 flex flex-row justify-between items-center">
              <span className="text-sm text-zinc-50">Dia 01/07/2024</span>
              <span className="text-sm text-zinc-50 cursor-pointer" onClick={openAddItemMenu} ><Plus className="size-5"/></span>
              <span className="text-sm text-zinc-50 cursor-pointer" onClick={openDeleteItemMenu} ><Trash className="size-5"/></span>
            </div>
          </div>
          <div className="h-full grow overflow-y-scroll p-2 flex flex-col gap-2">
            <div className="bg-slate-500 rounded-md shadow-shape flex justify-between items-center text-zinc-50 text-center font-semibold px-3 py-1">
              <span className="flex flex-row justify-center items-center px-2 w-52">Cód. de Barras</span>
              <div className="w-px bg-slate-900 h-full"></div>
              <span className="flex flex-row justify-center items-center px-2 w-full grow">Descrição</span>
              <div className="w-px bg-slate-900 h-full"></div>
              <span className="flex flex-row justify-center items-center px-2 w-28">Unid.</span>
              <div className="w-px bg-slate-900 h-full"></div>
              <span className="flex flex-row justify-center items-center px-2 w-28">Quant.</span>
              <div className="w-px bg-slate-900 h-full"></div>
              <span className="flex flex-row justify-center items-center px-2 w-48">V. Unit.</span>
              <div className="w-px bg-slate-900 h-full"></div>
              <span className="flex flex-row justify-center items-center px-2 w-48">Total</span>
            </div>
            <ul className="w-full h-full flex flex-col justify-start items-center gap-1">
              {items.map((item) => (
                <li key={item._id} className="w-full bg-slate-600 p-2 rounded-md shadow-shape flex flex-row justify-between items-center text-zinc-200">
                  <span className="flex flex-row justify-center items-center px-2 w-52">{item.code}</span>
                  <span className="w-full grow flex flex-row items-center px-2">{item.name}</span>
                  <span className="flex flex-row justify-center items-center px-2 w-28">{item.unit}</span>
                  <span className="flex flex-row justify-center items-center px-2 w-28">{item.quantity}</span>
                  <span className="flex flex-row justify-center items-center px-2 w-48">R$ {item.price}</span>
                  <span className="flex flex-row justify-center items-center px-2 w-48">R$ {item.quantity * item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
