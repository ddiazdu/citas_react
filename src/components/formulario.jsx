import { useState, useEffect } from "react";
import Alertas from "./Alertas";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  //Evitar re-render
  //Me muestro el objeto paciente solo cuando está listo
  useEffect(() => {
    //Validando si el objeto paciente tiene contenido
    if (Object.keys(paciente).length > 0) {
      setMascota(paciente.mascota);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  //Metodo para generar un ID random
  const generarId = () => {
    let random = Math.random().toString(36).substr(2);
    let fecha = Date.now().toString(36);
    return random + fecha;
  };

  const limpiarCampos = () => {
    setMascota("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
  };

  //Validación del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([mascota, propietario, email, alta, sintomas].includes("")) {
      Alertas.alertaError("Debes rellenar todos los campos");
    } else {
      Alertas.alertaExito("Registros ingresados con éxito");

      //Construimos un objeto de paciente
      const objPaciente = {
        mascota,
        propietario,
        email,
        alta,
        sintomas,
      };

      if (paciente.id) {
        //Editando el registro
        objPaciente.id = paciente.id;

        const pacientesActualizados = pacientes.map((pacienteState) =>
          pacienteState.id === paciente.id ? objPaciente : pacienteState
        );

        setPacientes(pacientesActualizados);
        setPaciente({});
        Alertas.alertaExito("Registros editados con éxito");
        limpiarCampos();
      } else {
        //Nuevo Registro
        //Creando una copia de pacientes y agregarla al arreglo de objetos
        objPaciente.id = generarId();
        setPacientes([...pacientes, objPaciente]);
      }
      limpiarCampos();
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-3 ">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de pacientes
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-700 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="cursor-pointer block font-bold text-gray-700 pb-2 uppercase"
          >
            Nombre Mascota
          </label>
          <input
            autoComplete="off"
            id="mascota"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="cursor-pointer block font-bold text-gray-700 pb-2 uppercase"
          >
            Nombre Propietario
          </label>
          <input
            autoComplete="off"
            id="propietario"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="cursor-pointer block font-bold text-gray-700 pb-2 uppercase"
          >
            Correo Electronico
          </label>
          <input
            autoComplete="off"
            id="email"
            className=" border-2 w-full p-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="email@adress.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fechaAlta"
            className="cursor-pointer block font-bold text-gray-700 pb-2 uppercase"
          >
            Alta
          </label>
          <input
            id="fechaAlta"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            type="date"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="cursor-pointer block font-bold text-gray-700 pb-2 uppercase"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            placeholder="Describa los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="cursor-pointer hover:bg-indigo-900 bg-indigo-700 w-full p-3 text-white uppercase font-bold transition-all"
          value={paciente.id ? "Editar Paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
