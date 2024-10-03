import React from 'react';
import Swal from 'sweetalert2'; // Importar SweetAlert2

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Mostrar alerta de formulario enviado
        Swal.fire({
            icon: 'success',
            title: 'Formulario enviado',
            text: 'Tu mensaje ha sido enviado exitosamente.',
            confirmButtonText: 'Aceptar',
        });
    };

    return (
        <div className="contact-container">
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="submit-button">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;
