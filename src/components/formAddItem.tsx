import React, { useState } from 'react';
import axios from 'axios';
import { Plus } from 'lucide-react';

const FormAddItem = ({ addItem }) => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    unit: '',
    quantity: '',
    price: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/items', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      addItem(response.data); // Atualize a lista de itens
      setFormData({
        code: '',
        name: '',
        unit: '',
        quantity: '',
        price: '',
      }); // Limpe os campos do formulário
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
        value={formData.code}
        onChange={handleChange}
        className="rounded-md px-2 py-1 placeholder-opacity-100 placeholder-zinc-700 text-zinc-950 outline-offset-1 outline-blue-700"
      />
      <input
        type="text"
        name="name"
        placeholder="Descrição"
        value={formData.name}
        onChange={handleChange}
        className="rounded-md px-2 py-1 placeholder-opacity-100 placeholder-zinc-700 text-zinc-950 outline-offset-1 outline-blue-700"
      />
      <input
        type="text"
        name="unit"
        placeholder="Unidade (cx, und, etc)"
        value={formData.unit}
        onChange={handleChange}
        className="rounded-md px-2 py-1 placeholder-opacity-100 placeholder-zinc-700 text-zinc-950 outline-offset-1 outline-blue-700"
      />
      <input
        type="text"
        name="quantity"
        placeholder="Quantidade"
        value={formData.quantity}
        onChange={handleChange}
        className="rounded-md px-2 py-1 placeholder-opacity-100 placeholder-zinc-700 text-zinc-950 outline-offset-1 outline-blue-700"
      />
      <input
        type="text"
        name="price"
        placeholder="Valor unitário"
        value={formData.price}
        onChange={handleChange}
        className="rounded-md px-2 py-1 placeholder-opacity-100 placeholder-zinc-700 text-zinc-950 outline-offset-1 outline-blue-700"
      />
      <button
        type="submit"
        className="px-5 py-2 shadow-shape w-full rounded-md justify-center bg-slate-700 flex flex-row items-center text-zinc-50 hover:bg-slate-500"
      >
        <Plus className="size-5" />
        <span className="pl-2">Adicionar</span>
      </button>
    </form>
  );
};

export default FormAddItem;
