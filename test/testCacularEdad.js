const { expect } = require('chai');
const { calculateAge } = require('./source/index');

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
