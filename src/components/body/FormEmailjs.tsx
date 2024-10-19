import React from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


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
    <Form method="POST" id="form" onSubmit={handleSubmit}>
      <FloatingLabel
        controlId="floatingInput"
        label="Su nombre"
        className="mb-3"
      >
        {/* FIELD NAME  */}
        <Form.Control
          type="text"
          placeholder="Su nombre"
          name="name"
          required
        />
      </FloatingLabel>
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
          required
        />
      </FloatingLabel>
      {/* FIELD MESSAGE */}
      <FloatingLabel controlId="floatingTextarea2" label="su mensaje">
        <Form.Control
          as="textarea"
          placeholder="su mensaje"
          style={{ height: "100px" }}
          name="message"
          required
        />
      </FloatingLabel>
      <Button variant="dark" type="submit" className="mt-3 w-100 bg-gradient">
        Enviar
      </Button>
    </Form>
  );
};
