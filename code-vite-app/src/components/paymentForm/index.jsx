import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css'; 
import Swal from 'sweetalert2'; // Importar SweetAlert2

const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault(); // Prevenir el envío del formulario

    // Validar que todos los campos estén completos
    const { number, expiry, cvc, name } = state;
    if (!number || !expiry || !cvc || !name) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos de la tarjeta.',
      });
      return; // Salir de la función si hay campos vacíos
    }

    // Si todos los campos están completos, mostrar la alerta de éxito
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Pago realizado con éxito",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    // Aquí puedes agregar cualquier lógica adicional que necesites para procesar el pago
  }

  return (
    <div className="payment-form">
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="number"
          placeholder="Número de tarjeta"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="number"
          name="cvc"
          placeholder="CVC"
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <button type="submit">Confirmar Pago</button>
      </form>
    </div>
  );
}

export default PaymentForm;
