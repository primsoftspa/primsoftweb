import React from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import InputGroup from 'react-bootstrap/InputGroup';


export default () => {

  const MySwal = withReactContent(Swal);
  const showMessage = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Gracias',
      text: 'Se envió su mensaje correctamente',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICEID, // cliente smtp
        import.meta.env.VITE_TEMPLATEID, // body template
        form, // formulario captado
        import.meta.env.VITE_PUBLICKEY // public key emailjs
      )
      .then((res) => {
        console.log(res);
        showMessage();
        form.reset();
      })
      .catch((err) => {
        console.log(err),
          alert("Ocurrió un error por parte de nuestro servicio")
      });
  };

  return (
    <Form method="POST" id="form" onSubmit={handleSubmit} data-bs-theme="dark" className="text-gray">
      <FloatingLabel
        controlId="floatingInput"
        label="Su nombre"
        className="mb-3"
      >
        {/* FIELD NAME  */}
        <Form.Control
          type="text"
          placeholder="Su nombre"
          name="nombre"
          className="shadow-sm"
          required
        />
      </FloatingLabel>
      {/* PHONE FIELD */}
      <InputGroup className="mb-3 shadow-sm rounded">
        <InputGroup.Text id="basic-addon1">+56</InputGroup.Text>
        <Form.Control
          placeholder="Su teléfono"
          aria-label="Teléfono"
          aria-describedby="basic-addon1"
          className="p-3 bg-dark text-gray"
          name="telefono"
          type="tel"
        />
      </InputGroup>
      {/* FIELD EMAIL */}
      <FloatingLabel
        controlId="floatingEmail"
        label="Su email"
        className="mb-3"
      >
        <Form.Control
          type="email"
          placeholder="Su email"
          name="email"
          className="shadow-sm"
          required
        />
      </FloatingLabel>
      {/* FIELD MESSAGE */}
      <FloatingLabel controlId="floatingTextarea2" label="su mensaje">
        <Form.Control
          as="textarea"
          placeholder="Mensaje"
          style={{ height: "100px" }}
          name="mensaje"
          className="shadow-sm"
          required
        />
      </FloatingLabel>
      <div className="g-recaptcha border-0 my-3" data-sitekey="6LdZ9WsqAAAAABTiA1RZb0xoFpIMVuzd6oY0kZWG" data-theme="dark"></div>
      <Button variant="info" type="submit" className="mt-4 w-100 p-2 px-4 text-white shadow-sm rounded-pill">
        Enviar
      </Button>
    </Form>
  );
};
