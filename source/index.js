//calcular dias hasta navidad
function daysUntilChristmas() {
    const currentDate = new Date();
    const christmasDate = new Date(currentDate.getFullYear(), 11, 25); 
    const timeDifference = christmasDate - currentDate;
    const daysUntilChristmas = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysUntilChristmas;
  }
  
//calcular edad
function calculateAge(fechaNacimiento) {
    const fechaActual = new Date();
    const fechaNac = new Date(fechaNacimiento);
    const edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    if (
      fechaActual.getMonth() < fechaNac.getMonth() ||
      (fechaActual.getMonth() === fechaNac.getMonth() &&
        fechaActual.getDate() < fechaNac.getDate())
    ) {
      return edad - 1;
    } else {
      return edad;
    }
  }
  
//validar formulario
function validateForm(datosFormulario, camposRequeridos, camposOpcionales) {
    const errores = {};
    for (const campo of camposRequeridos) {
      if (!(campo in datosFormulario)) {
        errores[campo] = 'Este campo es obligatorio';
      }
    }
    if (camposOpcionales) {
      for (const campo of camposOpcionales) {
        if (datosFormulario[campo] && typeof datosFormulario[campo] !== 'string') {
          errores[campo] = 'Este campo debe ser una cadena de texto';
        }
      }
    }
    return errores;
  }
  
  
module.exports = {
    daysUntilChristmas,
    calculateAge,
    validateForm
  };