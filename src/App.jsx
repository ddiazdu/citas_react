import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import React from "react";
import Swal from "sweetalert2";

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);

  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );

    Swal.fire({
      title: "Estás seguro?",
      text: "No volveras a ver este archivo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Bórralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        setPacientes(pacientesActualizados);
        Swal.fire("Borrado!", "Su archivo ha sido eliminado.", "success");
      }
    });
  };

  return (
    <div>
      <Header />
      <div className="mt-12 md:flex justify-center">
        {/* Declaración de un prop en react */}
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
