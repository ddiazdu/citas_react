import Swal from "sweetalert2";

const alertaError = (Alerta) => {
  Swal.fire({
    icon: "error",
    title: "Oops!",
    text: Alerta,
  });
};
const alertaExito = (Alerta) => {
  Swal.fire({
    icon: "success",
    title: "Bien hecho!",
    text: Alerta,
  });
};

export default { alertaError, alertaExito };
