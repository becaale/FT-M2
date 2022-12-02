import React from "react";
import "./Contact.modules.css";

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  const errors = {};
  if (!inputs.name) {
    errors.name = "Se requiere un nombre";
  }
  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (inputs.phone < 0) {
    errors.phone = "Sólo números positivos";
  }
  if (!inputs.subject) {
    errors.subject = "Se requiere un asunto";
  }
  if (!inputs.message) {
    errors.message = "Se requiere un mensaje";
  }
  return errors;
}

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setInputs((prevInputs) => {
      return { ...prevInputs, [property]: value };
    });
    setErrors(
      validate({
        ...inputs,
        [property]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value;
    if (Object.keys(errors).length > 0) {
      alert("Debes corregir todos los errores");
    } else {
      alert("Datos completos");
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="Name">Nombre:</label>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre..."
          value={inputs.name}
          onChange={handleChange}
          className={errors?.name && "warning"}
        />
        <p className="danger">{errors?.name}</p>
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="text"
          name="email"
          placeholder="Escribe tu email..."
          value={inputs.email}
          onChange={handleChange}
          className={errors?.email && "warning"}
        />
        <p className="danger">{errors?.email}</p>
      </div>
      <div>
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="number"
          name="phone"
          placeholder="Escribe un teléfono..."
          value={inputs.phone}
          onChange={handleChange}
          className={errors?.phone && "warning"}
        />
        <p className="danger">{errors?.phone}</p>
      </div>
      <div>
        <label htmlFor="subject">Asunto:</label>
        <input
          type="text"
          name="subject"
          placeholder="Escribe el asunto..."
          value={inputs.subject}
          onChange={handleChange}
          className={errors?.subject && "warning"}
        />
        <p className="danger">{errors?.subject}</p>
      </div>
      <div>
        <label htmlFor="message">Mensaje:</label>
        <textarea
          type="text"
          name="message"
          placeholder="Escribe tu mensaje..."
          value={inputs.message}
          onChange={handleChange}
          className={errors?.message && "warning"}
        />
        <p className="danger">{errors?.message}</p>
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </div>
    </form>
  );
}
