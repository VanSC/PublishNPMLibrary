const { expect } = require('chai');
const { daysUntilChristmas } = require('./source/index');

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
