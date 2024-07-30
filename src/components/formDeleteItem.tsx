import React, { useState, useMemo } from 'react';
import axios from 'axios';
import { Trash } from 'lucide-react';
import debounce from 'lodash/debounce';

const FormDeleteItem = ({ items, removeItem }) => {
  const [code, setCode] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const debouncedFilterItems = useMemo(() => debounce((inputCode) => {
    console.log('Filtrando com código:', inputCode); // Verifique se está sendo chamado
    if (inputCode) {
      const filtered = items.filter(item => item.code.startsWith(inputCode));
      console.log('Itens filtrados:', filtered); // Verifique o resultado do filtro
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  }, 300), [items]);

  const handleChange = (e) => {
    const inputCode = e.target.value;
    setCode(inputCode);
    debouncedFilterItems(inputCode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(`http://localhost:3000/items/delete/${code}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      removeItem(code); // Atualize a lista de itens removendo o item deletado
      setCode(''); // Limpe o campo do formulário
      setFilteredItems([]); // Limpe a lista de itens filtrados
    } catch (error) {
      if (error.response) {
        console.error('Erro da API:', error.response.data);
      } else {
        console.error('Erro ao enviar dados para a API:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 flex-col flex">
      <input
        type="text"
        name="code"
        placeholder="Cód. de barras"
        value={code}
        onChange={handleChange}
        className="rounded-md px-2 py-1 placeholder-opacity-100 placeholder-zinc-700 text-zinc-950 outline-offset-1 outline-blue-700"
      />
      <button
        type="submit"
        className="px-5 py-2 shadow-shape w-full rounded-md justify-center bg-red-700 flex flex-row items-center text-zinc-50 hover:bg-red-500"
      >
        <Trash className="size-5" />
        <span className="pl-2">Deletar</span>
      </button>
      {filteredItems.length > 0 && (
        <ul className="mt-2 space-y-2 bg-gray-200 p-2 rounded-md">
          {filteredItems.map(item => (
            <li key={item._id} className="flex flex-row justify-between items-center font-semibold uppercase px-3 py-1 text-zinc-950 bg-white rounded-md">
              <span className="flex flex-row justify-center items-center px-2 w-52">{item.code}</span>
              <span className="w-full grow flex flex-row items-center px-2">{item.name}</span>
              <span className="flex flex-row justify-center items-center px-2 w-28">{item.unit}</span>
              <span className="flex flex-row justify-center items-center px-2 w-28">{item.quantity}</span>
              <span className="flex flex-row justify-center items-center px-2 w-48">R$ {item.price}</span>
              <span className="flex flex-row justify-center items-center px-2 w-48">R$ {item.quantity * item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default FormDeleteItem;
