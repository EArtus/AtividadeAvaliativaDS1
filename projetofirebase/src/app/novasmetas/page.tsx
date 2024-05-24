"use client";

import { ref, onValue, push } from "firebase/database";
import { db } from "../../services/firebase/firebaseConfiguration";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface IPlace {
  [key: string]: {
    titulo: string;
    descricao: string;
    data_inicio: Date;
    data_termino: Date;
    status: boolean;
  };
}

export default function Home() {
  const router = useRouter();
  const [newPlace, setNewPlace] = useState({
    titulo: "",
    descricao: "",
    data_inicio: "",
    data_termino:"",
    status:"",
  });

  const addNewPlace = () => {
    push(ref(db, "/Metas"), newPlace);
    setNewPlace({ titulo: "" , descricao:"" , data_inicio: "" ,data_termino:"",status:"" });
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
      <div className="max-w-md mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addNewPlace();
          }}
        >
          <div className="mb-4">
            <h2 className="text-center text-3xl mb-8 font-extrabold text-white">
              Cadastrar Meta
            </h2>
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="nome"
            >
              Titulo:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="titulo"
              type="text"
              placeholder="titulo"
              value={newPlace.titulo}
              onChange={(e) =>
                setNewPlace({ ...newPlace, titulo: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="endereco"
            >
              Descrição
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="descicao"
              type="text"
              placeholder="Descrição"
              value={newPlace.descricao}
              onChange={(e) =>
                setNewPlace({ ...newPlace, descricao: e.target.value })
              }
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="situacao"
            >
              Data Inicio
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="data_inicio"
              type="text"
              placeholder="Data Inicio"
              value={newPlace.data_inicio}
              onChange={(e) =>
                setNewPlace({ ...newPlace, data_inicio: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="endereco"
            >
              Data Termino
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="data_termino"
              type="text"
              placeholder="Data Termino"
              value={newPlace.data_termino}
              onChange={(e) =>
                setNewPlace({ ...newPlace, data_termino: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
          <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="endereco"
            >
              Status
            </label>
            <input
              className="border border-gray-300 w-[50%] rounded-md px-3 py-2 mb-3 text-black"
              name="active"
              checked={false}
              id="status"
              type="checkbox"
              placeholder="status"
              value={newPlace.status}
              onChange={(e) =>
                setNewPlace({ ...newPlace, status: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Adicionar Meta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}