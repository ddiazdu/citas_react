import { useEffect } from "react";
import App from "../App";
const paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { mascota, propietario, email, alta, sintomas, id } = paciente;

  const handleEliminar = () => {
    eliminarPaciente(id);
  };

  return (
    <div className="m-3 bg-white shadow-md px-5 py-5 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre Mascota:
        <span className="font-normal normal-case">{mascota}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre Propietario:
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Correo Electronico:
        <span className="font-normal normal-case"> {email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fehca de Alta:
        <span className="font-normal normal-case"> {alta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:
        <span className="font-normal normal-case"> {sintomas}</span>
      </p>

      <div className="flex space-x-2 mt-10">
        <button
          className="text-white font-medium text-center py-2 px-10 uppercase bg-indigo-500 hover:bg-indigo-700 rounded-lg"
          type="button"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          className="text-white font-medium text-center py-2 px-10 uppercase bg-red-500 hover:bg-red-700 rounded-lg"
          type="button"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default paciente;
