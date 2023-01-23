import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen md:overflow-y-scroll">
      {pacientes.length && pacientes.length ? (
        <>
          <h2 className="font-bold text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-xl mt-5 text-center mb-10">
            Administra tus
            <span className="text-indigo-700 font-bold">
              {" "}
              Pacientes y citas
            </span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-bold text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10">
            comienza a agregarlos
            <span className="text-indigo-700 font-bold">
              {" "}
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
