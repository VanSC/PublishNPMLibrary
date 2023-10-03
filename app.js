const { expect } = require('chai');
const { calculateAge,daysUntilChristmas,validateForm } = require('./source/index');

describe('calculateAge', () => {
  it('debería calcular la edad correctamente', () => {
    const fechaNacimiento = '2000-01-01';
    const fechaActual = '2023-01-01';
    const resultado = calculateAge(fechaNacimiento, fechaActual);

    if (resultado === 23) {
      console.log('La prueba para calculateAge pasó correctamente.');
    } else {
      console.error('La prueba para calculateAge falló. El resultado fue:', resultado);
    }
  });
});


describe('daysUntilChristmas', () => {
  it('debería devolver la cantidad correcta de días hasta Navidad', () => {
    const fechaActual = new Date('2023-12-01');
    const resultado = daysUntilChristmas(fechaActual);
    if (resultado === 84) {
      console.log('La prueba para daysUntilChristmas pasó correctamente.');
    } else {
      console.error('La prueba para daysUntilChristmas falló. El resultado fue:', resultado);
    }
  });
});


describe('validateForm', () => {
  it('debería validar un formulario correctamente', () => {
    const formData = {
      nombre: 'John Doe',
      email: 'john.doe@example.com',
      telefono: '1234567890',
    };

    const camposRequeridos = ['nombre', 'email'];
    const camposOpcionales = ['telefono'];

    const errores = validateForm(formData, camposRequeridos, camposOpcionales);
    if (Object.keys(errores).length === 0) {
      console.log('La prueba para validateForm pasó correctamente.');
    } else {
      console.error('La prueba para validateForm falló. Errores encontrados:', errores);
    }
  });
});
