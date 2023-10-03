const { expect } = require('chai');
const { validateForm } = require('./source/index');

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
